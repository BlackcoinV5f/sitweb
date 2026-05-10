<template>
  <section class="stats-section" :aria-label="t('StatsSection.aria')">
    <div class="stats-container">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="stat-card"
      >
        <div class="stat-number">{{ stat.number }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n({ useScope: "global" });

// ✅ tm() pour récupérer un tableau depuis les JSON
const stats = computed(() => tm("StatsSection.stats"));
</script>

<style scoped>
.stats-section {
  padding: 4rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.stat-card {
  background: var(--card-bg);
  padding: 1.8rem;
  border-radius: 14px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.stat-number {
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .stats-section { padding: 3rem 1rem; }
  .stat-number   { font-size: 1.8rem; }
}
</style>