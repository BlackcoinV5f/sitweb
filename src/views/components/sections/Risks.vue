<template>
  <section id="risques">

    <h2>
      <span class="section-number">10.</span>
      {{ $t('Risks.title') }}
    </h2>

    <p>
      {{ $t('Risks.description') }}
    </p>

    <div class="risks-grid">

      <div class="risk-card">

        <h4>
          {{ $t('Risks.items.regulatory.title') }}
        </h4>

        <p>
          {{ $t('Risks.items.regulatory.text') }}
        </p>

      </div>

      <div class="risk-card">

        <h4>
          {{ $t('Risks.items.technology.title') }}
        </h4>

        <p>
          {{ $t('Risks.items.technology.text') }}
        </p>

      </div>

      <div class="risk-card">

        <h4>
          {{ $t('Risks.items.project.title') }}
        </h4>

        <p>
          {{ $t('Risks.items.project.text') }}
        </p>

      </div>

      <div class="risk-card">

        <h4>
          {{ $t('Risks.items.adoption.title') }}
        </h4>

        <p>
          {{ $t('Risks.items.adoption.text') }}
        </p>

      </div>

      <div class="risk-card">

        <h4>
          {{ $t('Risks.items.listing.title') }}
        </h4>

        <p>
          {{ $t('Risks.items.listing.text') }}
        </p>

      </div>

    </div>

    <div class="warning-banner">

      <strong>
        {{ $t('Risks.warning') }}
      </strong>

    </div>

  </section>
</template>

<script>
export default {
  name: "Risks"
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

.risks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.risk-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

h4 {
  color: #ffffff;
  margin-bottom: 8px;
}

.warning-banner {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

@media (max-width: 768px) {

  .risks-grid {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 480px) {

  h2 {
    font-size: 1.5rem;
  }

}

</style>