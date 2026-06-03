<template>
  <div class="legal-header">
    <span class="badge">{{ badge }}</span>
    <h1>{{ title }}</h1>
    <p class="last-updated">
      Dernière mise à jour : <strong>{{ date }}</strong>
    </p>
    <div class="header-decoration"></div>
  </div>
</template>

<script>
export default {
  name: 'LegalHeader',
  props: {
    badge: {
      type: String,
      default: 'Document légal'
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.legal-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.legal-header h1 {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
}

.last-updated {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
}

.last-updated strong {
  color: #475569;
  font-weight: 600;
}

.header-decoration {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  margin: 1.5rem auto 0;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .legal-header h1 {
    font-size: 2rem;
  }
}
</style>