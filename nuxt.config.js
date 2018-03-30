module.exports = {
  modules: [
    ['nuxt-i18n', {
      seo: true,
      defaultLocale: 'en',
      detectBrowserLanguage: true,
      redirectCookieKey: 'redirected',
      useRedirectCookie: true,
      vueI18n: {
        fallbackLocale: 'en',
      },
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
          langFile: 'en.js'
        },
        {
          code: 'ru',
          iso: 'ru-RU',
          name: 'Русский',
          langFile: 'ru.js'
        }
      ],
      loadLanguagesAsync: true
    }],
  ]
}
