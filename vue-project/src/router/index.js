import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/pages/contacts.vue"),
  },
  {
    path: "/rules",
    name: "rules",
    component: () => import("@/pages/rules.vue"),
  },
  {
    path: "/blog/:id",
    name: "blogArticle",
    component: () => import("@/pages/blog/[id].vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;