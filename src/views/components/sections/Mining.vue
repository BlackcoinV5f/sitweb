<template>
  <section id="minage">
    <h2><span class="section-number">4.</span> Phase de participation et de minage</h2>
    
    <h3>4.1 Principe général</h3>
    <p>
      La plateforme Blackcoin introduit une phase de participation communautaire, 
      communément appelée « phase de minage ». Cette phase a pour objectif principal de :
    </p>
    <ul>
      <li><strong>Encourager l'engagement</strong> des utilisateurs</li>
      <li><strong>Tester et améliorer</strong> la plateforme</li>
      <li><strong>Structurer</strong> une communauté active autour des services Blackcoin</li>
    </ul>
    <p class="note-text">La phase de minage est <strong>limitée dans le temps</strong> et s'étend sur quelques mois.</p>

    <h3>4.2 Nature de la participation</h3>
    <p>La participation repose sur des actions non spéculatives :</p>
    <div class="participation-grid">
      <div class="participation-card">
        <div class="card-icon">💻</div>
        <p>Utilisation de la plateforme</p>
      </div>
      <div class="participation-card">
        <div class="card-icon">📚</div>
        <p>Activités éducatives</p>
      </div>
      <div class="participation-card">
        <div class="card-icon">🔄</div>
        <p>Interaction avec les fonctionnalités</p>
      </div>
      <div class="participation-card">
        <div class="card-icon">📈</div>
        <p>Progression dans des parcours</p>
      </div>
    </div>
    
    <div class="disclaimer-box">
      <h4>⚠️ IMPORTANT</h4>
      <p>
        Cette phase ne constitue <strong>ni un investissement, ni une promesse de rendement futur</strong>, 
        et ne garantit aucun avantage économique. Aucune contribution financière n'est requise.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Mining'
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

h3 {
  margin-top: 35px;
  margin-bottom: 15px;
  color: #ddd;
  font-size: 1.3rem;
}

ul {
  margin: 15px 0;
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.note-text {
  color: #aaa;
  font-style: italic;
  margin-top: 15px;
}

.participation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.participation-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.disclaimer-box {
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid rgba(255, 59, 48, 0.3);
  padding: 20px;
  border-radius: 8px;
  margin: 25px 0;
}

.disclaimer-box h4 {
  color: #ff3b30;
  margin-top: 0;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .participation-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.2rem;
  }
}
</style>