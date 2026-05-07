<template>
  <header class="top-bar">

    <!-- LOGO -->
    <router-link
      to="/"
      class="logo-container"
      @click="closeMenu"
    >
      <img
        :src="logo"
        alt="Liton Network Logo"
        class="logo-img"
      />

      <span class="logo-text">
        Liton Network
      </span>
    </router-link>

    <!-- DESKTOP NAVIGATION -->
    <DesktopNav />

    <!-- MOBILE BUTTON -->
    <button
      class="menu-toggle"
      @click="toggleMenu"
      :aria-expanded="menuOpen"
      aria-label="Ouvrir le menu"
    >
      <span v-if="menuOpen">✕</span>
      <span v-else>☰</span>
    </button>

    <!-- MOBILE MENU -->
    <MobileMenu
      :open="menuOpen"
      @close="closeMenu"
    />

  </header>
</template>

<script setup>
import { ref, watch } from "vue";

import logo from "../assets/blackcoin-logo.png";

import DesktopNav from "./DesktopNav.vue";
import MobileMenu from "./MobileMenu.vue";

/* =========================
   STATE
========================= */

const menuOpen = ref(false);

/* =========================
   ACTIONS
========================= */

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

/* =========================
   BODY SCROLL LOCK
========================= */

watch(menuOpen, (isOpen) => {

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

});
</script>

<style scoped src="../styles/header.css"></style>