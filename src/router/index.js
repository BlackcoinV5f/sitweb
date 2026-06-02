import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Whitepaper from "../views/Whitepaper.vue";

import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import TermsOfUse from "../views/TermsOfUse.vue";

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

  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },

  {
    path: "/terms-of-use",
    name: "TermsOfUse",
    component: TermsOfUse,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});