<template>
  <section id="cotation">

    <h2>
      <span class="section-number">8.</span>
      {{ $t('Cotation.title') }}
    </h2>

    <div class="warning-box">

      <p>
        {{ $t('Cotation.descriptionStart') }}
        <strong>
          {{ $t('Cotation.descriptionStrong') }}
        </strong>
      </p>

      <ul>

        <li>
          {{ $t('Cotation.items.listing') }}
        </li>

        <li>
          {{ $t('Cotation.items.liquidity') }}
        </li>

        <li>
          {{ $t('Cotation.items.timeline') }}
        </li>

      </ul>

      <p class="mt-2">
        {{ $t('Cotation.footer') }}
      </p>

    </div>

  </section>
</template>

<script>
export default {
  name: "Cotation"
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

.warning-box {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

ul {
  margin: 15px 0;
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.mt-2 {
  margin-top: 20px;
}

@media (max-width: 480px) {

  h2 {
    font-size: 1.5rem;
  }

}

</style>