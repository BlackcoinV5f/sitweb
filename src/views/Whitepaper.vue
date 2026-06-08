<template>
  <main class="whitepaper-wrapper">
    <TableOfContents 
      :sections="localizedSections" 
      @download-pdf="downloadPDF" 
    />

    <article class="whitepaper-container">
      <header class="document-header">
        <h1>{{ $t('Whitepaper.header.title') }}</h1>
        <p class="document-subtitle">
          {{ $t('Whitepaper.header.subtitle') }}
        </p>
        <div class="warning-banner">
          ⚠️ <strong>{{ $t('Whitepaper.header.warning') }}</strong> — {{ $t('Whitepaper.header.warningText') }}
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
            <strong>{{ $t('Whitepaper.footer.disclaimerLabel') }}</strong> — {{ $t('Whitepaper.footer.disclaimerVersion') }}<br>
            {{ $t('Whitepaper.footer.disclaimerText') }}
          </p>

          <div class="footer-links">
            <a href="#">{{ $t('Whitepaper.footer.links.terms') }}</a>
            <a href="#">{{ $t('Whitepaper.footer.links.privacy') }}</a>
            <a href="#">{{ $t('Whitepaper.footer.links.contact') }}</a>
          </div>

          <div class="social-icons">

            <a href="https://t.me/Ltnnetworkbot" target="_blank" rel="noopener noreferrer" :title="$t('Whitepaper.footer.social.telegramBot')">
              <i class="fab fa-telegram"></i>
            </a>

            <a href="https://t.me/ltn_network" target="_blank" rel="noopener noreferrer" :title="$t('Whitepaper.footer.social.telegramCommunity')">
              <i class="fab fa-telegram-plane"></i>
            </a>

            <a href="https://www.facebook.com/share/1CjsWSj1P3/" target="_blank" rel="noopener noreferrer" :title="$t('Whitepaper.footer.social.facebook')">
              <i class="fab fa-facebook"></i>
            </a>

            <a href="https://x.com/Liton_network" target="_blank" rel="noopener noreferrer" :title="$t('Whitepaper.footer.social.twitter')">
              <i class="fab fa-x-twitter"></i>
            </a>

            <a href="https://www.instagram.com/blackcoin_LTN" target="_blank" rel="noopener noreferrer" :title="$t('Whitepaper.footer.social.instagram')">
              <i class="fab fa-instagram"></i>
            </a>

            <a href="https://www.youtube.com/@Blackcoinchaine" target="_blank" rel="noopener noreferrer" :title="$t('Whitepaper.footer.social.youtube')">
              <i class="fab fa-youtube"></i>
            </a>

            <a href="https://www.tiktok.com/@Liton_network" target="_blank" rel="noopener noreferrer" :title="$t('Whitepaper.footer.social.tiktok')">
              <i class="fab fa-tiktok"></i>
            </a>

          </div>
        </div>
      </footer>
    </article>
  </main>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
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
  setup() {
    const { tm, locale } = useI18n()

    // Sections réactives à la langue courante
    const localizedSections = computed(() =>
      tm('Whitepaper.sections').map(s => ({ id: s.id, title: s.title }))
    )

    return { localizedSections, locale }
  },
  methods: {
    downloadPDF() {
      alert('Fonctionnalité PDF à implémenter')
    }
  }
}
</script>

<style scoped>
@import './styles/whitepaper.css';

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