<template>
  <section id="token">
    <h2>
      <span class="section-number">{{ $t('Token.sectionNumber') }}</span>
      {{ $t('Token.sectionTitle') }}
    </h2>

    <!-- 6.1 Rôle du token -->
    <div class="token-info-card">
      <h3>{{ $t('Token.s61.title') }}</h3>
      <p v-html="$t('Token.s61.intro')"></p>
      <ul>
        <li
          v-for="(item, i) in toArray($tm('Token.s61.listItems'))"
          :key="i"
        >{{ item }}</li>
      </ul>
      <div class="token-warning">
        <p v-html="$t('Token.s61.warning')"></p>
      </div>
    </div>

    <!-- 6.2 Utilisation du token -->
    <h3>{{ $t('Token.s62.title') }}</h3>
    <p>{{ $t('Token.s62.text') }}</p>
  </section>
</template>

<script>
export default {
  name: 'Token',
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
.token-info-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 12px;
  margin: 20px 0;
}
ul {
  margin: 15px 0;
  padding-left: 20px;
}
li {
  margin-bottom: 8px;
}
.token-warning {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}
.keyword {
  color: #4cd964;
  font-weight: bold;
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