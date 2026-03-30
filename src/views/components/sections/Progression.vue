<template>
  <section id="progression">
    <h2><span class="section-number">5.</span> Progression, gamification et services premium</h2>
    
    <h3>5.1 Parcours de progression</h3>
    <p>Blackcoin intègre un système de progression visant à améliorer l'expérience utilisateur :</p>
    <ul>
      <li>🎮 <strong>Niveaux</strong> - Évolution selon l'activité</li>
      <li>🧭 <strong>Parcours thématiques</strong> - Apprentissage structuré</li>
      <li>🎯 <strong>Objectifs pédagogiques</strong> - Défis éducatifs</li>
      <li>🪙 <strong>Points internes</strong> - Récompenses non monétaires</li>
    </ul>
    <p class="note-text">La progression est conçue comme un <strong>outil d'accompagnement</strong>, non comme un mécanisme d'accumulation de valeur.</p>

    <h3>5.2 Services premium</h3>
    <p>Certains services sont accessibles via des offres premium facultatives :</p>
    <div class="services-grid">
      <div class="service-card">🎓 Contenus éducatifs avancés</div>
      <div class="service-card">🔧 Outils supplémentaires</div>
      <div class="service-card">📊 Tableaux de bord enrichis</div>
      <div class="service-card">⚡ Fonctionnalités expérimentales</div>
    </div>

    <h3>5.3 Points internes</h3>
    <div class="warning-box">
      <p>Les points internes :</p>
      <ul>
        <li>❌ <strong>N'ont aucune valeur monétaire</strong></li>
        <li>❌ <strong>Ne sont pas échangeables</strong></li>
        <li>❌ <strong>Ne sont pas convertibles</strong> en actifs numériques</li>
        <li>✅ <strong>Servent uniquement</strong> à l'utilisation interne de la plateforme</li>
      </ul>
      <p class="mt-2">Ils sont conçus comme un mécanisme d'usage et de consommation, non comme un stock de valeur.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Progression'
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.warning-box {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.mt-2 {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .services-grid {
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