<template>
  <div class="contact-box">
    <p>{{ text || $t('PrivacyPolicy.contact.text') }}</p>
    <a :href="`mailto:${email}`" class="contact-link">
      ✉️ {{ email }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContactBox',
  props: {
    text: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.contact-box {
  text-align: center;
  background: rgba(250, 204, 21, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
}
.contact-box p {
  color: #cbd5e1;
  margin-bottom: 1rem;
}
.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
  color: #0f0a1a;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 40px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.contact-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(250, 204, 21, 0.3);
}
</style>