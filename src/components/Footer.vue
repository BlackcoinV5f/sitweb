<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- BRAND -->
      <div class="footer-brand">
        <div class="footer-logo">
          <img :src="logo" alt="Blackcoin Logo" class="footer-logo-img" />
          <span class="footer-logo-text">Blackcoin</span>
        </div>
        <p class="footer-description">
          La cryptomonnaie que vous pouvez miner directement sur votre téléphone.
          Simple, écologique et accessible à tous.
        </p>
      </div>

      <!-- SOCIAL -->
      <div>
        <h3 class="footer-title">Suivez-nous</h3>
        <div class="social-links">

          <!-- BOT TELEGRAM -->
          <a href="https://t.me/Bkc_blackcoinbot" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fa-brands fa-telegram"></i>
          </a>

          <!-- COMMUNAUTÉ TELEGRAM -->
          <a href="https://t.me/+2VYCu2Ygs0Q1YTk0" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fa-brands fa-telegram"></i>
          </a>

          <a href="https://www.facebook.com/share/1CjsWSj1P3/" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fa-brands fa-facebook"></i>
          </a>

          <a href="https://www.youtube.com/@Blackcoinchaine" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fa-brands fa-youtube"></i>
          </a>

          <a href="https://x.com/BlackcoinON" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fa-brands fa-x-twitter"></i>
          </a>

          <a href="https://www.instagram.com/blackcoin_bkc" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a href="https://www.tiktok.com/@blackcoin_official" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fa-brands fa-tiktok"></i>
          </a>

        </div>
      </div>

      <!-- LINKS -->
      <div>
        <h3 class="footer-title">Liens utiles</h3>
        <ul class="footer-nav">
          <li><router-link to="/whitepaper">Livre blanc</router-link></li>
          <li><router-link to="/roadmap">Feuille de route</router-link></li>
          <li><router-link to="/ecosystem">Écosystème</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/community">Communauté</router-link></li>
        </ul>
      </div>

      <!-- LEGAL -->
      <div>
        <h3 class="footer-title">Légal</h3>
        <ul class="footer-nav">
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Politique de confidentialité</a></li>
          <li><a href="#">Conditions</a></li>
        </ul>
      </div>

    </div>

    <!-- BOTTOM -->
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Blackcoin. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import logo from "../assets/blackcoin-logo.png";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  margin-top: 4rem;
  background: linear-gradient(180deg, #2a1842, #0f0a1a);
}

/* GRID */
.footer-content {
  max-width: 1200px;
  margin: auto;
  padding: 3rem 1.5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

/* BRAND */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
}

.footer-logo-img {
  width: 40px;
}

.footer-logo-text {
  font-weight: bold;
  font-size: 1.3rem;
}

.footer-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* TITLES */
.footer-title {
  margin-bottom: 1rem;
  color: var(--accent);
}

/* LINKS */
.footer-nav {
  list-style: none;
}

.footer-nav li {
  margin-bottom: 8px;
}

.footer-nav a {
  color: var(--text-secondary);
  text-decoration: none;
}

.footer-nav a:hover {
  color: var(--accent);
}

/* 🔥 SOCIAL */
.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  width: 42px;
  height: 42px;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 18px;
  color: #facc15;
  transition: 0.3s;
}

.social-link:hover {
  transform: translateY(-4px) scale(1.1);
  background: #facc15;
  color: #000;
}

/* BOTTOM */
.footer-bottom {
  text-align: center;
  padding: 1.5rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* MOBILE */
@media (max-width: 768px) {
  .footer-content {
    text-align: center;
  }

  .footer-logo {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>