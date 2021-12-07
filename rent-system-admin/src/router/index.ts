import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "beaconSetting",
    component: () => import("../view/inputData.vue"),
  },
  {
    path: "/reserve",
    name: "My Names",
    component: () => import("../view/information.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
