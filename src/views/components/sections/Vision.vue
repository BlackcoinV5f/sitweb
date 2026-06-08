<template>
  <section id="vision">
    <h2><span class="section-number">{{ $t('Vision.sectionNumber') }}</span> {{ $t('Vision.title') }}</h2>
    <p>
      {{ $t('Vision.p1Start') }} <strong class="keyword">{{ $t('Vision.p1Keyword') }}</strong>. 
      {{ $t('Vision.p1End') }}
    </p>
    <ul class="objectives-list">
      <li v-for="(obj, i) in tm('Vision.objectives')" :key="i">
        ✅ <span>{{ obj }}</span>
      </li>
    </ul>
    <div class="warning-box">
      <p>
        <strong>{{ $t('Vision.warningBold') }}</strong> {{ $t('Vision.warningEnd') }}
      </p>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Vision',
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
.objectives-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}
.objectives-list li {
  padding: 12px 15px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid #f5b301;
}
.warning-box {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}
.keyword {
  color: #4cd964;
  font-weight: bold;
}
@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>