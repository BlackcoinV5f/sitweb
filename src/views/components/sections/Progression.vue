<template>
  <section id="progression">
    <h2>
      <span class="section-number">{{ $t('Progression.sectionNumber') }}</span>
      {{ $t('Progression.sectionTitle') }}
    </h2>

    <!-- 5.1 Parcours de progression -->
    <h3>{{ $t('Progression.s51.title') }}</h3>
    <p>{{ $t('Progression.s51.intro') }}</p>
    <ul>
      <li
        v-for="(item, i) in toArray($tm('Progression.s51.listItems'))"
        :key="i"
        v-html="item"
      ></li>
    </ul>
    <p class="note-text" v-html="$t('Progression.s51.note')"></p>

    <!-- 5.2 Services premium -->
    <h3>{{ $t('Progression.s52.title') }}</h3>
    <p>{{ $t('Progression.s52.intro') }}</p>
    <div class="services-grid">
      <div
        class="service-card"
        v-for="(card, i) in toArray($tm('Progression.s52.cards'))"
        :key="i"
      >{{ card }}</div>
    </div>

    <!-- 5.3 Points internes -->
    <h3>{{ $t('Progression.s53.title') }}</h3>
    <div class="warning-box">
      <p>{{ $t('Progression.s53.intro') }}</p>
      <ul>
        <li
          v-for="(item, i) in toArray($tm('Progression.s53.listItems'))"
          :key="i"
          v-html="item"
        ></li>
      </ul>
      <p class="mt-2">{{ $t('Progression.s53.note') }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Progression',
  methods: {
    toArray(val) {
      if (Array.isArray(val)) return val
      if (val && typeof val === 'object') return Object.values(val)
      return []
    }
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
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}
.service-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.warning-box {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}
.mt-2 {
  margin-top: 20px;
}
@media (max-width: 768px) {
  .services-grid {
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