<template>
  <div class="app-wrapper">
    <!-- HEADER -->
    <header class="top-bar">
      <div class="logo-container">
        <img
          src="./assets/blackcoin-logo.png"
          alt="Blackcoin Logo"
          class="logo-img"
        />
        <span class="logo-text">Blackcoin</span>
      </div>

      <nav class="nav-links">
        <a href="#">Blockchain</a>
        <a href="#">Écosystème</a>
        <a href="#">À propos</a>
        <a href="#">Communauté</a>
      </nav>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-text">
        <h1>
          La cryptomonnaie que vous pouvez miner
          <br />
          directement sur votre téléphone
        </h1>

        <p class="hero-subtitle">
          Blackcoin permet de miner facilement depuis une application mobile,
          sans consommation excessive d’énergie.
        </p>

        <a
          href="https://github.com/BlackcoinV5f/blackcoin-versing-apk/releases/download/v6.0/blackcoin.apk"
          class="hero-btn"
        >
          Télécharger l’application Blackcoin
        </a>
      </div>

      <div class="hero-image">
        <img
          src="./assets/phone-mockup.png"
          alt="Application Blackcoin"
        />
      </div>
    </section>

    <!-- INFO -->
    <section class="info-alert">
      <img
        src="./assets/development-alert.png"
        alt="En développement"
        class="info-image"
      />
      <p class="info-text">
        ⚠️ Cette page est en cours de développement.
        Le contenu peut changer à tout moment.
      </p>
    </section>
  </div>
</template>

<style scoped>
/* =========================
   STRUCTURE
   ========================= */
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1f0f33;
  color: #ffffff;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* =========================
   HEADER
   ========================= */
.top-bar {
  height: 78px;
  background-color: #5b2d8b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  flex-wrap: wrap;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-img {
  width: 48px;
  height: 48px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
}

/* NAV */
.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* =========================
   HERO
   ========================= */
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 64px;
  gap: 40px;
  background: radial-gradient(circle at right, #3a1c5a, #1f0f33);
}

.hero-text {
  max-width: 520px;
}

.hero-text h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 32px;
}

/* BOUTON */
.hero-btn {
  display: inline-block;
  background: #f5b301;
  color: #000;
  padding: 16px 36px;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

/* IMAGE */
.hero-image img {
  width: 320px;
  max-width: 100%;
}

/* =========================
   INFO ALERT
   ========================= */
.info-alert {
  background-color: #fffae6;
  border: 1px solid #ffd700;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 40px auto;
  border-radius: 12px;
  max-width: 900px;
}

.info-image {
  width: 48px;
  height: 48px;
}

.info-text {
  font-size: 1.05rem;
  color: #333;
  font-weight: 500;
}

/* =========================
   RESPONSIVE
   ========================= */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 60px 24px;
  }

  .hero-text h1 br {
    display: none;
  }
}

@media (max-width: 600px) {
  .top-bar {
    justify-content: center;
    gap: 16px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
