import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import store from "./store";
createApp(App).use(store).use(router).use(Vant).mount("#app");
