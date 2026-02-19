
import './mark.css'
import ChatPage from '../chat/page'
import GreetingArea from './page.client';
import loadBerichten, { useServerTranslation } from '@/i18n';
import { I18nProvider, useTranslation } from '@/i18n/context';



type Props = {
    locale: string;
};

export default async function ChatWindow({ params }: { params: { locale: string } }) {
    const { locale } = await params;

    const messages = await loadBerichten(locale, ['chat']);
    
    const t = await useServerTranslation(messages);


    return (
        <I18nProvider locale={locale} messages={messages}>
            <header>
                header
            </header>
            <main>

                <div className="top-container">
                    <div className="left-column">
                        <div>
                            <GreetingArea />
                        </div>
                        <div>
                            <h1>Hello world</h1>
                        </div>
                        <div>
                            I'm your AI agent
                            {t('home.welcome')}
                        </div>
                        <div>
                            <input type="text" placeholder={t('Ask me anything...')} />
                        </div>
                        <div>
                            <button>{t('Submit question')}</button>
                        </div>
                    </div>
                    <div className="right-column">
                        <ChatPage />
                    </div>
                </div>
            </main>
            <footer>
                footer
            </footer>
        </I18nProvider>
    )
}
