<template>
  <section id="introduction">
    <h2><span class="section-number">{{ $t('Introduction.sectionNumber') }}</span> {{ $t('Introduction.title') }}</h2>
    <p>{{ $t('Introduction.p1') }}</p>
    <p>
      <strong class="highlight">{{ $t('Introduction.p2Start') }}</strong>{{ $t('Introduction.p2Middle') }} <strong>{{ $t('Introduction.p2Highlight') }}</strong> {{ $t('Introduction.p2End') }}
    </p>
    <div class="note-box">
      <p>{{ $t('Introduction.noteStart') }} <strong>{{ $t('Introduction.noteHighlight') }}</strong> {{ $t('Introduction.noteEnd') }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Introduction'
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
.note-box {
  background: rgba(32, 128, 255, 0.1);
  border-left: 4px solid #2080ff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}
.highlight {
  color: #f5b301;
}
@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>