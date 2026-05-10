<template>
  <section class="info-alert">
    <div class="alert-content">
      <div class="alert-icon">{{ t("InfoAlert.icon") }}</div>
      <div class="alert-text">
        <strong>{{ t("InfoAlert.title") }}</strong>
        <p>{{ t("InfoAlert.text") }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<style scoped>
.info-alert {
  max-width: 800px;
  margin: 3rem auto;
  padding: 1.5rem 2rem;
  background: rgba(245, 179, 1, 0.1);
  border: 1px solid #f5b301;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.alert-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.alert-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.alert-text strong {
  color: #f5b301;
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.alert-text p {
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
}
</style>