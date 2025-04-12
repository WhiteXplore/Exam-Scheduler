import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

// Create Vue app
const app = createApp(App);

// Create Pinia instance
const pinia = createPinia();

// Use Pinia, Vuex store, and Router
app.use(pinia);
app.use(store);
app.use(router);

// Mount the app
app.mount("#app");
