<template>
  <section id="risques">
    <h2><span class="section-number">10.</span> Analyse des risques</h2>
    <p>L'utilisation de la plateforme Blackcoin comporte des risques :</p>
    <div class="risks-grid">
      <div class="risk-card">
        <h4>📜 Risque réglementaire</h4>
        <p>Évolution des cadres légaux</p>
      </div>
      <div class="risk-card">
        <h4>💻 Risque technologique</h4>
        <p>Bugs, sécurité, maintenance</p>
      </div>
      <div class="risk-card">
        <h4>🔄 Risque d'évolution du projet</h4>
        <p>Changements de roadmap</p>
      </div>
      <div class="risk-card">
        <h4>👥 Risque de non-adoption</h4>
        <p>Adoption limitée par la communauté</p>
      </div>
      <div class="risk-card">
        <h4>📊 Risque de non-cotation</h4>
        <p>Absence de marché secondaire</p>
      </div>
    </div>
    <div class="warning-banner">
      <strong>Les utilisateurs sont invités à utiliser la plateforme en connaissance de cause.</strong>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Risks'
}
</script>

<style scoped>
section {
  margin-bottom: 60px;
  scroll-margin-top: 20px;
}

h2 {
  margin-top: 45px;
  margin-bottom: 25px;
  color: #f5b301;
  font-size: 1.8rem;
  border-bottom: 2px solid rgba(245, 179, 1, 0.3);
  padding-bottom: 10px;
}

.section-number {
  color: #f5b301;
  margin-right: 8px;
}

.risks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.risk-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

h4 {
  color: #fff;
  margin-bottom: 8px;
}

.warning-banner {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .risks-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>