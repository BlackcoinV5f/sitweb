<template>
  <section>
    <div class="section-header">
      <span class="section-number">{{ number }}</span>
      <h2>{{ title }}</h2>
    </div>
    <p v-if="intro" class="section-intro">{{ intro }}</p>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'LegalSection',
  props: {
    number: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    intro: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
section {
  background: rgba(15, 10, 26, 0.5);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(250, 204, 21, 0.1);
  transition: all 0.3s ease;
}

section:hover {
  border-color: rgba(250, 204, 21, 0.3);
  background: rgba(15, 10, 26, 0.7);
}

.section-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(250, 204, 21, 0.2);
  padding-bottom: 0.75rem;
}

.section-number {
  font-size: 1.5rem;
  font-weight: 800;
  color: rgba(250, 204, 21, 0.4);
  letter-spacing: -0.02em;
}

section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #facc15;
  margin: 0;
  letter-spacing: -0.01em;
}

.section-intro {
  color: #94a3b8;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    gap: 0.25rem;
  }

  .section-number {
    font-size: 1rem;
  }

  section h2 {
    font-size: 1.25rem;
  }
}
</style>