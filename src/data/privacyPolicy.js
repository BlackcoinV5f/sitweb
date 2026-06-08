// privacyPolicy.js
// Utilise tm() pour les tableaux, t() pour les strings

import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

// Helper : convertit le résultat de tm() en vrai Array JS
function toArray(val) {
  if (Array.isArray(val)) return val
  if (val && typeof val === 'object') return Object.values(val)
  return []
}

export function usePrivacyPolicyData() {
  const { t, tm } = useI18n()

  const privacyPolicyData = computed(() => ({
    badge:     t('PrivacyPolicy.badge'),
    title:     t('PrivacyPolicy.title'),
    date:      t('PrivacyPolicy.date'),
    introText: t('PrivacyPolicy.introText'),

    sections: [
      // ── 01 ── Données collectées
      {
        number: t('PrivacyPolicy.sections.s01.number'),
        title:  t('PrivacyPolicy.sections.s01.title'),
        intro:  t('PrivacyPolicy.sections.s01.intro'),
        type: 'dataGrid',
        dataCards: [
          {
            icon:  '📝',
            title: t('PrivacyPolicy.sections.s01.cards.inscription.title'),
            items: toArray(tm('PrivacyPolicy.sections.s01.cards.inscription.items'))
          },
          {
            icon:  '🆔',
            title: t('PrivacyPolicy.sections.s01.cards.kyc.title'),
            items: toArray(tm('PrivacyPolicy.sections.s01.cards.kyc.items'))
          },
          {
            icon:  '💻',
            title: t('PrivacyPolicy.sections.s01.cards.tech.title'),
            items: toArray(tm('PrivacyPolicy.sections.s01.cards.tech.items'))
          }
        ]
      },

      // ── 02 ── Utilisation des données
      {
        number:     t('PrivacyPolicy.sections.s02.number'),
        title:      t('PrivacyPolicy.sections.s02.title'),
        intro:      t('PrivacyPolicy.sections.s02.intro'),
        type:       'usageGrid',
        usageItems: toArray(tm('PrivacyPolicy.sections.s02.usageItems'))
      },

      // ── 03 ── KYC
      {
        number:      t('PrivacyPolicy.sections.s03.number'),
        title:       t('PrivacyPolicy.sections.s03.title'),
        type:        'infoBox',
        infoBoxType: 'info',
        infoBoxIcon: '🔒',
        content: {
          paragraphs: toArray(tm('PrivacyPolicy.sections.s03.paragraphs')),
          strongText: t('PrivacyPolicy.sections.s03.strongText'),
          listItems:  toArray(tm('PrivacyPolicy.sections.s03.listItems'))
        }
      },

      // ── 04 ── Conservation
      {
        number:        t('PrivacyPolicy.sections.s04.number'),
        title:         t('PrivacyPolicy.sections.s04.title'),
        intro:         t('PrivacyPolicy.sections.s04.intro'),
        type:          'timeline',
        timelineItems: toArray(tm('PrivacyPolicy.sections.s04.timelineItems')),
        note:          t('PrivacyPolicy.sections.s04.note')
      },

      // ── 05 ── Partage
      {
        number:      t('PrivacyPolicy.sections.s05.number'),
        title:       t('PrivacyPolicy.sections.s05.title'),
        type:        'warningBox',
        warningIcon: '🛡️',
        content: {
          strongText: t('PrivacyPolicy.sections.s05.strongText'),
          paragraphs: toArray(tm('PrivacyPolicy.sections.s05.paragraphs')),
          listItems:  toArray(tm('PrivacyPolicy.sections.s05.listItems'))
        }
      },

      // ── 06 ── Sécurité
      {
        number:       t('PrivacyPolicy.sections.s06.number'),
        title:        t('PrivacyPolicy.sections.s06.title'),
        type:         'securityBox',
        securityIcon: '🔐',
        content: {
          paragraphs: toArray(tm('PrivacyPolicy.sections.s06.paragraphs')),
          badges:     toArray(tm('PrivacyPolicy.sections.s06.badges')),
          note:       t('PrivacyPolicy.sections.s06.note')
        }
      },

      // ── 07 ── Cookies
      {
        number: t('PrivacyPolicy.sections.s07.number'),
        title:  t('PrivacyPolicy.sections.s07.title'),
        type:   'cookiesBox',
        content: {
          paragraphs: toArray(tm('PrivacyPolicy.sections.s07.paragraphs')),
          listItems:  toArray(tm('PrivacyPolicy.sections.s07.listItems')),
          note:       t('PrivacyPolicy.sections.s07.note')
        }
      },

      // ── 08 ── Droits
      {
        number: t('PrivacyPolicy.sections.s08.number'),
        title:  t('PrivacyPolicy.sections.s08.title'),
        type:   'rightsBox',
        content: {
          paragraphs:  toArray(tm('PrivacyPolicy.sections.s08.paragraphs')),
          rightsCards: toArray(tm('PrivacyPolicy.sections.s08.rightsCards')),
          note:        t('PrivacyPolicy.sections.s08.note')
        }
      },

      // ── 09 ── Transferts
      {
        number: t('PrivacyPolicy.sections.s09.number'),
        title:  t('PrivacyPolicy.sections.s09.title'),
        type:   'transferBox',
        content: {
          paragraphs: toArray(tm('PrivacyPolicy.sections.s09.paragraphs'))
        }
      },

      // ── 10 ── Modification
      {
        number: t('PrivacyPolicy.sections.s10.number'),
        title:  t('PrivacyPolicy.sections.s10.title'),
        type:   'modificationBox',
        content: {
          paragraphs: toArray(tm('PrivacyPolicy.sections.s10.paragraphs'))
        }
      },

      // ── 11 ── Contact
      {
        number: t('PrivacyPolicy.sections.s11.number'),
        title:  t('PrivacyPolicy.sections.s11.title'),
        type:   'contact',
        email:  'support@litonnetwork.com'
      }
    ]
  }))

  return { privacyPolicyData }
}