import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';
import { i18n } from 'src/boot/i18n';

export const DEFAULT_LANGUAGE = 'en';

export function setI18nLanguage(locale: string) {
  i18n.global.locale.value = locale;

  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html')?.setAttribute('lang', locale);
}

function getAllLocales(locale: string): Set<string> {
  const ls = locale.split('-');
  const locales = new Set<string>([DEFAULT_LANGUAGE]);
  let loc = '';
  for (let i = 0; i < ls.length; i++) {
    loc += '-' + ls[i];
    locales.add(loc.slice(1));
  }
  return locales;
}

export async function loadLocaleMessages(locale: string) {
  for (const lc of getAllLocales(locale)) {
    const response: Response = await fetch(`/locales/${lc}.json`);
    if (response.ok) {
      const messages = await response.json();
      i18n.global.setLocaleMessage(lc, messages);
    }
  }
  setI18nLanguage(locale);
  return nextTick();
}

export default i18n;
