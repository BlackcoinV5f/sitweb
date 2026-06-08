<template>
  <section id="ecosysteme">
    <h2><span class="section-number">{{ $t('Ecosystem.sectionNumber') }}</span> {{ $t('Ecosystem.title') }}</h2>
    <p>{{ $t('Ecosystem.intro') }}</p>
    <div class="ecosystem-pillars">
      <div
        v-for="(pillar, i) in tm('Ecosystem.pillars')"
        :key="i"
        class="pillar"
      >
        <div class="pillar-icon">{{ pillar.icon }}</div>
        <h4>{{ pillar.title }}</h4>
        <p>{{ pillar.description }}</p>
      </div>
    </div>
    <p class="note-text">{{ $t('Ecosystem.note') }}</p>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Ecosystem',
  setup() {
    const { tm } = useI18n()
    return { tm }
  }
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
.ecosystem-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}
.pillar {
  text-align: center;
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s;
}
.pillar:hover {
  transform: translateY(-5px);
  border-color: #f5b301;
}
.pillar-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}
h4 {
  color: #fff;
  margin-bottom: 8px;
}
.note-text {
  color: #aaa;
  font-style: italic;
}
@media (max-width: 768px) {
  .ecosystem-pillars {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>