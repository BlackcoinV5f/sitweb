<template>
  <div class="usage-item">
    <span class="check-icon">✓</span>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'UsageItem',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.usage-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  color: #cbd5e1;
  font-size: 0.9rem;
}

.check-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: rgba(250, 204, 21, 0.2);
  color: #facc15;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: bold;
}
</style>