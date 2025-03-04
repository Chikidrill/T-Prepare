import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/personalaccount",
    name: "personalaccount",
    component: () => import("@/pages/PersonalAccount.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/pages/contacts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;