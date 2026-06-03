<template>
  <div :class="boxClass">
    <span :class="iconClass">{{ icon }}</span>
    <div>
      <strong v-if="title">{{ title }}</strong>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LegalBox',
  props: {
    type: {
      type: String,
      default: 'note', // note, important, warning, info, danger
      validator: (value) => ['note', 'important', 'warning', 'info', 'danger'].includes(value)
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    boxClass() {
      return `${this.type}-box`
    },
    iconClass() {
      return this.icon ? `${this.type}-icon` : ''
    }
  }
}
</script>

<style scoped>
/* Note Box */
.note-box {
  background: #f8fafc;
  padding: 0.75rem 1rem;
  border-left: 3px solid #94a3b8;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #475569;
  margin-top: 1rem;
}

/* Important Box */
.important-box {
  background: #fef3c7;
  padding: 0.75rem 1rem;
  border-left: 3px solid #f59e0b;
  border-radius: 8px;
  font-weight: 500;
  color: #92400e;
  margin-top: 1rem;
}

/* Warning Box */
.warning-box {
  background: #fef2f2;
  border-left: 4px solid #ef4444;
  padding: 1rem;
  border-radius: 12px;
  margin: 1rem 0;
  display: flex;
  gap: 0.75rem;
}

.warning-box strong {
  color: #991b1b;
  display: block;
  margin-bottom: 0.5rem;
}

.warning-box ul {
  margin: 0;
  padding-left: 1.25rem;
}

.warning-box li {
  color: #7f1d1d;
  margin-bottom: 0.25rem;
}

/* Info Box */
.info-box {
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  border-radius: 12px;
  margin: 1rem 0;
  display: flex;
  gap: 0.75rem;
}

.info-box strong {
  color: #1e40af;
  display: block;
  margin-bottom: 0.5rem;
}

.info-box ul {
  margin: 0;
  padding-left: 1.25rem;
}

.info-box li {
  color: #1e3a8a;
  margin-bottom: 0.25rem;
}

/* Danger Box */
.danger-box {
  background: #fef2f2;
  border-left: 4px solid #dc2626;
  padding: 1rem;
  border-radius: 12px;
  margin: 1rem 0;
  display: flex;
  gap: 0.75rem;
}

.danger-box strong {
  color: #991b1b;
  display: block;
  margin-bottom: 0.5rem;
}

/* Icons */
.warning-icon, .info-icon, .danger-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .warning-box, .info-box, .danger-box {
    flex-direction: column;
  }
}
</style>