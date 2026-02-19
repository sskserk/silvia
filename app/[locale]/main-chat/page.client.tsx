'use client'
import {useTranslation} from '@/i18n/context';

export default function GreetingArea() {
    const t = useTranslation();
    return (
        <>
        <div>Greeting:
            {t('home.welcome')}
        </div>
        <div>
            {t('home.description')}
        </div>
        <div>
            {t('{{count}} days ago', { count: 5 })}
        </div>
        <div>
            {t('home.nonexistent.key')}
        </div>
        </>
        )
    }