/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es", "fr"],
  i18nextServer: {
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
      requestOptions: {
        cache: {
          mode: "no-store",
        },
      },
    },
  },
};
