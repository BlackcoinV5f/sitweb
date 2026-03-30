<template>
  <section id="token">
    <h2><span class="section-number">6.</span> Le token BKC</h2>
    
    <div class="token-info-card">
      <h3>6.1 Rôle du token</h3>
      <p>Le token BKC est un <strong class="keyword">outil utilitaire</strong> au sein de l'écosystème Blackcoin :</p>
      <ul>
        <li>🔓 Accès à certaines fonctionnalités spécifiques</li>
        <li>💳 Règlement de services internes</li>
        <li>🤝 Facilitation des interactions au sein de la plateforme</li>
      </ul>
      <div class="token-warning">
        <p>La détention de BKC ne confère <strong>aucun droit financier, aucun dividende et aucune promesse de rendement</strong>.</p>
      </div>
    </div>

    <h3>6.2 Utilisation du token</h3>
    <p>
      Le BKC est destiné à un usage strictement fonctionnel. Son rôle est limité aux besoins 
      opérationnels de la plateforme. L'utilisation du token est indépendante de la participation 
      à la phase de minage ou aux services premium.
    </p>
  </section>
</template>

<script>
export default {
  name: 'Token'
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

.token-info-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 12px;
  margin: 20px 0;
}

ul {
  margin: 15px 0;
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.token-warning {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.keyword {
  color: #4cd964;
  font-weight: bold;
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