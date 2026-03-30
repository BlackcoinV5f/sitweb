<template>
  <section id="introduction">
    <h2><span class="section-number">1.</span> Introduction</h2>
    <p>
      L'évolution des technologies numériques a profondément transformé l'accès à l'information,
      mais l'accès aux opportunités financières reste encore largement limité pour une grande partie
      de la population mondiale. Les marchés financiers, l'investissement, la compréhension des
      mécanismes économiques et l'accès à certains services demeurent complexes, coûteux ou réservés
      à une minorité.
    </p>
    <p>
      <strong class="highlight">Blackcoin est né de cette observation</strong> : il existe un écart important entre l'univers financier
      traditionnel, l'écosystème des actifs numériques et le grand public. La plateforme Blackcoin a
      pour ambition de réduire cet écart en proposant une infrastructure numérique axée sur <strong>l'accès,
      l'apprentissage, l'utilisation et l'expérimentation</strong> de services financiers modernes.
    </p>
    <div class="note-box">
      <p>Le token BKC s'inscrit comme un <strong>outil fonctionnel</strong> au sein de cet écosystème.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Introduction'
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

.note-box {
  background: rgba(32, 128, 255, 0.1);
  border-left: 4px solid #2080ff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.highlight {
  color: #f5b301;
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>