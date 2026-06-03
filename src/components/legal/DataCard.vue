<template>
  <div class="data-card">
    <div class="data-icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DataCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.data-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.25rem;
  transition: all 0.3s ease;
}

.data-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.data-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.data-card h3 {
  color: #facc15;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
}

.data-card ul {
  margin: 0;
  padding-left: 1.25rem;
}

.data-card li {
  color: #cbd5e1;
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 0.3rem;
}
</style>