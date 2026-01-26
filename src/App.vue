<template>
  <div class="app-wrapper">
    <!-- HEADER -->
    <header class="top-bar">
      <!-- LOGO -->
      <div class="logo-container">
        <img
          src="./assets/blackcoin-logo.png"
          alt="Blackcoin Logo"
          class="logo-img"
        />
        <span class="logo-text">Blackcoin</span>
      </div>

      <!-- MENU HAMBURGER (MOBILE) -->
      <button class="menu-toggle" @click="toggleMenu">
        <span v-if="menuOpen">✕</span>
        <span v-else>☰</span>
      </button>

      <!-- NAVIGATION -->
      <nav class="nav-links" :class="{ open: menuOpen }">
        <!-- DROPDOWN BLOCKCHAIN -->
        <div class="nav-item dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
          <span class="nav-link" @click="toggleDropdownMobile">
            Blockchain <span class="dropdown-arrow">▾</span>
          </span>
          <div class="dropdown-menu" :class="{ active: showDropdown || dropdownOpen }">
            <a href="#" class="dropdown-item">Livre blanc</a>
            <a href="#" class="dropdown-item">Feuille de route</a>
          </div>
        </div>

        <a href="#" class="nav-link" @click="closeMenu">Écosystème</a>
        <a href="#" class="nav-link" @click="closeMenu">À propos</a>
        <a href="#" class="nav-link" @click="closeMenu">Communauté</a>
      </nav>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-text">
        <h1>
          La cryptomonnaie que vous pouvez miner<br>
          directement sur votre téléphone
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
        <img
          src="./assets/phone-mockup.png"
          alt="Application Blackcoin"
        />
      </div>
    </section>

    <!-- PROBLEM STATEMENT -->
    <section class="problem-wave">
      <div class="problem-content">
        <p>
          Aujourd’hui, miner des cryptomonnaies exige des ressources que peu possèdent.
        </p>
        <p>
          Investir reste risqué et réservé aux plus avertis.
        </p>
        <p>
          Blackcoin est né pour rendre la crypto accessible à tous.
        </p>
      </div>
      
      <!-- WAVE -->
      <svg
        class="wave"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C120,60 240,20 360,30 C480,40 600,70 720,60 C840,50 960,20 1080,30 C1200,40 1320,60 1440,50 L1440,90 L0,90 Z"
          fill="#1f0f33"
        />
      </svg>
    </section>

    <!-- INFO -->
    <section class="info-alert">
      <img
        src="./assets/development-alert.png"
        alt="En développement"
        class="info-image"
      />
      <p class="info-text">
        ⚠️ Cette page est en cours de développement.
        Le contenu peut changer à tout moment.
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Gestion du menu mobile
const menuOpen = ref(false);
const dropdownOpen = ref(false);
const showDropdown = ref(false);

// Fonction pour basculer le menu mobile
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'; // Empêche le scroll quand menu ouvert
  } else {
    document.body.style.overflow = 'auto';
  }
};

// Fermer le menu quand on clique sur un lien
const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = 'auto';
};

// Gestion du dropdown (mobile)
const toggleDropdownMobile = () => {
  if (window.innerWidth <= 768) {
    dropdownOpen.value = !dropdownOpen.value;
  }
};

// Fermer le menu si on clique à l'extérieur
const handleClickOutside = (event) => {
  if (!event.target.closest('.nav-links') && !event.target.closest('.menu-toggle')) {
    menuOpen.value = false;
    document.body.style.overflow = 'auto';
  }
};

// Téléchargement APK
const apkUrl = ref("#");
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/BlackcoinV5f/blackcoin-versing-apk/main/version.json",
      { cache: "no-store" }
    );

    if (!response.ok) throw new Error("HTTP " + response.status);

    const data = await response.json();
    if (!data.apk_url) throw new Error("apk_url manquant dans version.json");

    apkUrl.value = data.apk_url;
  } catch (e) {
    console.error("Erreur chargement APK :", e);
    error.value = true;
  } finally {
    loading.value = false;
  }

  // Ajouter l'écouteur pour fermer le menu
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.body.style.overflow = 'auto'; // Réinitialiser le scroll
});
</script>

<style scoped>
/* =========================
   RESET & BASE
   ========================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1f0f33;
  color: #ffffff;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  padding-top: env(safe-area-inset-top); /* Safe area pour iPhone */
  padding-bottom: env(safe-area-inset-bottom);
}

