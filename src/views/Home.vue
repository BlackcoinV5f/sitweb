<template>
  <div class="app-wrapper">
    <!-- ================= HEADER ================= -->
    <header class="top-bar">
      <!-- LOGO avec lien vers la page d'accueil -->
      <router-link to="/" class="logo-container">
        <img
          :src="logo"
          alt="Blackcoin Logo"
          class="logo-img"
        />
        <span class="logo-text">Blackcoin</span>
      </router-link>

      <!-- MENU HAMBURGER (MOBILE) -->
      <button 
        class="menu-toggle" 
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Menu principal"
      >
        <span v-if="menuOpen">✕</span>
        <span v-else>☰</span>
      </button>

      <!-- NAVIGATION -->
      <nav 
        class="nav-links" 
        :class="{ open: menuOpen }"
        :aria-hidden="!menuOpen"
      >
        <!-- DROPDOWN BLOCKCHAIN -->
        <div
          class="nav-item dropdown"
          @mouseenter="showDropdown = true"
          @mouseleave="showDropdown = false"
        >
          <button 
            class="nav-link dropdown-trigger"
            @click="toggleDropdownMobile"
            :aria-expanded="dropdownOpen || showDropdown"
          >
            Blockchain <span class="dropdown-arrow">▾</span>
          </button>

          <div
            class="dropdown-menu"
            :class="{ active: showDropdown || dropdownOpen }"
            role="menu"
          >
            <!-- ✅ ROUTER-LINK LIVRE BLANC -->
            <router-link
              to="/whitepaper"
              class="dropdown-item"
              @click="closeAllMenus"
              role="menuitem"
            >
              Livre blanc
            </router-link>

            <router-link
              to="/roadmap"
              class="dropdown-item"
              @click="closeAllMenus"
              role="menuitem"
            >
              Feuille de route
            </router-link>
          </div>
        </div>

        <router-link 
          to="/ecosystem" 
          class="nav-link" 
          @click="closeMenu"
        >
          Écosystème
        </router-link>

        <router-link 
          to="/about" 
          class="nav-link" 
          @click="closeMenu"
        >
          À propos
        </router-link>

        <router-link 
          to="/community" 
          class="nav-link" 
          @click="closeMenu"
        >
          Communauté
        </router-link>
      </nav>
    </header>

    <!-- ================= MAIN CONTENT ================= -->
    <main class="main-content">
      <!-- HERO SECTION -->
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-content">
          <div class="hero-text">
            <h1 id="hero-title">
              La cryptomonnaie que vous pouvez miner<br />
              <span class="highlight">directement sur votre téléphone</span>
            </h1>

            <p class="hero-subtitle">
              Blackcoin permet de miner facilement depuis une application mobile,
              sans consommation excessive d'énergie ni matériel coûteux.
            </p>

            <div class="hero-actions">
              <a
                :href="apkUrl"
                class="hero-btn"
                :class="{ disabled: loading || error }"
                :download="!loading && !error ? 'Blackcoin.apk' : null"
                :aria-disabled="loading || error"
              >
                <span v-if="loading" class="btn-loading">
                  <span class="spinner"></span> Chargement…
                </span>
                <span v-else-if="error">Téléchargement indisponible</span>
                <span v-else>
                  <svg class="download-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v14m0 0l-5-5m5 5l5-5M5 20h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Télécharger l'application Blackcoin
                </span>
              </a>
              
              <p class="hero-note">
                <small>Version {{ appVersion }} • {{ fileSize }}</small>
              </p>
            </div>
          </div>

          <div class="hero-image">
            <img
              :src="phoneMockup"
              alt="Interface de l'application Blackcoin sur smartphone"
              loading="lazy"
            />
            <div class="phone-glow"></div>
          </div>
        </div>
      </section>

      <!-- STATS SECTION -->
      <section class="stats-section" aria-label="Statistiques">
        <div class="stats-container">
          <div class="stat-card">
            <div class="stat-number">0%</div>
            <div class="stat-label">Frais de transaction</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">Éco</div>
            <div class="stat-label">Mining efficient</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Disponibilité</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">Mobile</div>
            <div class="stat-label">Première</div>
          </div>
        </div>
      </section>

      <!-- PROBLEM STATEMENT -->
      <section class="problem-section" aria-labelledby="problem-title">
        <div class="problem-container">
          <h2 id="problem-title" class="section-title">
            Pourquoi Blackcoin est différent
          </h2>
          
          <div class="problem-grid">
            <div class="problem-card">
              <div class="problem-icon">💻</div>
              <h3>Mining complexe</h3>
              <p>Les cryptos traditionnelles nécessitent du matériel spécialisé et coûteux.</p>
            </div>
            
            <div class="problem-card">
              <div class="problem-icon">⚠️</div>
              <h3>Risques élevés</h3>
              <p>Investir demande des connaissances que peu possèdent.</p>
            </div>
            
            <div class="problem-card">
              <div class="problem-icon">🚀</div>
              <h3>Solution Blackcoin</h3>
              <p>Minez directement depuis votre téléphone, simplement et en toute sécurité.</p>
            </div>
          </div>
        </div>
        
        <!-- WAVE DIVIDER -->
        <div class="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C240,100 480,20 720,40 C960,60 1200,100 1440,80 L1440,120 L0,120 Z" fill="#1f0f33"/>
          </svg>
        </div>
      </section>

      <!-- CTA SECTION -->
      <section class="cta-section" aria-labelledby="cta-title">
        <div class="cta-container">
          <h2 id="cta-title" class="section-title">Prêt à commencer ?</h2>
          <p class="cta-text">
            Rejoignez des milliers d'utilisateurs qui minent déjà Blackcoin.
            Téléchargez l'application et commencez dès aujourd'hui.
          </p>
          <a 
            :href="apkUrl" 
            class="cta-btn"
            :class="{ disabled: loading || error }"
          >
            <span v-if="!loading && !error">Commencer le mining</span>
            <span v-else-if="loading">Préparation…</span>
            <span v-else>Bientôt disponible</span>
          </a>
        </div>
      </section>

      <!-- INFO ALERT -->
      <section class="info-alert" role="alert" aria-label="Information">
        <div class="alert-content">
          <div class="alert-icon">🚧</div>
          <div class="alert-text">
            <strong>En développement actif</strong>
            <p>Cette page est en cours d'amélioration. Le contenu peut évoluer.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

