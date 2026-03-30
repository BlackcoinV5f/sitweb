<template>
  <section id="conclusion">
    <h2><span class="section-number">11.</span> Conclusion</h2>
    <div class="conclusion-content">
      <p>
        Blackcoin est un projet orienté vers <strong>l'usage, l'éducation et l'accessibilité</strong> 
        des services financiers numériques. Le token BKC est un outil fonctionnel au service de cette 
        vision, et non une finalité en soi.
      </p>
      <p>
        La réussite du projet repose sur l'adoption des services, la qualité de l'expérience utilisateur 
        et l'évolution progressive de l'écosystème, dans le respect des cadres réglementaires applicables.
      </p>
    </div>
    <div class="call-to-action">
      <h3>🚀 Prêt à explorer Blackcoin ?</h3>
      <div class="cta-buttons">
        <button class="cta-btn primary">Rejoindre la communauté</button>
        <button class="cta-btn secondary">Accéder à la plateforme</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Conclusion'
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

.conclusion-content {
  margin: 20px 0;
}

.call-to-action {
  text-align: center;
  margin-top: 50px;
  padding: 40px;
  background: rgba(245, 179, 1, 0.1);
  border-radius: 16px;
  border: 2px dashed #f5b301;
}

h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #ddd;
  font-size: 1.3rem;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 25px;
}

.cta-btn {
  padding: 12px 30px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-btn.primary {
  background: #f5b301;
  color: #1f0f33;
}

.cta-btn.secondary {
  background: transparent;
  border: 2px solid #f5b301;
  color: #f5b301;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(245, 179, 1, 0.3);
}

@media (max-width: 768px) {
  .cta-buttons {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>