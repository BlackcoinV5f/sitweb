<template>
  <div class="contact-box">
    <p>{{ text }}</p>
    <a :href="`mailto:${email}`" class="contact-link">
      ✉️ {{ email }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'LegalContact',
  props: {
    text: {
      type: String,
      default: 'Pour toute question concernant Liton Network :'
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
  background: #f1f5f9;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 1rem;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #4f46e5;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.contact-link:hover {
  background: white;
  color: #4338ca;
  text-decoration: underline;
}
</style>