/* ================= STATE ================= */
const menuOpen = ref(false);
const dropdownOpen = ref(false);
const showDropdown = ref(false);

/* ================= ASSETS ================= */
import logo from "../assets/blackcoin-logo.png";
import phoneMockup from "../assets/phone-mockup.png";

/* ================= APK DATA ================= */
const apkUrl = ref("#");
const loading = ref(true);
const error = ref(false);
const appVersion = ref("1.0.0");
const fileSize = ref("~15 MB");

/* ================= MENU LOGIC ================= */
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? "hidden" : "auto";
};

const closeMenu = () => {
  menuOpen.value = false;
  dropdownOpen.value = false;
  document.body.style.overflow = "auto";
};

const closeAllMenus = () => {
  menuOpen.value = false;
  dropdownOpen.value = false;
  showDropdown.value = false;
  document.body.style.overflow = "auto";
};

const toggleDropdownMobile = () => {
  if (window.innerWidth <= 768) {
    dropdownOpen.value = !dropdownOpen.value;
  }
};

const handleClickOutside = (event) => {
  if (
    !event.target.closest(".nav-links") &&
    !event.target.closest(".menu-toggle") &&
    !event.target.closest(".dropdown")
  ) {
    closeAllMenus();
  }
};

const handleResize = () => {
  if (window.innerWidth > 768) {
    closeAllMenus();
  }
};

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeAllMenus();
  }
};

/* ================= APK DOWNLOAD ================= */
onMounted(async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/BlackcoinV5f/blackcoin-versing-apk/main/version.json",
      { cache: "no-store", timeout: 5000 }
    );

    if (!response.ok) throw new Error("Erreur HTTP");

    const data = await response.json();
    apkUrl.value = data.apk_url;
    appVersion.value = data.version || "1.0.0";
    fileSize.value = data.file_size || "~15 MB";
  } catch (e) {
    console.error("Erreur chargement APK :", e);
    error.value = true;
  } finally {
    loading.value = false;
  }

  // Événements
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("resize", handleResize);
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", handleResize);
  document.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "auto";
});
</script>

<style scoped>
/* =========================
   RESET & BASE
   ========================= */
:root {
  --primary: #1f0f33;
  --secondary: #5b2d8b;
  --accent: #f5b301;
  --accent-hover: #ffc107;
  --text: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --card-bg: rgba(255, 255, 255, 0.05);
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

.app-wrapper {
  min-height: 100vh;
  background-color: var(--primary);
  color: var(--text);
  font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}

/* =========================
   HEADER
   ========================= */
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(91, 45, 139, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: var(--transition);
}

.logo-container:hover {
  transform: translateY(-2px);
}

.logo-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(45deg, #fff, var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* =========================
   NAVIGATION
   ========================= */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: var(--transition);
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent);
}

/* DROPDOWN */
.dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-arrow {
  font-size: 0.8em;
  transition: transform 0.3s;
}

.dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: var(--secondary);
  border-radius: 12px;
  padding: 0.75rem 0;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: var(--transition);
  box-shadow: var(--shadow);
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  transition: var(--transition);
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent);
}

.dropdown-item.router-link-active {
  background: rgba(245, 179, 1, 0.2);
  color: var(--accent);
}

/* =========================
   HERO SECTION
   ========================= */
.main-content {
  padding-top: 80px;
}

