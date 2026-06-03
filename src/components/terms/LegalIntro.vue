<template>
  <div class="intro-card">
    <p><strong>{{ title }}</strong></p>
    <p>{{ description }}</p>
    <p v-if="highlight" class="highlight">{{ highlight }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LegalIntro',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    highlight: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.intro-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 2.5rem;
  margin: 0;
}

.intro-card p {
  margin: 0 0 1rem 0;
  font-size: 1.05rem;
  line-height: 1.6;
}

.intro-card p:last-child {
  margin-bottom: 0;
}

.intro-card strong {
  font-weight: 700;
}

.intro-card .highlight {
  background: rgba(255, 255, 255, 0.15);
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-weight: 500;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .intro-card {
    padding: 1.5rem;
  }
}
</style>