import { createI18n } from "vue-i18n";
import messages from "./messages";

console.log('Messages: ', messages);

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages: messages
});

export default i18n;