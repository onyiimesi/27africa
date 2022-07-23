import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/apply",
      name: "apply",
      component: () => import('../views/ApplyView.vue')
    },
    {
      path: "/done",
      name: "done",
      component: () => import('../views/DoneView.vue')
    },
  ],
});

export default router;
