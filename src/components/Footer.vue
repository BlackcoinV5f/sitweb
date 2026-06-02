<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- BRAND -->
      <div class="footer-brand">
        <div class="footer-logo">
          <img :src="logo" :alt="t('Footer.logoAlt')" class="footer-logo-img" />
          <span class="footer-logo-text">{{ t("Footer.brand") }}</span>
        </div>
        <p class="footer-description">{{ t("Footer.description") }}</p>
      </div>

      <!-- LIENS FUSIONNÉS (gauche) -->
      <div class="footer-links">
        <h3 class="footer-title">{{ t("Footer.links.title") }}</h3>
        <ul class="footer-nav">
          <li><router-link to="/about">{{ t("Footer.links.about") }}</router-link></li>
          <li><router-link to="/community">{{ t("Footer.links.community") }}</router-link></li>
          <li><a href="#">{{ t("Footer.links.legal") }}</a></li>
          <li>
  <router-link to="/privacy-policy">
    {{ t("Footer.links.privacy") }}
  </router-link>
</li>
          <li>
  <router-link to="/terms-of-use">
    {{ t("Footer.links.terms") }}
  </router-link>
</li>
        </ul>
      </div>

      <!-- SOCIAL (droite) -->
      <div class="footer-social">
        <h3 class="footer-title">{{ t("Footer.social.title") }}</h3>
        <div class="social-links">

          <a href="https://t.me/Ltnnetworkbot" target="_blank" rel="noopener noreferrer"
            class="social-link" :title="t('Footer.social.telegramBot')">
            <i class="fa-brands fa-telegram"></i>
          </a>

          <a href="https://t.me/ltn_network" target="_blank" rel="noopener noreferrer"
            class="social-link" :title="t('Footer.social.telegramCommunity')">
            <i class="fa-brands fa-telegram"></i>
          </a>

          <a href="https://www.facebook.com/share/1CjsWSj1P3/" target="_blank" rel="noopener noreferrer"
            class="social-link" :title="t('Footer.social.facebook')">
            <i class="fa-brands fa-facebook"></i>
          </a>

          <a href="https://www.youtube.com/@Blackcoinchaine" target="_blank" rel="noopener noreferrer"
            class="social-link" :title="t('Footer.social.youtube')">
            <i class="fa-brands fa-youtube"></i>
          </a>

          <a href="https://x.com/Liton_network" target="_blank" rel="noopener noreferrer"
            class="social-link" :title="t('Footer.social.twitter')">
            <i class="fa-brands fa-x-twitter"></i>
          </a>

          <a href="https://www.instagram.com/liton_network" target="_blank" rel="noopener noreferrer"
            class="social-link" :title="t('Footer.social.instagram')">
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a href="https://www.tiktok.com/@Liton_network" target="_blank" rel="noopener noreferrer"
            class="social-link" :title="t('Footer.social.tiktok')">
            <i class="fa-brands fa-tiktok"></i>
          </a>

        </div>
      </div>

    </div>

    <!-- BOTTOM -->
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} {{ t("Footer.copyright") }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import logo from "../assets/liton-logo.png";

const { t } = useI18n({ useScope: "global" });
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  margin-top: 4rem;
  background: linear-gradient(180deg, #2a1842, #0f0a1a);
}

.footer-content {
  max-width: 1200px;
  margin: auto;
  padding: 3rem 1.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
}

.footer-logo-img { width: 40px; }

.footer-logo-text {
  font-weight: bold;
  font-size: 1.3rem;
  color: white;
}

.footer-description {
  font-size: 0.88rem;
  color: var(--text-secondary, #94a3b8);
  line-height: 1.6;
}

.footer-title {
  margin: 0 0 1rem;
  color: var(--accent, #facc15);
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-nav a {
  color: var(--text-secondary, #94a3b8);
  text-decoration: none;
  font-size: 0.88rem;
  transition: color 0.2s ease;
}

.footer-nav a:hover { color: var(--accent, #facc15); }

.social-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 17px;
  color: #facc15;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.25s ease;
}

.social-link:hover {
  transform: translateY(-4px) scale(1.08);
  background: #facc15;
  color: #000;
  border-color: #facc15;
  box-shadow: 0 4px 14px rgba(250,204,21,0.35);
}

.footer-bottom {
  text-align: center;
  padding: 1.5rem;
  font-size: 0.82rem;
  color: var(--text-secondary, #64748b);
  border-top: 1px solid rgba(255,255,255,0.06);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-logo { justify-content: center; }
  .footer-nav  { align-items: center; }
  .social-links { justify-content: center; }
}
</style>