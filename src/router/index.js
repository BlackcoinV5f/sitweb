import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Whitepaper from "../views/Whitepaper.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/whitepaper",
    name: "Whitepaper",
    component: Whitepaper,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
