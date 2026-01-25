<template>
  <div class="app-wrapper">
    <!-- HEADER -->
    <header class="top-bar">
      <div class="logo-container">
        <img
          src="./assets/blackcoin-logo.png"
          alt="Blackcoin Logo"
          class="logo-img"
        />
        <span class="logo-text">Blackcoin</span>
      </div>

      <nav class="nav-links">
        <!-- DROPDOWN BLOCKCHAIN -->
        <div class="nav-item dropdown">
          <span class="nav-link">Blockchain</span>

          <div class="dropdown-menu">
            <a href="#" class="dropdown-item">
              Livre blanc
            </a>
            <a href="#" class="dropdown-item">
              Feuille de route
            </a>
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
          La cryptomonnaie que vous pouvez miner
          <br />
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
      d="M0,40 C120,60 240,20 360,30
         C480,40 600,70 720,60
         C840,50 960,20 1080,30
         C1200,40 1320,60 1440,50
         L1440,90 L0,90 Z"
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
import { ref, onMounted } from "vue";

const apkUrl = ref("#");
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/BlackcoinV5f/blackcoin-versing-apk/main/version.json",
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    const data = await response.json();

    if (!data.apk_url) {
      throw new Error("apk_url manquant dans version.json");
    }

    apkUrl.value = data.apk_url;
  } catch (e) {
    console.error("Erreur chargement APK :", e);
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* =========================
   STRUCTURE
   ========================= */
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1f0f33;
  color: #ffffff;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* =========================
   HEADER
   ========================= */
.top-bar {
  height: 78px;
  background-color: #5b2d8b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  flex-wrap: wrap;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-img {
  width: 48px;
  height: 48px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
}

/* NAV */
.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* =========================
   HERO
   ========================= */
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 64px;
  gap: 40px;
  background: radial-gradient(circle at right, #3a1c5a, #1f0f33);
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
}

/* BOUTON */
.hero-btn {
  display: inline-block;
  background: #f5b301;
  color: #000;
  padding: 16px 36px;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.hero-btn:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.hero-btn.disabled {
  pointer-events: none;
  opacity: 0.6;
}

/* IMAGE */
.hero-image img {
  width: 320px;
  max-width: 100%;
}

/* =========================
   INFO ALERT
   ========================= */
.info-alert {
  background-color: #fffae6;
  border: 1px solid #ffd700;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 40px auto;
  border-radius: 12px;
  max-width: 900px;
}

.info-image {
  width: 48px;
  height: 48px;
}

.info-text {
  font-size: 1.05rem;
  color: #333;
  font-weight: 500;
}

/* =========================
   PROBLEM WAVE SECTION
   ========================= */
.problem-wave {
  background-color: #7a3d8f;
  color: #ffffff;
  padding: 100px 24px 0;
  text-align: center;
  position: relative;
}

.problem-content {
  max-width: 900px;
  margin: 0 auto;
}

.problem-content p {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 18px;
}

/* vague */
.wave {
  display: block;
  width: 100%;
  height: 90px;
}


/* =========================
   RESPONSIVE
   ========================= */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 60px 24px;
  }

  .hero-text h1 br {
    display: none;
  }
}

@media (max-width: 600px) {
  .top-bar {
    justify-content: center;
    gap: 16px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
