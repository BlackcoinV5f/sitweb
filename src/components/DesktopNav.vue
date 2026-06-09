<template>
  <nav class="desktop-nav">

    <!-- DROPDOWN -->
    <div class="dropdown">

      <button class="dropdown-trigger">
        <span>{{ t("DesktopNav.nav.blockchain") }}</span>
        <span class="dropdown-arrow">▾</span>
      </button>

      <!-- MENU -->
      <div class="dropdown-menu">
        <router-link to="/whitepaper" class="dropdown-item">
          {{ t("DesktopNav.nav.whitepaper") }}
        </router-link>
        <router-link to="/roadmap" class="dropdown-item">
          {{ t("DesktopNav.nav.roadmap") }}
        </router-link>
      </div>

    </div>

    <!-- LINKS -->
    <router-link to="/ecosystem" class="nav-link">
      {{ t("DesktopNav.nav.ecosystem") }}
    </router-link>

    <router-link to="/about" class="nav-link">
      {{ t("DesktopNav.nav.about") }}
    </router-link>

    <router-link to="/community" class="nav-link">
      {{ t("DesktopNav.nav.community") }}
    </router-link>

    <!-- LANGUAGE SWITCH -->
    <div class="language-switch">
      <button
        class="lang-btn"
        :class="{ active: locale === 'fr' }"
        @click="changeLanguage('fr')"
      >
        FR
      </button>
      <button
        class="lang-btn"
        :class="{ active: locale === 'en' }"
        @click="changeLanguage('en')"
      >
        EN
      </button>
    </div>

  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n";

/* =========================
   I18N
========================= */
const { t, locale } = useI18n();

/* =========================
   METHODS
========================= */
const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
};
</script>

<style scoped src="../styles/desktop-nav.css"></style>