<template>
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
</template>

<script setup>
// Pas de logique nécessaire ici
</script>

<style scoped>
/* SECTION */
.stats-section {
  padding: 4rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
}

/* GRID */
.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

/* CARD */
.stat-card {
  background: var(--card-bg);
  padding: 1.8rem;
  border-radius: 14px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s;
}

/* HOVER */
.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

/* NUMBER */
.stat-number {
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

/* LABEL */
.stat-label {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

/* MOBILE */
@media (max-width: 768px) {
  .stats-section {
    padding: 3rem 1rem;
  }

  .stat-number {
    font-size: 1.8rem;
  }
}
</style>