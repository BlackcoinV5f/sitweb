<template>
  <section id="cotation">
    <h2><span class="section-number">8.</span> Cotation et plateformes d'échange</h2>
    <div class="warning-box">
      <p>
        L'équipe Blackcoin pourra, le moment venu, étudier les possibilités d'intégration 
        du token BKC sur des plateformes d'échange compatibles. <strong>Toutefois :</strong>
      </p>
      <ul>
        <li>❌ <strong>Aucune cotation n'est garantie</strong></li>
        <li>❌ <strong>Aucune liquidité n'est promise</strong></li>
        <li>❌ <strong>Aucune échéance temporelle n'est contractuelle</strong></li>
      </ul>
      <p class="mt-2">
        Les décisions relatives à une éventuelle cotation dépendront de facteurs techniques, 
        réglementaires et stratégiques.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cotation'
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

.warning-box {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

ul {
  margin: 15px 0;
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.mt-2 {
  margin-top: 20px;
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>