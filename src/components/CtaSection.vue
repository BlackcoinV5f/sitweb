<template>
  <section class="cta-section" :aria-labelledby="t('CtaSection.aria')">
    <div class="cta-container">

      <h2 id="cta-title" class="section-title">
        {{ t("CtaSection.title") }}
      </h2>

      <p class="cta-text">
        {{ t("CtaSection.text") }}
      </p>

      <a
        :href="apkUrl"
        class="cta-btn"
        :class="{ disabled: loading || error }"
        :aria-disabled="loading || error"
      >
        <span v-if="loading">{{ t("CtaSection.btn.loading") }}</span>
        <span v-else-if="error">{{ t("CtaSection.btn.unavailable") }}</span>
        <span v-else>{{ t("CtaSection.btn.start") }}</span>
      </a>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const apkUrl  = ref("#");
const loading = ref(true);
const error   = ref(false);

onMounted(async () => {
  try {
    const controller = new AbortController();
    const response = await fetch(
      "https://raw.githubusercontent.com/BlackcoinV5f/blackcoin-versing-apk/main/version.json",
      { cache: "no-store", signal: controller.signal }
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
.cta-section {
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, var(--secondary), #7a3d8f);
  text-align: center;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

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

.cta-btn:hover:not(.disabled) {
  transform: translateY(-3px);
  background: var(--accent-hover);
}

.cta-btn.disabled {
  opacity: 0.6;
  pointer-events: none;
}

@media (max-width: 768px) {
  .section-title { font-size: 1.6rem; }
  .cta-text      { font-size: 1rem; }
  .cta-btn       { width: 100%; }
}
</style>