<template>
  <div class="legal-header">
    <span class="badge">{{ badge }}</span>
    <h1>{{ title }}</h1>
    <p class="date">
      <span class="date-icon">📅</span>
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
      default: 'Confidentialité & Sécurité'
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
  margin-bottom: 2.5rem;
  position: relative;
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
  color: #0f0a1a;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 1rem;
  border-radius: 30px;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.legal-header h1 {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #facc15 0%, #fef08a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
}

.date {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(250, 204, 21, 0.1);
  padding: 0.5rem 1.25rem;
  border-radius: 40px;
  color: #facc15;
  font-size: 0.9rem;
  margin: 0;
}

.date-icon {
  font-size: 1rem;
}

.header-decoration {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #facc15, #fef08a, transparent);
  margin: 1.5rem auto 0;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .legal-header h1 {
    font-size: 1.8rem;
  }
}
</style>