<template>
  <div :class="boxClass">
    <div class="box-icon">{{ icon }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    type: {
      type: String,
      default: 'info', // info, warning, security, rights
      validator: (value) => ['info', 'warning', 'security', 'rights', 'cookies', 'transfer', 'modification'].includes(value)
    },
    icon: {
      type: String,
      default: 'ℹ️'
    }
  },
  computed: {
    boxClass() {
      return `info-box ${this.type}-box`
    }
  }
}
</script>

<style scoped>
.info-box {
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
}

.box-icon {
  font-size: 1.5rem;
}

.info-box p {
  margin: 0 0 0.5rem 0;
  color: #cbd5e1;
}

.info-box ul {
  margin: 0.5rem 0 0 0;
  padding-left: 1.25rem;
}

.info-box li {
  color: #94a3b8;
  margin-bottom: 0.25rem;
}

/* Type-specific styles */
.info-box {
  background: rgba(59, 130, 246, 0.1);
  border-left: 3px solid #3b82f6;
}

.warning-box {
  background: rgba(250, 204, 21, 0.05);
  border: 1px solid rgba(250, 204, 21, 0.2);
}

.security-box {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.rights-box {
  background: rgba(168, 85, 247, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.cookies-box,
.transfer-box,
.modification-box {
  background: rgba(255, 255, 255, 0.03);
  border-left: none;
}

@media (max-width: 768px) {
  .info-box {
    flex-direction: column;
  }
}
</style>