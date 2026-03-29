<template>
  <div class="app-wrapper">
    <!-- ================= HEADER ================= -->
    <header class="top-bar">
      <router-link to="/" class="logo-container">
        <img
          :src="logo"
          alt="Blackcoin Logo"
          class="logo-img"
        />
        <span class="logo-text">Blackcoin</span>
      </router-link>

      <button 
        class="menu-toggle" 
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Menu principal"
      >
        <span v-if="menuOpen">✕</span>
        <span v-else>☰</span>
      </button>

      <nav 
        class="nav-links" 
        :class="{ open: menuOpen }"
        :aria-hidden="!menuOpen"
      >
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

    <main class="main-content">
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
              <!-- BOUTON ANDROID EXISTANT -->
              <a
                :href="apkUrl"
                class="hero-btn android-btn"
                :class="{ disabled: loading || error }"
                :download="!loading && !error ? 'Blackcoin.apk' : null"
                :aria-disabled="loading || error"
              >
                <span v-if="loading" class="btn-loading">
                  <span class="spinner"></span> Chargement…
                </span>
                <span v-else-if="error">Téléchargement indisponible</span>
                <span v-else>
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v14m0 0l-5-5m5 5l5-5M5 20h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Télécharger l'application Blackcoin
                </span>
              </a>
              
              <!-- NOUVEAU BOUTON TELEGRAM -->
              <a
                href="https://t.me/BlackcoinBot"
                target="_blank"
                rel="noopener noreferrer"
                class="hero-btn telegram-btn"
              >
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M21 2L3 10l6 3 3 6 9-15z" fill="currentColor"/>
                </svg>
                Rejoindre le bot Telegram
              </a>

              <!-- NOUVEAU BOUTON IOS -->
              <a
                href="#"
                class="hero-btn ios-btn disabled"
                aria-disabled="true"
              >
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M18.5 12.5C18.5 10.8 19.7 9.3 21.4 8.9C20.5 7.7 19.1 7 17.5 7C15.8 7 14.4 7.8 13.5 8.9C12.6 7.8 11.2 7 9.5 7C6.5 7 4 9.5 4 12.5C4 15.5 6.5 18 9.5 18C11.2 18 12.6 17.2 13.5 16.1C14.4 17.2 15.8 18 17.5 18C20.5 18 23 15.5 23 12.5C23 12.3 23 12.1 22.9 11.9C21.2 11.5 20 10 20 8.3" stroke="currentColor" stroke-width="1.5" fill="none"/>
                </svg>
                iOS (bientôt disponible)
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
        
        <div class="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C240,100 480,20 720,40 C960,60 1200,100 1440,80 L1440,120 L0,120 Z" fill="#1f0f33"/>
          </svg>
        </div>
      </section>

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

    <!-- ================= FOOTER AVEC RÉSEAUX SOCIAUX ================= -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <img :src="logo" alt="Blackcoin Logo" class="footer-logo-img" />
            <span class="footer-logo-text">Blackcoin</span>
          </div>
          <p class="footer-description">
            La cryptomonnaie révolutionnaire que vous pouvez miner directement sur votre téléphone.
            Simple, écologique et accessible à tous.
          </p>
        </div>

        <div class="footer-social">
          <h3 class="footer-title">Suivez-nous</h3>
          <div class="social-links">
            <a 
              href="https://www.facebook.com/share/1CjsWSj1P3/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link facebook"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.youtube.com/@Blackcoinchaine" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link youtube"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2c-.3-1-1-1.8-2-2-1.7-.5-8.5-.5-8.5-.5s-6.8 0-8.5.5c-1 .2-1.7.9-2 2-.5 1.7-.5 5.3-.5 5.3s0 3.6.5 5.3c.3 1 1 1.8 2 2 1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5c1-.2 1.7-.9 2-2 .5-1.7.5-5.3.5-5.3s0-3.6-.5-5.3zM9.5 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
            </a>
            
            <a 
              href="https://t.me/+2VYCu2Ygs0Q1YTk0" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link telegram"
              aria-label="Telegram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 2L3 10l6 3 3 6 9-15z"/>
              </svg>
            </a>
            
            <a 
              href="https://x.com/BlackcoinON" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link twitter"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.instagram.com/blackcoin_bkc" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link instagram"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.764.13 4.662.386 3.648.9c-1.023.52-1.891 1.222-2.658 1.99-.768.767-1.47 1.635-1.99 2.658-.514 1.014-.77 2.116-.828 3.404C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.288.314 2.39.828 3.404.52 1.023 1.222 1.891 1.99 2.658.767.768 1.635 1.47 2.658 1.99 1.014.514 2.116.77 3.404.828 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.288-.058 2.39-.314 3.404-.828 1.023-.52 1.891-1.222 2.658-1.99.768-.767 1.47-1.635 1.99-2.658.514-1.014.77-2.116.828-3.404.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.288-.314-2.39-.828-3.404-.52-1.023-1.222-1.891-1.99-2.658-.767-.768-1.635-1.47-2.658-1.99-1.014-.514-2.116-.77-3.404-.828C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.tiktok.com/@blackcoin_official" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link tiktok"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <h3 class="footer-title">Liens utiles</h3>
          <ul class="footer-nav">
            <li><router-link to="/whitepaper">Livre blanc</router-link></li>
            <li><router-link to="/roadmap">Feuille de route</router-link></li>
            <li><router-link to="/ecosystem">Écosystème</router-link></li>
            <li><router-link to="/about">À propos</router-link></li>
            <li><router-link to="/community">Communauté</router-link></li>
          </ul>
        </div>

        <div class="footer-legal">
          <h3 class="footer-title">Légal</h3>
          <ul class="footer-nav">
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Blackcoin. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

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

