import fs from 'fs';
import path from 'path';
import traverse from "@babel/traverse";
import * as parser from "@babel/parser";



function getAllJsxFiles(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory() && !filePath.includes('node_modules')) {
            getAllJsxFiles(filePath, fileList);
        } else if (
            (filePath.endsWith('.jsx') || filePath.endsWith('.tsx')) &&
            !filePath.includes('.test.')
        ) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const i18nNamespaces = [
    {
        name: "chat",
        folders: ["chat", "main-chat", "fade"]
    },
    {
        name: "home",
        folders: ["inputs", "flex"]
    }
]

const langs = ['en', 'nl'];


describe('scan and enfill translation files', () => {
    it('should scan for translation keys and enfill translation files', async () => {
        // make sure that resources files exists for each namespace and language
        for (const namespace of i18nNamespaces) {
            for (const lang of langs) {
                const translationFilePath = path.join('messages', `${lang}/${namespace.name}.json`);
                if (!fs.existsSync(translationFilePath)) {
                    fs.mkdirSync(path.dirname(translationFilePath), { recursive: true });
                    fs.writeFileSync(translationFilePath, JSON.stringify({}));
                }
            }
        }

        // make sure all translation keys are present in translation files, if not add them with empty string as value
        for (const namespace of i18nNamespaces) {
            for (const folder of namespace.folders) {
                const files = getAllJsxFiles(path.join(process.cwd(), 'app', '[locale]', folder));
                for (const file of files) {
                    const code = fs.readFileSync(file, 'utf-8');
                    const ast = parser.parse(code, {
                        sourceType: 'module',
                        plugins: ['jsx', 'typescript'],
                    });


                    traverse(ast, {
                        CallExpression(path) {
                            const callee = path.node.callee;
                            if (callee.type === 'Identifier' && callee.name === 't') {
                                const args = path.node.arguments;
                                if (args.length > 0 && args[0].type === 'StringLiteral') {
                                    const key = args[0].value;
                                    for (const lang of langs) {
                                        const translationFilePath = `messages/${lang}/${namespace.name}.json`
                                        const translations = JSON.parse(fs.readFileSync(translationFilePath, 'utf-8'));
                                        if (!translations[key]) {
                                            translations[key] = ''; // Add the key with the key as the default value
                                            fs.writeFileSync(translationFilePath, JSON.stringify(translations, null, 2));
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        }


        const translationLangs: string[] = ['nl']
        
        // travers all translation files and make sure that all keys have value.
        // Empty keys per locale should be accumulated and printed as errors in the end of the test
        const emptyKeys: Record<string, Record<string, string[]>> = {}; // { lang: { namespace: [keys] } }
        for (const namespace of i18nNamespaces) {
            for (const lang of translationLangs) {
                const translationFilePath = `messages/${lang}/${namespace.name}.json`
                const translations = JSON.parse(fs.readFileSync(translationFilePath, 'utf-8'));
                for (const key in translations) {
                    if (!translations[key] || translations[key].trim() === '') {
                        if (!emptyKeys[lang]) {
                            emptyKeys[lang] = {};
                        }
                        if (!emptyKeys[lang][namespace.name]) {
                            emptyKeys[lang][namespace.name] = [];
                        }
                        emptyKeys[lang][namespace.name].push(key);
                    }
                }
            }
        }
        // print errors if there are empty keys not as individual errros but as one single error with totals
        if (Object.keys(emptyKeys).length > 0) {
            let errorMessage = 'Empty translation keys found:\n';
            for (const lang in emptyKeys) {
                errorMessage += `Language: ${lang}\nEmpty Keys: ${JSON.stringify(emptyKeys[lang], null, 1)}\n\n`;
            }
            throw new Error(errorMessage);
        }
       /// console.log(emptyKeys);

        
    })
})

