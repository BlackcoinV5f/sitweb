<template>
  <div class="legal-page">
    <LegalHeader 
      :badge="$t('TermsOfUse.header.badge')"
      :title="$t('TermsOfUse.header.title')"
      :date="$t('TermsOfUse.header.date')"
    />

    <div class="legal-content">
      <LegalIntro 
        :title="$t('TermsOfUse.intro.title')"
        :description="$t('TermsOfUse.intro.description')"
        :highlight="$t('TermsOfUse.intro.highlight')"
      />

      <div class="sections-grid">

        <!-- ===== SECTIONS STANDARD ===== -->
        <LegalSection
          v-for="key in standardSections"
          :key="key"
          :number="$t(`TermsOfUse.sections.${key}.number`)"
          :title="$t(`TermsOfUse.sections.${key}.title`)"
        >
          <p v-for="(para, i) in tm(`TermsOfUse.sections.${key}.paragraphs`)" :key="i">{{ para }}</p>
          <ul v-if="te(`TermsOfUse.sections.${key}.listItems`)">
            <li v-for="(item, i) in tm(`TermsOfUse.sections.${key}.listItems`)" :key="i">{{ item }}</li>
          </ul>
          <LegalBox v-if="te(`TermsOfUse.sections.${key}.note`)" type="note">
            {{ $t(`TermsOfUse.sections.${key}.note`) }}
          </LegalBox>
          <LegalBox v-if="te(`TermsOfUse.sections.${key}.important`)" type="important">
            {{ $t(`TermsOfUse.sections.${key}.important`) }}
          </LegalBox>
        </LegalSection>

        <!-- ===== SECTION KYC (s03) ===== -->
        <LegalSection
          :number="$t('TermsOfUse.sections.s03.number')"
          :title="$t('TermsOfUse.sections.s03.title')"
        >
          <p v-for="(para, i) in tm('TermsOfUse.sections.s03.paragraphs')" :key="i">{{ para }}</p>
          <ul>
            <li v-for="(item, i) in tm('TermsOfUse.sections.s03.listItems')" :key="i">{{ item }}</li>
          </ul>
          <LegalBox type="warning" icon="⚠️" :title="$t('TermsOfUse.sections.s03.warning.title')">
            <ul>
              <li v-for="(item, i) in tm('TermsOfUse.sections.s03.warning.items')" :key="i">{{ item }}</li>
            </ul>
          </LegalBox>
        </LegalSection>

        <!-- ===== SECTION WALLET (s04) ===== -->
        <LegalSection
          :number="$t('TermsOfUse.sections.s04.number')"
          :title="$t('TermsOfUse.sections.s04.title')"
        >
          <p v-for="(para, i) in tm('TermsOfUse.sections.s04.paragraphs')" :key="i">{{ para }}</p>
          <ul>
            <li v-for="(item, i) in tm('TermsOfUse.sections.s04.listItems')" :key="i">{{ item }}</li>
          </ul>
          <LegalBox type="info" icon="🔒" :title="$t('TermsOfUse.sections.s04.infoBox.title')">
            <ul>
              <li v-for="(item, i) in tm('TermsOfUse.sections.s04.infoBox.items')" :key="i">{{ item }}</li>
            </ul>
          </LegalBox>
          <LegalBox type="warning" icon="📌" :title="$t('TermsOfUse.sections.s04.warningBox.title')">
            <ul>
              <li v-for="(item, i) in tm('TermsOfUse.sections.s04.warningBox.items')" :key="i">{{ item }}</li>
            </ul>
          </LegalBox>
          <LegalBox type="note">
            {{ $t('TermsOfUse.sections.s04.note') }}
          </LegalBox>
        </LegalSection>

        <!-- ===== SECTION PROHIBITIONS (s05) ===== -->
        <LegalSection
          :number="$t('TermsOfUse.sections.s05.number')"
          :title="$t('TermsOfUse.sections.s05.title')"
        >
          <p v-for="(para, i) in tm('TermsOfUse.sections.s05.paragraphs')" :key="i">{{ para }}</p>
          <ul class="danger-list">
            <li v-for="(item, i) in tm('TermsOfUse.sections.s05.dangerList')" :key="i">{{ item }}</li>
          </ul>
          <LegalBox type="danger" icon="🚫" :title="$t('TermsOfUse.sections.s05.warning.title')">
            <ul>
              <li v-for="(item, i) in tm('TermsOfUse.sections.s05.warning.items')" :key="i">{{ item }}</li>
            </ul>
          </LegalBox>
        </LegalSection>

        <!-- ===== SECTION RISQUES FINANCIERS (s07) ===== -->
        <LegalSection
          :number="$t('TermsOfUse.sections.s07.number')"
          :title="$t('TermsOfUse.sections.s07.title')"
        >
          <p v-for="(para, i) in tm('TermsOfUse.sections.s07.paragraphs')" :key="i">{{ para }}</p>
          <ul>
            <li v-for="(item, i) in tm('TermsOfUse.sections.s07.listItems')" :key="i">{{ item }}</li>
          </ul>
          <LegalBox type="warning" icon="📊" :title="$t('TermsOfUse.sections.s07.warningBox.title')">
            <p style="margin-top: 8px;">{{ $t('TermsOfUse.sections.s07.warningBox.note') }}</p>
          </LegalBox>
        </LegalSection>

        <!-- ===== SECTION CONTACT (s15) ===== -->
        <LegalSection
          :number="$t('TermsOfUse.sections.s15.number')"
          :title="$t('TermsOfUse.sections.s15.title')"
        >
          <LegalContact 
            :text="$t('TermsOfUse.sections.s15.text')"
            :email="$t('TermsOfUse.sections.s15.email')"
          />
        </LegalSection>

      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import LegalHeader from '@/components/terms/LegalHeader.vue'
import LegalIntro from '@/components/terms/LegalIntro.vue'
import LegalSection from '@/components/terms/LegalSection.vue'
import LegalBox from '@/components/terms/LegalBox.vue'
import LegalContact from '@/components/terms/LegalContact.vue'

export default {
  name: 'TermsOfUse',
  components: {
    LegalHeader,
    LegalIntro,
    LegalSection,
    LegalBox,
    LegalContact
  },
  setup() {
    const { t, tm, te } = useI18n()
    return { t, tm, te }
  },
  data() {
    return {
      // Sections au layout "standard" — rendues dynamiquement
      // (les sections spéciales s03, s04, s05, s07, s15 sont gérées séparément)
      standardSections: ['s01', 's02', 's06', 's08', 's09', 's10', 's11', 's12', 's13', 's14']
    }
  }
}
</script>

<style scoped>
@import '@/styles/terms.css';
</style>