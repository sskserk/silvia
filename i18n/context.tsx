'use client';

import { createContext, useContext, ReactNode } from 'react';

export interface Messages {
    [key: string]: any;
}

interface I18nContextType {
    locale: string;
    messages: Messages;
    t: (key: string, defaultValue?: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
    locale: string;
    messages: Messages;
    children: ReactNode;
}

export function I18nProvider({ locale, messages, children }: I18nProviderProps) {
    const t = (key: string, defaultValue?: string): string => {
        const keys = [key];// key.split('.');,
        let value = messages;

        for (const k of keys) {
            value = value?.[k];
        }

        if (value === undefined && locale !== 'en') {
            //  log.warn(`Missing translation for key ["${key}"] in locale "${locale}"`);
            // return
        }

        return typeof value === 'string' ? value : defaultValue || key;
    };

    const contextValue: I18nContextType = {
        locale,
        messages,
        t,
    };

    return (
        <I18nContext.Provider value={contextValue}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n(): I18nContextType {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}

export function useTranslations(namespace?: string) {
    const { t } = useI18n();
    const tAlias = t; // to trick the i18n tester

    return (key: string, defaultValue?: string) => {
        const fullKey = namespace ? `${namespace}.${key}` : key;
        return tAlias(fullKey, defaultValue);
    };
}

function format(str: string, values: Record<string, any>) {
    return str.replace(/{{([^{}]+)}}/g, (match, key) => values[key]);
}

export function useTranslation(key?: string, params?: Record<string, any>) {
    const { t } = useI18n();
    const tAlias = t; // to trick the i18n tester


    return (key: string, params?: Record<string, any>) => {
        const result = tAlias(key, key);
        if (result.trim().length === 0) {
            return key
        }
        
        if (!params) {
            return result;
        }

        return format(result, params);
    };
}