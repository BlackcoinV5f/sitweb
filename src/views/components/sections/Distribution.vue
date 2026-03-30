<template>
  <section id="distribution">
    <h2><span class="section-number">7.</span> Distribution et gestion du token</h2>
    <p>La distribution du token BKC est conçue pour assurer le bon fonctionnement de l'écosystème :</p>
    <div class="distribution-grid">
      <div class="dist-item">
        <h4>🔄 Utilisation interne</h4>
        <p>Fonctionnalités de la plateforme</p>
      </div>
      <div class="dist-item">
        <h4>🚀 Développement</h4>
        <p>Évolution de la plateforme</p>
      </div>
      <div class="dist-item">
        <h4>⚙️ Opérations techniques</h4>
        <p>Maintenance et infrastructure</p>
      </div>
      <div class="dist-item">
        <h4>👥 Animation communautaire</h4>
        <p>Engagement et récompenses</p>
      </div>
    </div>
    <div class="note-box">
      <p>La détention du token ne constitue pas une participation au capital, ni un droit de gouvernance financière.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Distribution'
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

.distribution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.dist-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
}

h4 {
  color: #fff;
  margin-bottom: 8px;
}

.note-box {
  background: rgba(32, 128, 255, 0.1);
  border-left: 4px solid #2080ff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .distribution-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>