import { createRouter, createWebHashHistory } from "vue-router";
import Selection from "../screens/Selection.vue";
import Home from "../screens/Home.vue";

export const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Selection,
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});