.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  background: radial-gradient(ellipse at 80% 50%, rgba(91, 45, 139, 0.3), transparent 50%);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-text h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.highlight {
  color: var(--accent);
  background: linear-gradient(45deg, var(--accent), #ffd700);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

/* HERO ACTIONS */
.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: var(--accent);
  color: #000;
  padding: 1.25rem 2.5rem;
  font-weight: 700;
  border-radius: 12px;
  text-decoration: none;
  transition: var(--transition);
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  min-width: 280px;
  position: relative;
  overflow: hidden;
}

.hero-btn:hover:not(.disabled) {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(245, 179, 1, 0.3);
  background: var(--accent-hover);
}

.hero-btn.disabled {
  opacity: 0.7;
  cursor: not-allowed;
  pointer-events: none;
}

.download-icon {
  width: 20px;
  height: 20px;
}

.btn-loading {
  display: flex;
  align-items: center;
  gap: 8px;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hero-note {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* HERO IMAGE */
.hero-image {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.hero-image img {
  width: 320px;
  max-width: 100%;
  height: auto;
  z-index: 2;
  position: relative;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));
  animation: float 3s ease-in-out infinite;
}

.phone-glow {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(245, 179, 1, 0.2) 0%, transparent 70%);
  z-index: 1;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* =========================
   STATS SECTION
   ========================= */
.stats-section {
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.2);
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 1rem;
}

/* =========================
   PROBLEM SECTION
   ========================= */
.problem-section {
  padding: 6rem 2rem 8rem;
  position: relative;
  background: linear-gradient(180deg, var(--primary) 0%, #2a1842 100%);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
}

.problem-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.problem-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);
  text-align: center;
}

.problem-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow: var(--shadow);
}

.problem-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.problem-card h3 {
  color: var(--accent);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.problem-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  overflow: hidden;
}

.wave-divider svg {
  width: 100%;
  height: 100%;
}

/* =========================
   CTA SECTION
   ========================= */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--secondary), #7a3d8f);
  text-align: center;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta-text {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-btn {
  display: inline-block;
  background: var(--accent);
  color: #000;
  padding: 1.25rem 3rem;
  font-weight: 700;
  border-radius: 12px;
  text-decoration: none;
  transition: var(--transition);
  font-size: 1.1rem;
  border: 2px solid transparent;
}

.cta-btn:hover:not(.disabled) {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background: var(--accent-hover);
  border-color: white;
}

.cta-btn.disabled {
  opacity: 0.7;
  cursor: not-allowed;
  pointer-events: none;
}

/* =========================
   INFO ALERT
   ========================= */
.info-alert {
  max-width: 800px;
  margin: 3rem auto;
  padding: 1.5rem;
  background: rgba(245, 179, 1, 0.1);
  border: 1px solid var(--accent);
  border-radius: 12px;
}

.alert-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.alert-icon {
  font-size: 2rem;
}

.alert-text strong {
  color: var(--accent);
  display: block;
  margin-bottom: 0.5rem;
}

.alert-text p {
  color: var(--text-secondary);
  margin: 0;
}

/* =========================
   RESPONSIVE DESIGN
   ========================= */

/* MENU HAMBURGER */
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
  transition: var(--transition);
}

.menu-toggle:hover {
  color: var(--accent);
}

/* TABLETTE */
@media (max-width: 1024px) {
  .hero-content {
    gap: 3rem;
  }
  
  .hero-image img {
    width: 280px;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .top-bar {
    height: 70px;
    padding: 0 1rem;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
  
  /* NAVIGATION MOBILE */
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    height: calc(100vh - 70px);
    background: rgba(91, 45, 139, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: stretch;
    padding: 2rem 1rem;
    gap: 0;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
    z-index: 999;
  }
  
  .nav-links.open {
    transform: translateX(0);
  }
  
  .nav-link {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 1.1rem;
    text-align: left;
    justify-content: space-between;
  }
  
  .dropdown-menu {
    position: static;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    margin: 0.5rem 0;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    display: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .dropdown-menu.active {
    display: block;
  }
  
  .dropdown-item {
    padding: 0.75rem 1rem;
  }
  
  /* HERO MOBILE */
  .hero {
    padding: 2rem 1rem;
    min-height: auto;
  }
  
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-text h1 br {
    display: none;
  }
  
  .hero-image {
    justify-content: center;
  }
  
  .hero-image img {
    width: 250px;
  }
  
  .phone-glow {
    width: 300px;
    height: 300px;
    right: 50%;
    transform: translate(50%, -50%);
  }
  
  .hero-btn {
    min-width: 100%;
  }
  
  /* STATS MOBILE */
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
  /* PROBLEM SECTION MOBILE */
  .problem-section {
    padding: 4rem 1rem 6rem;
  }
  
  .problem-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

/* PETIT MOBILE */
@media (max-width: 480px) {
  .stats-container {
    grid-template-columns: 1fr;
  }
  
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
  
  .logo-img {
    width: 36px;
    height: 36px;
  }
}

/* ANIMATIONS */
.fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>