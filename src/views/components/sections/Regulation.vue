<template>
  <section id="reglementation">
    <h2><span class="section-number">9.</span> Cadre réglementaire et conformité</h2>
    <p>Blackcoin s'inscrit dans une démarche de conformité progressive :</p>
    <div class="compliance-list">
      <div class="compliance-item">
        <div class="check-icon">✓</div>
        <div>
          <h4>Éviter toute qualification en produit financier</h4>
          <p>Approche utilitaire claire</p>
        </div>
      </div>
      <div class="compliance-item">
        <div class="check-icon">✓</div>
        <div>
          <h4>Séparation usage / participation / token</h4>
          <p>Distinction nette entre les composantes</p>
        </div>
      </div>
      <div class="compliance-item">
        <div class="check-icon">✓</div>
        <div>
          <h4>Information transparente</h4>
          <p>Communication claire et régulière</p>
        </div>
      </div>
    </div>
    <div class="legal-note">
      <p>
        <strong>Note légale :</strong> Les utilisateurs sont responsables de vérifier la conformité 
        de leur utilisation avec les lois en vigueur dans leur juridiction. La plateforme Blackcoin 
        n'est pas accessible aux résidents de certaines juridictions restrictives.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Regulation'
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

.compliance-list {
  margin: 25px 0;
}

.compliance-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  margin-bottom: 10px;
}

.check-icon {
  color: #4cd964;
  font-weight: bold;
  font-size: 1.2rem;
}

h4 {
  color: #fff;
  margin-bottom: 8px;
}

.legal-note {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 0.9rem;
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>