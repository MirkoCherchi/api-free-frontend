import { createApp } from "vue";
import "./scss/style.scss";
// import router from "./router"; // Commenta l'importazione del router
import App from "./App.vue";

createApp(App)
  //.use(router) // Commenta l'uso del router
  .mount("#app");
