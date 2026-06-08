<template>
  <section id="conclusion">

    <h2>
      <span class="section-number">11.</span>
      {{ $t('Conclusion.title') }}
    </h2>

    <div class="conclusion-content">

      <p>

        {{ $t('Conclusion.paragraph1.start') }}

        <strong>
          {{ $t('Conclusion.paragraph1.highlight') }}
        </strong>

        {{ $t('Conclusion.paragraph1.end') }}

      </p>

      <p>
        {{ $t('Conclusion.paragraph2') }}
      </p>

    </div>

    <div class="call-to-action">

      <h3>
        {{ $t('Conclusion.cta.title') }}
      </h3>

      <div class="cta-buttons">

        <button class="cta-btn primary">
          {{ $t('Conclusion.cta.communityButton') }}
        </button>

        <button class="cta-btn secondary">
          {{ $t('Conclusion.cta.platformButton') }}
        </button>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "Conclusion"
};
</script>

<style scoped>

section {
  margin-bottom: 60px;
  scroll-margin-top: 20px;
}

h2 {
  margin-top: 45px;
  margin-bottom: 25px;
  color: #f5b301;
  font-size: 1.8rem;
  border-bottom: 2px solid rgba(245, 179, 1, 0.3);
  padding-bottom: 10px;
}

.section-number {
  color: #f5b301;
  margin-right: 8px;
}

.conclusion-content {
  margin: 20px 0;
}

.call-to-action {
  text-align: center;
  margin-top: 50px;
  padding: 40px;
  background: rgba(245, 179, 1, 0.1);
  border-radius: 16px;
  border: 2px dashed #f5b301;
}

h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #dddddd;
  font-size: 1.3rem;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 25px;
}

.cta-btn {
  padding: 12px 30px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-btn.primary {
  background: #f5b301;
  color: #1f0f33;
}

.cta-btn.secondary {
  background: transparent;
  border: 2px solid #f5b301;
  color: #f5b301;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(245, 179, 1, 0.3);
}

@media (max-width: 768px) {

  .cta-buttons {
    flex-direction: column;
  }

}

@media (max-width: 480px) {

  h2 {
    font-size: 1.5rem;
  }

}

</style>