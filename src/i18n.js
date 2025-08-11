import { createI18n } from "vue-i18n";
import deutsch from "./languages/​deutsch";
import english from "./languages/english";

const i18n = createI18n({
  legacy: false,
  locale: "de",
  fallbackLocale: "de",
  messages: {
    de: deutsch.messages,
    en: english.messages,
  },
});
export default i18n;
