<template>
  <section class="problem-section" :aria-labelledby="t('ProblemSection.aria')">
    <div class="problem-container">

      <h2 id="problem-title" class="section-title">
        {{ t("ProblemSection.title") }}
      </h2>

      <div class="problem-grid">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="problem-card"
        >
          <div class="problem-icon">{{ card.icon }}</div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </div>
      </div>

    </div>

    <!-- WAVE DIVIDER -->
    <div class="wave-divider">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,60 C240,100 480,20 720,40 C960,60 1200,100 1440,80 L1440,120 L0,120 Z"
          fill="#1f0f33"
        />
      </svg>
    </div>

  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n({ useScope: "global" });

// ✅ tm() pour récupérer le tableau de cartes
const cards = computed(() => tm("ProblemSection.cards"));
</script>

<style scoped>
.problem-section {
  padding: 6rem 2rem 8rem;
  position: relative;
  background: linear-gradient(180deg, #6b21a8 0%, #2a1842 100%);
  overflow: hidden;
}

.problem-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ffffff;
  font-weight: 700;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.problem-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.problem-card:hover {
  transform: translateY(-10px);
  border-color: #a78bfa;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.problem-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.problem-card h3 {
  color: #a78bfa;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.problem-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
}

.wave-divider svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>