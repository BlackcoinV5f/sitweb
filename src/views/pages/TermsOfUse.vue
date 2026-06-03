<template>
  <div class="legal-page">
    <LegalHeader 
      :badge="termsData.header.badge"
      :title="termsData.header.title"
      :date="termsData.header.date"
    />

    <div class="legal-content">
      <LegalIntro 
        :title="termsData.intro.title"
        :description="termsData.intro.description"
        :highlight="termsData.intro.highlight"
      />

      <div class="sections-grid">
        <LegalSection 
          v-for="section in termsData.sections" 
          :key="section.number"
          :number="section.number"
          :title="section.title"
        >
          <!-- Section standard avec paragraphes et listes -->
          <template v-if="section.type === 'standard'">
            <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
            <ul v-if="section.content.listItems">
              <li v-for="item in section.content.listItems" :key="item">{{ item }}</li>
            </ul>
            <LegalBox v-if="section.content.note" type="note">
              {{ section.content.note }}
            </LegalBox>
            <LegalBox v-if="section.content.important" type="important">
              {{ section.content.important }}
            </LegalBox>
          </template>

          <!-- Section KYC avec warning box -->
          <template v-else-if="section.type === 'kyc'">
            <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
            <ul>
              <li v-for="item in section.content.listItems" :key="item">{{ item }}</li>
            </ul>
            <LegalBox v-if="section.content.warning" type="warning" icon="⚠️" :title="section.content.warning.title">
              <ul>
                <li v-for="item in section.content.warning.items" :key="item">{{ item }}</li>
              </ul>
            </LegalBox>
          </template>

          <!-- Section Wallet avec info box et warning box -->
          <template v-else-if="section.type === 'wallet'">
            <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
            <ul>
              <li v-for="item in section.content.listItems" :key="item">{{ item }}</li>
            </ul>
            <LegalBox v-if="section.content.infoBox" type="info" icon="🔒" :title="section.content.infoBox.title">
              <ul>
                <li v-for="item in section.content.infoBox.items" :key="item">{{ item }}</li>
              </ul>
            </LegalBox>
            <LegalBox v-if="section.content.warningBox" type="warning" icon="📌" :title="section.content.warningBox.title">
              <ul>
                <li v-for="item in section.content.warningBox.items" :key="item">{{ item }}</li>
              </ul>
            </LegalBox>
            <LegalBox v-if="section.content.note" type="note">
              {{ section.content.note }}
            </LegalBox>
          </template>

          <!-- Section Prohibitions avec danger list -->
          <template v-else-if="section.type === 'prohibitions'">
            <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
            <ul class="danger-list">
              <li v-for="item in section.content.dangerList" :key="item">{{ item }}</li>
            </ul>
            <LegalBox v-if="section.content.warning" type="danger" icon="🚫" :title="section.content.warning.title">
              <ul>
                <li v-for="item in section.content.warning.items" :key="item">{{ item }}</li>
              </ul>
            </LegalBox>
          </template>

          <!-- Section Risques Financiers -->
          <template v-else-if="section.type === 'financial'">
            <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
            <ul>
              <li v-for="item in section.content.listItems" :key="item">{{ item }}</li>
            </ul>
            <LegalBox v-if="section.content.warningBox" type="warning" icon="📊" :title="section.content.warningBox.title">
              <p style="margin-top: 8px;">{{ section.content.warningBox.note }}</p>
            </LegalBox>
          </template>

          <!-- Section Contact -->
          <template v-else-if="section.type === 'contact'">
            <LegalContact 
              :text="section.content.text"
              :email="section.content.email"
            />
          </template>
        </LegalSection>
      </div>
    </div>
  </div>
</template>

<script>
import LegalHeader from '@/components/terms/LegalHeader.vue'
import LegalIntro from '@/components/terms/LegalIntro.vue'
import LegalSection from '@/components/terms/LegalSection.vue'
import LegalBox from '@/components/terms/LegalBox.vue'
import LegalContact from '@/components/terms/LegalContact.vue'
import { termsData } from '@/data/terms.js'

export default {
  name: 'TermsOfUse',
  components: {
    LegalHeader,
    LegalIntro,
    LegalSection,
    LegalBox,
    LegalContact
  },
  data() {
    return {
      termsData
    }
  }
}
</script>

<style scoped>
@import '@/styles/terms.css';
</style>