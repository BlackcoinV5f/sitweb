<template>
  <div class="legal-page">
    <div class="container">
      <LegalHeader 
        :badge="privacyPolicyData.badge"
        :title="privacyPolicyData.title"
        :date="privacyPolicyData.date"
      />

      <div class="intro-card">
        <p>
          <strong>Liton Network</strong>, {{ privacyPolicyData.introText }}
        </p>
      </div>

      <div class="sections-wrapper">
        <LegalSection 
          v-for="section in privacyPolicyData.sections" 
          :key="section.number"
          :number="section.number"
          :title="section.title"
          :intro="section.intro"
        >
          <!-- Data Grid Section -->
          <div v-if="section.type === 'dataGrid'">
            <div class="data-grid">
              <DataCard 
                v-for="card in section.dataCards"
                :key="card.title"
                :icon="card.icon"
                :title="card.title"
                :items="card.items"
              />
            </div>
          </div>

          <!-- Usage Grid Section -->
          <div v-else-if="section.type === 'usageGrid'">
            <div class="usage-grid">
              <UsageItem 
                v-for="item in section.usageItems"
                :key="item"
                :text="item"
              />
            </div>
          </div>

          <!-- Info Box Section -->
          <div v-else-if="section.type === 'infoBox'">
            <InfoBox :type="section.infoBoxType" :icon="section.infoBoxIcon">
              <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
              <p><strong>{{ section.content.strongText }}</strong></p>
              <ul>
                <li v-for="item in section.content.listItems" :key="item">{{ item }}</li>
              </ul>
            </InfoBox>
          </div>

          <!-- Timeline Section -->
          <div v-else-if="section.type === 'timeline'">
            <div class="timeline-box">
              <div class="timeline-item" v-for="item in section.timelineItems" :key="item">
                <span class="timeline-dot"></span>
                <span>{{ item }}</span>
              </div>
            </div>
            <p class="note" v-if="section.note">
              <span class="note-icon">ℹ️</span>
              {{ section.note }}
            </p>
          </div>

          <!-- Warning Box Section -->
          <div v-else-if="section.type === 'warningBox'">
            <InfoBox type="warning" :icon="section.warningIcon">
              <p><strong>{{ section.content.strongText }}</strong></p>
              <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
              <ul>
                <li v-for="item in section.content.listItems" :key="item">{{ item }}</li>
              </ul>
            </InfoBox>
          </div>

          <!-- Security Box Section -->
          <div v-else-if="section.type === 'securityBox'">
            <InfoBox type="security" :icon="section.securityIcon">
              <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
              <div class="security-badges">
                <span class="badge-item" v-for="badge in section.content.badges" :key="badge">{{ badge }}</span>
              </div>
              <p class="security-note">{{ section.content.note }}</p>
            </InfoBox>
          </div>

          <!-- Rights Box Section -->
          <div v-else-if="section.type === 'rightsBox'">
            <InfoBox type="rights" icon="📋">
              <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
              <div class="rights-grid">
                <div class="right-card" v-for="card in section.content.rightsCards" :key="card.text">
                  <span class="right-emoji">{{ card.emoji }}</span>
                  <span>{{ card.text }}</span>
                </div>
              </div>
              <p class="note" v-if="section.content.note">
                <span class="note-icon">ℹ️</span>
                {{ section.content.note }}
              </p>
            </InfoBox>
          </div>

          <!-- Cookies, Transfer, Modification Boxes -->
          <div v-else-if="['cookiesBox', 'transferBox', 'modificationBox'].includes(section.type)">
            <InfoBox :type="section.type.replace('Box', '')" icon="ℹ️">
              <p v-for="para in section.content.paragraphs" :key="para">{{ para }}</p>
              <ul v-if="section.content.listItems">
                <li v-for="item in section.content.listItems" :key="item">{{ item }}</li>
              </ul>
              <p class="note" v-if="section.content.note">
                <span class="note-icon">ℹ️</span>
                {{ section.content.note }}
              </p>
            </InfoBox>
          </div>

          <!-- Contact Section -->
          <div v-else-if="section.type === 'contact'">
            <ContactBox :email="section.email" />
          </div>
        </LegalSection>
      </div>
    </div>
  </div>
</template>

<script>
import LegalHeader from '@/components/legal/LegalHeader.vue'
import LegalSection from '@/components/legal/LegalSection.vue'
import DataCard from '@/components/legal/DataCard.vue'
import UsageItem from '@/components/legal/UsageItem.vue'
import InfoBox from '@/components/legal/InfoBox.vue'
import ContactBox from '@/components/legal/ContactBox.vue'
import { privacyPolicyData } from '@/data/privacyPolicy.js'

export default {
  name: 'PrivacyPolicy',
  components: {
    LegalHeader,
    LegalSection,
    DataCard,
    UsageItem,
    InfoBox,
    ContactBox
  },
  data() {
    return {
      privacyPolicyData
    }
  }
}
</script>

<style scoped>
@import '@/styles/legal.css';
</style>