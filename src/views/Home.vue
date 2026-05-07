<template>
  <div class="app-wrapper">
    <Header />
    
    <main class="main-content">
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <CtaSection />
      <InfoAlert />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import StatsSection from '../components/StatsSection.vue'
import ProblemSection from '../components/ProblemSection.vue'
import CtaSection from '../components/CtaSection.vue'
import Footer from '../components/Footer.vue'
import InfoAlert from '../components/InfoAlert.vue'
</script>

<style>
:root {
  --primary: #071120;
  --secondary: #0d1b2a;
  --accent: #00c2ff;
  --text: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.85);
}

.app-wrapper {
  min-height: 100vh;
  background-color: var(--primary);
  color: var(--text);
}

.main-content {
  padding-top: 80px;
}
</style>