<template>
  <section>
    <div class="section-header">
      <span class="section-number">{{ number }}</span>
      <h2>{{ title }}</h2>
    </div>
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
    }
  }
}
</script>

<style scoped>
section {
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 2rem;
}

section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.section-number {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .section-number {
    font-size: 1.25rem;
  }
  
  section h2 {
    font-size: 1.25rem;
  }
}
</style>