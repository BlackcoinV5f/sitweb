<template>
  <main class="whitepaper-wrapper">
    <TableOfContents 
      :sections="sections" 
      @download-pdf="downloadPDF" 
    />

    <article class="whitepaper-container">
      <header class="document-header">
        <h1>LIVRE BLANC BLACKCOIN (BKC)</h1>
        <p class="document-subtitle">
          Plateforme d'éducation et d'accès aux services financiers numériques
        </p>
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

      <!-- FOOTER -->
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

          <!-- 🔥 RÉSEAUX SOCIAUX AVEC ICÔNES -->
          <div class="social-icons">
            
            <!-- BOT TELEGRAM -->
            <a href="https://t.me/Bkc_blackcoinbot" target="_blank" rel="noopener noreferrer" title="Bot Telegram">
              <i class="fab fa-telegram"></i>
            </a>

            <!-- COMMUNAUTÉ TELEGRAM -->
            <a href="https://t.me/+2VYCu2Ygs0Q1YTk0" target="_blank" rel="noopener noreferrer" title="Communauté Telegram">
              <i class="fab fa-telegram-plane"></i>
            </a>

            <a href="https://www.facebook.com/share/1CjsWSj1P3/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i class="fab fa-facebook"></i>
            </a>

            <a href="https://x.com/BlackcoinON" target="_blank" rel="noopener noreferrer" title="X">
              <i class="fab fa-x-twitter"></i>
            </a>

            <a href="https://www.instagram.com/blackcoin_bkc" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i class="fab fa-instagram"></i>
            </a>

            <a href="https://www.youtube.com/@Blackcoinchaine" target="_blank" rel="noopener noreferrer" title="YouTube">
              <i class="fab fa-youtube"></i>
            </a>

            <a href="https://www.tiktok.com/@blackcoin_official" target="_blank" rel="noopener noreferrer" title="TikTok">
              <i class="fab fa-tiktok"></i>
            </a>

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

/* 🔥 SOCIAL ICONS PRO STYLE */
.social-icons {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
}

.social-icons a {
  font-size: 22px;
  color: #facc15;
  transition: 0.3s;
}

.social-icons a:hover {
  color: #ffffff;
  transform: translateY(-4px) scale(1.15);
}
</style>