/* ================= CURRENT YEAR ================= */
const currentYear = computed(() => new Date().getFullYear());

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
      { cache: "no-store", signal: AbortSignal.timeout(5000) }
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

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 1rem 1.8rem;
  font-weight: 700;
  border-radius: 14px;
  text-decoration: none;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.35s ease;
}

.btn-icon {
  width: 20px;
  height: 20px;
}

.android-btn {
  background: linear-gradient(135deg, #3ddc84, #00a86b);
  color: #fff;
}

.android-btn:hover:not(.disabled) {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(61, 220, 132, 0.3);
  background: linear-gradient(135deg, #4ee894, #00c07a);
}

.telegram-btn {
  background: linear-gradient(135deg, #0088cc, #006699);
  color: #fff;
}

.telegram-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 136, 204, 0.3);
  background: linear-gradient(135deg, #00aaff, #0088cc);
}

.ios-btn {
  background: linear-gradient(135deg, #000000, #1c1c1e);
  color: #fff;
}

.ios-btn.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.hero-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: all 0.6s ease;
}

.hero-btn:hover::before {
  left: 100%;
}

.hero-btn.disabled {
  opacity: 0.7;
  cursor: not-allowed;
  pointer-events: none;
}

.btn-loading {
  display: flex;
  align-items: center;
  gap: 8px;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hero-note {
  color: var(--text-secondary);
  font-size: 0.9rem;
  width: 100%;
}

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
   FOOTER
   ========================= */
.footer {
  background: linear-gradient(180deg, #2a1842 0%, #0f0a1a 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-brand {
  max-width: 300px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.footer-logo-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.footer-logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
}

.footer-title {
  color: var(--accent);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.social-link svg {
  width: 22px;
  height: 22px;
}

.social-link:hover {
  transform: translateY(-3px);
}

.social-link.facebook:hover {
  background: #1877f2;
  color: white;
}

.social-link.youtube:hover {
  background: #ff0000;
  color: white;
}

.social-link.telegram:hover {
  background: #0088cc;
  color: white;
}

.social-link.twitter:hover {
  background: #000000;
  color: white;
}

.social-link.instagram:hover {
  background: linear-gradient(45deg, #f09433, #d62976, #962fbf);
  color: white;
}

.social-link.tiktok:hover {
  background: #000000;
  color: #00f2ea;
}

.footer-nav {
  list-style: none;
}

.footer-nav li {
  margin-bottom: 0.75rem;
}

.footer-nav a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.9rem;
}

.footer-nav a:hover {
  color: var(--accent);
  padding-left: 5px;
}

.footer-bottom {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 0.85rem;
}

/* =========================
   RESPONSIVE DESIGN
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
  transition: var(--transition);
}

.menu-toggle:hover {
  color: var(--accent);
}

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
  
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

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
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-btn {
    min-width: 220px;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
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
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .footer-brand {
    max-width: 100%;
  }
  
  .footer-logo {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-nav {
    text-align: center;
  }
}

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
  
  .hero-actions {
    flex-direction: column;
  }
  
  .hero-btn {
    width: 100%;
  }
}

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