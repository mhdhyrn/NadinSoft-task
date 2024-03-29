import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./services/routes";
import { createI18n } from "vue-i18n";
import messages from "./locales/locale";

const i18n = createI18n({
  locale: "en",
  fallbacklocale: "en",
  messages,
});

const app = createApp(App);
app.use(i18n);
app.use(router).mount("#app");
