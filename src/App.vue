<template>
  <div class="app-wrapper">

    <!-- HEADER -->
    <header class="top-bar">

      <!-- LOGO -->
      <div class="logo-container">
        <img src="./assets/blackcoin-logo.png" class="logo-img" />
        <span class="logo-text">Blackcoin</span>
      </div>

      <!-- MENU MOBILE -->
      <button class="menu-toggle" @click="menuOpen = !menuOpen">
        ☰
      </button>

      <!-- NAVIGATION -->
      <nav class="nav-links" :class="{ open: menuOpen }">

        <!-- DROPDOWN -->
        <div class="dropdown">
          <span class="nav-link" @click="toggleDropdown">
            Blockchain ▾
          </span>

          <div class="dropdown-menu" v-if="dropdownOpen">
            <a href="#">Livre blanc</a>
            <a href="#">Feuille de route</a>
          </div>
        </div>

        <a href="#" class="nav-link">Écosystème</a>
        <a href="#" class="nav-link">À propos</a>
        <a href="#" class="nav-link">Communauté</a>
      </nav>

    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-text">
        <h1>
          La cryptomonnaie que vous pouvez miner directement sur votre téléphone
        </h1>

        <p class="hero-subtitle">
          Blackcoin permet de miner facilement depuis une application mobile,
          sans consommation excessive d’énergie.
        </p>

        <a
          :href="apkUrl"
          class="hero-btn"
          :class="{ disabled: loading || error }"
        >
          <span v-if="loading">Chargement…</span>
          <span v-else-if="error">Téléchargement indisponible</span>
          <span v-else>Télécharger l’application Blackcoin</span>
        </a>
      </div>

      <div class="hero-image">
        <img src="./assets/phone-mockup.png" />
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const menuOpen = ref(false);
const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

const apkUrl = ref("#");
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/BlackcoinV5f/blackcoin-versing-apk/main/version.json",
      { cache: "no-store" }
    );

    const data = await response.json();
    apkUrl.value = data.apk_url;
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background: #1f0f33;
  color: white;
  font-family: system-ui;
}

/* HEADER */
.top-bar {
  height: 78px;
  background: #5b2d8b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  width: 48px;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
}

.menu-toggle {
  display: none;
  font-size: 32px;
  background: none;
  border: none;
  color: white;
}

/* NAV */
.nav-links {
  display: flex;
  gap: 24px;
  align-items: center;
}

.nav-link {
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 120%;
  left: 0;
  background: #6a35a0;
  border-radius: 8px;
  padding: 10px 0;
}

.dropdown-menu a {
  display: block;
  padding: 10px 18px;
  color: white;
  text-decoration: none;
}

/* MOBILE */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 78px;
    left: 0;
    width: 100%;
    background: #5b2d8b;
    flex-direction: column;
    display: none;
    padding: 20px 0;
  }

  .nav-links.open {
    display: flex;
  }

  .dropdown-menu {
    position: static;
    width: 100%;
    text-align: center;
  }
}

/* HERO */
.hero {
  display: flex;
  justify-content: space-between;
  padding: 80px 48px;
  gap: 40px;
}

.hero-image img {
  width: 320px;
}
</style>
