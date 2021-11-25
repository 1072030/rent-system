import { createApp } from "vue";
import App from "./App.vue";
import Elementplus from "element-plus";
import router from "./router";
createApp(App).use(router).use(Elementplus).mount("#app");
