export const createTranslations = (
  languages: Record<string, string>,
  translations: Record<keyof typeof languages, Record<string, string>>,
  defaultLang: keyof typeof languages
) => {
  function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) return lang as keyof typeof translations;
    return defaultLang;
  }

  function useTranslations(lang: keyof typeof translations) {
    return function t(key: keyof (typeof translations)[typeof defaultLang]) {
      return translations[lang][key] || translations[defaultLang][key];
    };
  }

  function useTranslationsFromUrl(url: URL) {
    const lang = getLangFromUrl(url);
    return useTranslations(lang);
  }

  return {
    getLangFromUrl,
    useTranslations,
    useTranslationsFromUrl,
  };
};
