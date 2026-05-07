<template>
  <nav class="desktop-nav">

    <!-- DROPDOWN -->
    <div
      class="dropdown"
      @mouseenter="dropdownOpen = true"
      @mouseleave="dropdownOpen = false"
    >

      <button
        class="dropdown-trigger"
        :aria-expanded="dropdownOpen"
      >
        <span>Blockchain</span>

        <span
          class="dropdown-arrow"
          :class="{ active: dropdownOpen }"
        >
          ▾
        </span>
      </button>

      <!-- MENU -->
      <transition name="dropdown">

        <div
          v-show="dropdownOpen"
          class="dropdown-menu"
        >

          <router-link
            to="/whitepaper"
            class="dropdown-item"
          >
            Livre blanc
          </router-link>

          <router-link
            to="/roadmap"
            class="dropdown-item"
          >
            Feuille de route
          </router-link>

        </div>

      </transition>

    </div>

    <!-- LINKS -->

    <router-link
      to="/ecosystem"
      class="nav-link"
    >
      Écosystème
    </router-link>

    <router-link
      to="/about"
      class="nav-link"
    >
      À propos
    </router-link>

    <router-link
      to="/community"
      class="nav-link"
    >
      Communauté
    </router-link>

  </nav>
</template>

<script setup>
import { ref } from "vue";

/* =========================
   STATE
========================= */

const dropdownOpen = ref(false);
</script>

<style scoped src="../styles/desktop-nav.css"></style>