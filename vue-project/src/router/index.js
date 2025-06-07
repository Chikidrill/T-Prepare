import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/index.vue";

// Импорт auth store (если используешь Pinia/Vuex — адаптируй)
import auth from "@/store/auth"; // предполагается, что у тебя есть auth.js

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
    meta: { requiresAuth: true }, // 👈 добавляем мета-флаг
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/pages/contacts.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("@/pages/Registration.vue"),
  },
  {
    path: "/exam",
    name: "exam",
    component: () => import("@/pages/exam.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 👇 Навигационный гард для проверки авторизации
router.beforeEach((to, from, next) => {
  const isAuth = !!auth.state.token; // можно также проверить localStorage.getItem("token")
  if (to.meta.requiresAuth && !isAuth) {
    next("/registration"); // или `/login` если есть отдельная страница
  } else {
    next();
  }
});

export default router;
