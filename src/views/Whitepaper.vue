<template>
  <main class="whitepaper-wrapper">
    <TableOfContents 
      :sections="sections" 
      @download-pdf="downloadPDF" 
    />

    <article class="whitepaper-container">
      <header class="document-header">
        <h1>LIVRE BLANC BLACKCOIN (BKC)</h1>
        <p class="document-subtitle">Plateforme d'éducation et d'accès aux services financiers numériques</p>
        <div class="warning-banner">
          ⚠️ <strong>Document informatif</strong> — Le token BKC est un outil utilitaire, 
          ne constitue pas un produit d'investissement et ne garantit aucun rendement.
        </div>
      </header>

      <Introduction />
      <Vision />
      <Ecosystem />
      <Mining />
      <Progression />
      <Token />
      <Distribution />
      <Cotation />
      <Regulation />
      <Risks />
      <Conclusion />

      <footer class="document-footer">
        <div class="footer-content">
          <p class="disclaimer">
            <strong>Document informatif</strong> — Version 1.0 — Dernière mise à jour : Mars 2024<br>
            Ce document ne constitue pas une offre financière, un conseil en investissement 
            ou une sollicitation d'achat. Consultez nos CGU pour plus d'informations.
          </p>
          <div class="footer-links">
            <a href="#">Conditions Générales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </article>
  </main>
</template>

<script>
import TableOfContents from './components/TableOfContents.vue'
import Introduction from './components/sections/Introduction.vue'
import Vision from './components/sections/Vision.vue'
import Ecosystem from './components/sections/Ecosystem.vue'
import Mining from './components/sections/Mining.vue'
import Progression from './components/sections/Progression.vue'
import Token from './components/sections/Token.vue'
import Distribution from './components/sections/Distribution.vue'
import Cotation from './components/sections/Cotation.vue'
import Regulation from './components/sections/Regulation.vue'
import Risks from './components/sections/Risks.vue'
import Conclusion from './components/sections/Conclusion.vue'

export default {
  name: 'Whitepaper',
  components: {
    TableOfContents,
    Introduction,
    Vision,
    Ecosystem,
    Mining,
    Progression,
    Token,
    Distribution,
    Cotation,
    Regulation,
    Risks,
    Conclusion
  },
  data() {
    return {
      sections: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'vision', title: 'Vision et objectifs' },
        { id: 'ecosysteme', title: 'Écosystème' },
        { id: 'minage', title: 'Phase de minage' },
        { id: 'progression', title: 'Progression et services' },
        { id: 'token', title: 'Token BKC' },
        { id: 'distribution', title: 'Distribution' },
        { id: 'cotation', title: 'Cotation' },
        { id: 'reglementation', title: 'Réglementation' },
        { id: 'risques', title: 'Analyse des risques' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    }
  },
  methods: {
    downloadPDF() {
      alert('Fonctionnalité PDF à implémenter');
    }
  }
}
</script>

<style scoped>
@import './styles/whitepaper.css';
</style>