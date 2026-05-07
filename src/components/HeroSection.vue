<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-content">
      
      <!-- TEXT -->
      <div class="hero-text">
        <h1 id="hero-title">
          La cryptomonnaie que vous pouvez miner<br />
          <span class="highlight">directement sur votre téléphone</span>
        </h1>

        <p class="hero-subtitle">
          Blackcoin permet de miner facilement depuis une application mobile,
          sans consommation excessive d'énergie ni matériel coûteux.
        </p>

        <!-- ACTIONS -->
        <div class="hero-actions">

          <!-- ANDROID -->
          <a
            :href="apkUrl"
            class="hero-btn android-btn"
            :class="{ disabled: isDisabled }"
            :download="!isDisabled ? 'Blackcoin.apk' : null"
            :aria-disabled="isDisabled"
          >
            <span v-if="loading" class="btn-loading">
              <span class="spinner"></span> Chargement…
            </span>

            <span v-else-if="error">
              Téléchargement indisponible
            </span>

            <span v-else>
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v14m0 0l-5-5m5 5l5-5M5 20h14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Télécharger l'application Blackcoin
            </span>
          </a>

          <!-- TELEGRAM -->
          <a
            href="https://t.me/Bkc_blackcoinbot"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-btn telegram-btn"
          >
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path d="M21 2L3 10l6 3 3 6 9-15z" fill="currentColor"/>
            </svg>
            Rejoindre le bot Telegram
          </a>

          <!-- IOS -->
          <button
            class="hero-btn ios-btn disabled"
            disabled
            aria-disabled="true"
          >
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path d="M18.5 12.5C18.5 10.8 19.7 9.3 21.4 8.9C20.5 7.7 19.1 7 17.5 7C15.8 7 14.4 7.8 13.5 8.9C12.6 7.8 11.2 7 9.5 7C6.5 7 4 9.5 4 12.5C4 15.5 6.5 18 9.5 18C11.2 18 12.6 17.2 13.5 16.1C14.4 17.2 15.8 18 17.5 18C20.5 18 23 15.5 23 12.5"
                stroke="currentColor"
                stroke-width="1.5"
                fill="none"
              />
            </svg>
            iOS (bientôt disponible)
          </button>

          <p class="hero-note">
            <small>Version {{ appVersion }} • {{ fileSize }}</small>
          </p>

        </div>
      </div>

      <!-- IMAGE -->
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
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import phoneMockup from '../assets/phone-mockup.png';

const apkUrl = ref("#");
const loading = ref(true);
const error = ref(false);
const appVersion = ref("1.0.0");
const fileSize = ref("~15 MB");

const isDisabled = computed(() => loading.value || error.value);

onMounted(async () => {
  try {
    const controller = new AbortController();

    setTimeout(() => controller.abort(), 5000);

    const response = await fetch(
      "https://raw.githubusercontent.com/BlackcoinV5f/blackcoin-versing-apk/main/version.json",
      {
        cache: "no-store",
        signal: controller.signal
      }
    );

    if (!response.ok) throw new Error("Erreur HTTP");

    const data = await response.json();

    apkUrl.value = data.apk_url || "#";
    appVersion.value = data.version || "1.0.0";
    fileSize.value = data.file_size || "~15 MB";

  } catch (e) {
    console.error("Erreur APK :", e);
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>

/* =========================
   HERO SECTION
========================= */

.hero {
  min-height: calc(100vh - 80px);

  display: flex;
  align-items: center;

  padding: 4rem 2rem;

  overflow: hidden;

  background:
    radial-gradient(
      ellipse at 80% 50%,
      rgba(91, 45, 139, 0.25),
      transparent 50%
    );
}

/* =========================
   CONTAINER
========================= */

.hero-content {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 4rem;
}

/* =========================
   TEXT
========================= */

.hero-text {
  flex: 1;

  max-width: 600px;

  z-index: 2;
}

.hero-text h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);

  line-height: 1.1;

  margin-bottom: 1.5rem;

  font-weight: 800;
}

.highlight {
  background:
    linear-gradient(
      45deg,
      var(--accent),
      #ffd700
    );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;

  line-height: 1.7;

  color: var(--text-secondary);

  margin-bottom: 2rem;
}

/* =========================
   ACTIONS
========================= */

.hero-actions {
  display: flex;

  flex-wrap: wrap;

  gap: 1rem;
}

.hero-btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  padding: 1rem 1.5rem;

  border-radius: 14px;

  font-weight: 700;

  border: none;

  cursor: pointer;

  transition: all 0.3s ease;

  text-decoration: none;
}

.hero-btn:hover {
  transform: translateY(-2px);
}

.hero-btn.disabled {
  opacity: 0.6;

  pointer-events: none;
}

/* BUTTONS */

.android-btn {
  background:
    linear-gradient(
      135deg,
      #3ddc84,
      #00a86b
    );

  color: white;
}

.telegram-btn {
  background:
    linear-gradient(
      135deg,
      #0088cc,
      #006699
    );

  color: white;
}

.ios-btn {
  background: #111;

  color: white;
}

/* =========================
   ICONS
========================= */

.btn-icon {
  width: 20px;
  height: 20px;
}

/* =========================
   LOADING
========================= */

.btn-loading {
  display: flex;
  align-items: center;

  gap: 8px;
}

.spinner {
  width: 16px;
  height: 16px;

  border-radius: 50%;

  border: 2px solid rgba(255,255,255,0.3);

  border-top-color: white;

  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* =========================
   NOTE
========================= */

.hero-note {
  width: 100%;

  margin-top: 0.5rem;

  color: rgba(255,255,255,0.6);
}

/* =========================
   IMAGE
========================= */

.hero-image {
  flex: 1;

  display: flex;
  justify-content: center;

  position: relative;
}

.hero-image img {
  width: 100%;
  max-width: 320px;

  height: auto;

  object-fit: contain;

  animation: float 4s ease-in-out infinite;

  z-index: 2;
}

.phone-glow {
  position: absolute;

  width: 400px;
  height: 400px;

  background:
    radial-gradient(
      circle,
      rgba(245,179,1,0.15),
      transparent
    );

  filter: blur(40px);

  z-index: 1;
}

/* =========================
   FLOAT
========================= */

@keyframes float {
  50% {
    transform: translateY(-18px);
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

  .hero {
    padding: 7rem 1.2rem 3rem;

    text-align: center;
  }

  .hero-content {
    flex-direction: column;

    gap: 2.5rem;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-text h1 {
    font-size: 2.3rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-btn {
    width: 100%;
  }

  .hero-image {
    width: 100%;
  }

  .hero-image img {
    max-width: 260px;
  }

  .phone-glow {
    width: 250px;
    height: 250px;
  }
}

/* =========================
   EXTRA SMALL
========================= */

@media (max-width: 480px) {

  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-btn {
    font-size: 0.95rem;

    padding: 0.95rem 1rem;
  }

  .hero-image img {
    max-width: 220px;
  }
}

</style>