
'use server';
import fs from 'fs';

export default async function loadBerichten(locale: string, namespaces:string[] = ['home']): Promise<Record<string, string>> {
    
    const resources: Record<string, string> = {};
    for (const namespace of namespaces) {
        const translationFilePath = `messages/${locale}/${namespace}.json`;
        // read file and add resources to resources object
        const translations = JSON.parse(await fs.promises.readFile(translationFilePath, 'utf-8'));
        
        Object.assign(resources, translations);
        
    }
  
    return resources
}



export async function useServerTranslation(messages: Record<string, string>): Promise<(key: string) => string> {

    return (key: string, params?: Record<string, any>): string => {   
        if (messages.hasOwnProperty(key)) {

            const value = messages[key];
            console.log(`Translation found for key "${key}": "${value}", len is ${value.length} `);
            if (value.trim().length === 0) {
                console.log(`Translation for key "${key}" is empty. Returning key as fallback.`);
                return key
            }
            return value;
        }

        console.log(`Translation key "${key}" not found in messages.`);
        return key;
    }
}
