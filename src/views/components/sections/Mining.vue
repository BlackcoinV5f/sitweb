<template>
  <section id="minage">
    <h2>
      <span class="section-number">{{ $t('Mining.sectionNumber') }}</span>
      {{ $t('Mining.sectionTitle') }}
    </h2>

    <!-- 4.1 Principe général -->
    <h3>{{ $t('Mining.s41.title') }}</h3>
    <p>{{ $t('Mining.s41.intro') }}</p>
    <ul>
      <li
        v-for="(item, index) in $tm('Mining.s41.listItems')"
        :key="index"
        v-html="item"
      ></li>
    </ul>
    <p class="note-text" v-html="$t('Mining.s41.note')"></p>

    <!-- 4.2 Nature de la participation -->
    <h3>{{ $t('Mining.s42.title') }}</h3>
    <p>{{ $t('Mining.s42.intro') }}</p>
    <div class="participation-grid">
      <div
        class="participation-card"
        v-for="(card, index) in cards"
        :key="index"
      >
        <div class="card-icon">{{ card.icon }}</div>
        <p>{{ card.text }}</p>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="disclaimer-box">
      <h4>{{ $t('Mining.disclaimer.title') }}</h4>
      <p v-html="$t('Mining.disclaimer.text')"></p>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  name: 'Mining',
  setup() {
    const { tm } = useI18n()

    const cards = computed(() => {
      const raw = tm('Mining.s42.cards')
      if (Array.isArray(raw)) return raw
      if (raw && typeof raw === 'object') return Object.values(raw)
      return []
    })

    return { cards }
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
h3 {
  margin-top: 35px;
  margin-bottom: 15px;
  color: #ddd;
  font-size: 1.3rem;
}
ul {
  margin: 15px 0;
  padding-left: 20px;
}
li {
  margin-bottom: 8px;
}
.note-text {
  color: #aaa;
  font-style: italic;
  margin-top: 15px;
}
.participation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}
.participation-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.card-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}
.disclaimer-box {
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid rgba(255, 59, 48, 0.3);
  padding: 20px;
  border-radius: 8px;
  margin: 25px 0;
}
.disclaimer-box h4 {
  color: #ff3b30;
  margin-top: 0;
  margin-bottom: 10px;
}
@media (max-width: 768px) {
  .participation-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.2rem;
  }
}
</style>