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

              <span>
                {{ t('MobileMenu.nav.blockchain') }}
              </span>

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
                  {{ t('MobileMenu.nav.whitepaper') }}
                </router-link>

                <router-link
                  to="/roadmap"
                  class="mobile-sublink"
                  @click="closeMenu"
                >
                  {{ t('MobileMenu.nav.roadmap') }}
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
            {{ t('MobileMenu.nav.ecosystem') }}
          </router-link>

          <router-link
            to="/about"
            class="mobile-link"
            @click="closeMenu"
          >
            {{ t('MobileMenu.nav.about') }}
          </router-link>

          <router-link
            to="/community"
            class="mobile-link"
            @click="closeMenu"
          >
            {{ t('MobileMenu.nav.community') }}
          </router-link>

          <!-- LANGUAGE SWITCH -->

          <div class="mobile-language-switch">

            <button
              class="mobile-lang-btn"
              :class="{ active: locale === 'fr' }"
              @click="changeLanguage('fr')"
            >
              FR
            </button>

            <button
              class="mobile-lang-btn"
              :class="{ active: locale === 'en' }"
              @click="changeLanguage('en')"
            >
              EN
            </button>

          </div>

        </nav>

      </div>

    </div>

  </transition>

</template>

<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";

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
   I18N
========================= */

const { t, locale } = useI18n();

/* =========================
   STATE
========================= */

const dropdownOpen = ref(false);

/* =========================
   ACTIONS
========================= */

const toggleDropdown = () => {

  dropdownOpen.value =
    !dropdownOpen.value;

};

const changeLanguage = (lang) => {

  // Change locale
  locale.value = lang;

  // Save language
  localStorage.setItem("lang", lang);

  // Update html lang=""
  document.documentElement.lang = lang;

};

const closeMenu = () => {

  dropdownOpen.value = false;

  emit("close");

};
</script>

<style scoped src="../styles/mobile-menu.css"></style>