/* =========================
   HEADER - FIXED POUR MOBILE
   ========================= */
.top-bar {
  height: 70px;
  background-color: #5b2d8b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  padding-top: env(safe-area-inset-top); /* Safe area pour iPhone */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1001;
}

.logo-img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
}

/* =========================
   MENU HAMBURGER
   ========================= */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 0;
}

/* =========================
   NAVIGATION DESKTOP
   ========================= */
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.2s;
  cursor: pointer;
  position: relative;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* DROPDOWN */
.dropdown {
  position: relative;
}

.dropdown-arrow {
  font-size: 0.8em;
  margin-left: 4px;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background: #6a35a0;
  border-radius: 8px;
  padding: 10px 0;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 10px 18px;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

/* =========================
   HERO SECTION
   ========================= */
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 24px;
  gap: 40px;
  background: radial-gradient(circle at right, #3a1c5a, #1f0f33);
  min-height: calc(100vh - 70px);
}

.hero-text {
  max-width: 520px;
}

.hero-text h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 32px;
  line-height: 1.6;
}

/* BOUTON TÉLÉCHARGEMENT */
.hero-btn {
  display: inline-block;
  background: #f5b301;
  color: #000;
  padding: 16px 36px;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
}

.hero-btn:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  background-color: #ffc107;
}

.hero-btn.disabled {
  pointer-events: none;
  opacity: 0.6;
  cursor: not-allowed;
}

/* IMAGE HERO */
.hero-image img {
  width: 320px;
  max-width: 100%;
  height: auto;
}

/* =========================
   PROBLEM WAVE SECTION
   ========================= */
.problem-wave {
  background-color: #7a3d8f;
  color: white;
  padding: 80px 24px 0;
  text-align: center;
  position: relative;
  margin-top: auto;
}

.problem-content {
  max-width: 900px;
  margin: 0 auto;
}

.problem-content p {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 18px;
}

.wave {
  display: block;
  width: 100%;
  height: 90px;
  margin-top: -1px;
}

/* =========================
   INFO ALERT
   ========================= */
.info-alert {
  background-color: #fffae6;
  border: 1px solid #ffd700;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 40px auto;
  border-radius: 12px;
  max-width: 900px;
  width: calc(100% - 48px);
}

.info-image {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.info-text {
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  line-height: 1.5;
}

/* =========================
   RESPONSIVE DESIGN
   ========================= */

/* TABLETTE (max-width: 1024px) */
@media (max-width: 1024px) {
  .hero {
    padding: 40px 24px;
    gap: 30px;
  }
  
  .hero-image img {
    width: 280px;
  }
}

/* MOBILE (max-width: 768px) */
@media (max-width: 768px) {
  .top-bar {
    height: 60px;
    padding: 0 16px;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .logo-img {
    width: 36px;
    height: 36px;
  }
  
  .logo-text {
    font-size: 1.2rem;
  }
  
  /* NAVIGATION MOBILE */
  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background: #5b2d8b;
    flex-direction: column;
    align-items: stretch;
    padding: 20px 0;
    gap: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    z-index: 999;
  }
  
  .nav-links.open {
    transform: translateX(0);
  }
  
  .nav-link {
    padding: 16px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
  }
  
  .dropdown {
    width: 100%;
  }
  
  .dropdown-menu {
    position: static;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0;
    padding: 0;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    display: none;
    width: 100%;
  }
  
  .dropdown-menu.active {
    display: block;
  }
  
  .dropdown-item {
    padding: 12px 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  /* HERO MOBILE */
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 40px 16px;
    min-height: auto;
  }
  
  .hero-text h1 br {
    display: none;
  }
  
  .hero-image img {
    width: 250px;
    max-width: 80%;
    margin-top: 20px;
  }
  
  .hero-btn {
    width: 100%;
    text-align: center;
    padding: 14px 24px;
  }
  
  /* PROBLEM SECTION MOBILE */
  .problem-wave {
    padding: 60px 16px 0;
  }
  
  .problem-content p {
    font-size: 1.1rem;
  }
  
  /* INFO ALERT MOBILE */
  .info-alert {
    flex-direction: column;
    text-align: center;
    padding: 16px;
    gap: 12px;
    margin: 30px 16px;
    width: auto;
  }
  
  .info-text {
    font-size: 0.9rem;
  }
}

/* TRÈS PETIT MOBILE (max-width: 375px) */
@media (max-width: 375px) {
  .hero-text h1 {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
}
</style>