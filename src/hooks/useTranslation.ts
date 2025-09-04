import { useState, useEffect } from 'react';
import translations from '@/data/translations.json';

export type Language = 'en' | 'hi' | 'ta';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('tourist-safety-language') as Language;
    if (savedLanguage && ['en', 'hi', 'ta'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('tourist-safety-language', language);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const languages = [
    { code: 'en' as Language, name: 'English', nativeName: 'English' },
    { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'ta' as Language, name: 'Tamil', nativeName: 'தமிழ்' },
  ];

  return {
    currentLanguage,
    changeLanguage,
    t,
    languages,
  };
};