<template>

  <!-- MOBILE MENU -->
  <transition name="menu">

    <div
      v-if="open"
      class="mobile-overlay"
    >

      <!-- SIDEBAR -->
      <div class="mobile-sidebar">

        <!-- TOP -->
        <div class="mobile-top">

          <router-link
            to="/"
            class="mobile-logo"
            @click="closeMenu"
          >
            <img
              :src="logo"
              alt="Liton Network"
              class="mobile-logo-img"
            />

            <span class="mobile-logo-text">
              Liton Network
            </span>
          </router-link>

          <!-- CLOSE -->
          <button
            class="close-btn"
            @click="closeMenu"
          >
            ✕
          </button>

        </div>

        <!-- NAVIGATION -->
        <nav class="mobile-nav">

          <!-- DROPDOWN -->

          <div class="mobile-dropdown">

            <button
              class="mobile-dropdown-trigger"
              @click="toggleDropdown"
            >

              <span>Blockchain</span>

              <span
                class="arrow"
                :class="{ active: dropdownOpen }"
              >
                ▾
              </span>

            </button>

            <!-- SUB MENU -->

            <transition name="dropdown">

              <div
                v-show="dropdownOpen"
                class="mobile-dropdown-menu"
              >

                <router-link
                  to="/whitepaper"
                  class="mobile-sublink"
                  @click="closeMenu"
                >
                  Livre blanc
                </router-link>

                <router-link
                  to="/roadmap"
                  class="mobile-sublink"
                  @click="closeMenu"
                >
                  Feuille de route
                </router-link>

              </div>

            </transition>

          </div>

          <!-- LINKS -->

          <router-link
            to="/ecosystem"
            class="mobile-link"
            @click="closeMenu"
          >
            Ecosystem
          </router-link>

          <router-link
            to="/about"
            class="mobile-link"
            @click="closeMenu"
          >
            About Us
          </router-link>

          <router-link
            to="/community"
            class="mobile-link"
            @click="closeMenu"
          >
            Community
          </router-link>

        </nav>

      </div>

    </div>

  </transition>

</template>

<script setup>
import { ref } from "vue";

import logo from "../assets/blackcoin-logo.png";

/* =========================
   PROPS
========================= */

defineProps({
  open: Boolean
});

/* =========================
   EMITS
========================= */

const emit = defineEmits([
  "close"
]);

/* =========================
   STATE
========================= */

const dropdownOpen = ref(false);

/* =========================
   ACTIONS
========================= */

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const closeMenu = () => {
  dropdownOpen.value = false;

  emit("close");
};
</script>

<style scoped src="../styles/mobile-menu.css"></style>