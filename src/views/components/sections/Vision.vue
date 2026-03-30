<template>
  <section id="vision">
    <h2><span class="section-number">2.</span> Vision et objectifs du projet</h2>
    <p>
      Blackcoin est avant tout une <strong class="keyword">plateforme de services financiers numériques</strong>. 
      L'objectif principal est de fournir aux utilisateurs des outils, des contenus et des services permettant de :
    </p>
    <ul class="objectives-list">
      <li>✅ <span>Mieux comprendre l'univers de la finance et des actifs numériques</span></li>
      <li>✅ <span>Accéder à des informations structurées et pédagogiques</span></li>
      <li>✅ <span>Utiliser des services financiers numériques dans un environnement unifié</span></li>
      <li>✅ <span>Interagir avec des fonctionnalités innovantes de manière progressive et encadrée</span></li>
    </ul>
    <div class="warning-box">
      <p>
        <strong>Le token BKC n'est pas conçu comme un produit d'investissement, 
        mais comme un instrument utilitaire</strong> destiné à faciliter l'utilisation 
        de certains services de la plateforme.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Vision'
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

.objectives-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.objectives-list li {
  padding: 12px 15px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid #f5b301;
}

.warning-box {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.keyword {
  color: #4cd964;
  font-weight: bold;
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>