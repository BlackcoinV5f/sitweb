<template>
  <section class="cta-section" aria-labelledby="cta-title">
    <div class="cta-container">
      
      <h2 id="cta-title" class="section-title">
        Prêt à commencer ?
      </h2>

      <p class="cta-text">
        Rejoignez des milliers d'utilisateurs qui minent déjà Blackcoin.
        Téléchargez l'application et commencez dès aujourd'hui.
      </p>

      <a
        :href="apkUrl"
        class="cta-btn"
        :class="{ disabled: loading || error }"
        :aria-disabled="loading || error"
      >
        <span v-if="loading">Préparation…</span>
        <span v-else-if="error">Bientôt disponible</span>
        <span v-else>🚀 Commencer le mining</span>
      </a>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const apkUrl = ref("#");
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const controller = new AbortController();

    const response = await fetch(
      "https://raw.githubusercontent.com/BlackcoinV5f/blackcoin-versing-apk/main/version.json",
      {
        cache: "no-store",
        signal: controller.signal,
      }
    );

    if (!response.ok) throw new Error("Erreur HTTP");

    const data = await response.json();
    apkUrl.value = data.apk_url || "#";

  } catch (e) {
    console.error("Erreur chargement APK :", e);
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* SECTION */
.cta-section {
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, var(--secondary), #7a3d8f);
  text-align: center;
}

/* CONTAINER */
.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

/* TITLE */
.section-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* TEXT */
.cta-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

/* BUTTON */
.cta-btn {
  display: inline-block;
  background: var(--accent);
  color: #000;
  padding: 1rem 2.5rem;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s;
}

/* HOVER */
.cta-btn:hover:not(.disabled) {
  transform: translateY(-3px);
  background: var(--accent-hover);
}

/* DISABLED */
.cta-btn.disabled {
  opacity: 0.6;
  pointer-events: none;
}

/* MOBILE */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.6rem;
  }

  .cta-text {
    font-size: 1rem;
  }

  .cta-btn {
    width: 100%;
  }
}
</style>