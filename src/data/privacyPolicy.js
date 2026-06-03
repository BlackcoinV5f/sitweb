export const privacyPolicyData = {
  badge: 'Confidentialité & Sécurité',
  title: 'Politique de Confidentialité',
  date: '2 Juin 2026',
  introText: 'Chez Liton Network, la protection de vos données personnelles est une priorité. Cette politique vous informe de la manière dont nous collectons, utilisons et protégeons vos informations.',
  
  sections: [
    {
      number: '01',
      title: 'Données collectées',
      intro: "Lors de l'utilisation de la plateforme, nous pouvons collecter les informations suivantes :",
      type: 'dataGrid',
      dataCards: [
        {
          icon: '📝',
          title: "Informations d'inscription",
          items: ['Nom et prénom', 'Adresse e-mail', 'Numéro de téléphone', 'Date de naissance']
        },
        {
          icon: '🆔',
          title: 'Vérification (KYC)',
          items: ["Pièce d'identité", 'Selfie de vérification', 'Justificatifs réglementaires']
        },
        {
          icon: '💻',
          title: 'Informations techniques',
          items: ['Adresse IP', "Type d'appareil", "Système d'exploitation", 'Navigateur utilisé', 'Journaux de connexion']
        }
      ]
    },
    {
      number: '02',
      title: "Utilisation des données",
      intro: 'Les données collectées sont utilisées exclusivement pour :',
      type: 'usageGrid',
      usageItems: [
        'Créer et gérer les comptes utilisateurs',
        'Fournir les services de Liton Network',
        "Vérifier l'identité des utilisateurs",
        'Prévenir les fraudes et abus',
        'Assurer la sécurité de la plateforme',
        'Respecter les obligations légales',
        'Répondre aux demandes du support',
        'Améliorer nos services'
      ]
    },
    {
      number: '03',
      title: "Vérification d'identité (KYC)",
      type: 'infoBox',
      infoBoxType: 'info',
      infoBoxIcon: '🔒',
      content: {
        paragraphs: [
          "Dans certaines situations, Liton Network peut exiger une vérification d'identité."
        ],
        strongText: 'Les documents fournis sont utilisés uniquement pour :',
        listItems: [
          "Confirmer l'identité de l'utilisateur",
          'Prévenir les activités frauduleuses',
          'Respecter les obligations légales et réglementaires',
          'Renforcer la sécurité de la plateforme'
        ]
      }
    },
    {
      number: '04',
      title: 'Conservation des données',
      intro: 'Les données personnelles sont conservées pendant la durée nécessaire à :',
      type: 'timeline',
      timelineItems: [
        'La fourniture des services',
        'Le respect des obligations légales',
        'La résolution des litiges',
        'La prévention des fraudes'
      ],
      note: 'Certaines informations peuvent être conservées après la fermeture du compte lorsque la loi l\'exige.'
    },
    {
      number: '05',
      title: 'Partage des données',
      type: 'warningBox',
      warningIcon: '🛡️',
      content: {
        strongText: 'Liton Network ne vend pas les données personnelles de ses utilisateurs.',
        paragraphs: ['Les informations peuvent toutefois être partagées :'],
        listItems: [
          'Avec des prestataires techniques participant au fonctionnement de la plateforme',
          'Avec des fournisseurs de services de vérification d\'identité',
          'Avec les autorités compétentes lorsque la loi l\'exige',
          'Pour protéger les droits, la sécurité ou l\'intégrité de Liton Network'
        ]
      }
    },
    {
      number: '06',
      title: 'Sécurité des données',
      type: 'securityBox',
      securityIcon: '🔐',
      content: {
        paragraphs: ['Nous mettons en œuvre des mesures de sécurité raisonnables afin de protéger les données personnelles contre :'],
        badges: ['❌ Accès non autorisé', '📢 Divulgation', '✏️ Modification', '🗑️ Destruction ou perte'],
        note: 'Toutefois, aucun système informatique ne peut garantir une sécurité absolue.'
      }
    },
    {
      number: '07',
      title: 'Cookies et technologies similaires',
      type: 'cookiesBox',
      content: {
        paragraphs: ['🍪 La plateforme peut utiliser des cookies ou technologies similaires afin de :'],
        listItems: [
          'Maintenir les sessions utilisateur',
          "Améliorer l'expérience utilisateur",
          'Analyser les performances de la plateforme',
          'Renforcer la sécurité'
        ],
        note: "L'utilisateur peut gérer certains cookies via les paramètres de son navigateur lorsque cela est applicable."
      }
    },
    {
      number: '08',
      title: "Droits des utilisateurs",
      type: 'rightsBox',
      content: {
        paragraphs: ["Sous réserve des lois applicables, l'utilisateur peut demander :"],
        rightsCards: [
          { emoji: '👁️', text: 'Accès aux données' },
          { emoji: '✏️', text: 'Correction des données' },
          { emoji: '🗑️', text: 'Suppression des données' },
          { emoji: '⏸️', text: 'Limitation du traitement' },
          { emoji: '📋', text: 'Portabilité des données' }
        ],
        note: 'Certaines demandes peuvent être refusées lorsque la loi impose la conservation des informations.'
      }
    },
    {
      number: '09',
      title: 'Transferts internationaux',
      type: 'transferBox',
      content: {
        paragraphs: [
          '🌍 Les données peuvent être stockées ou traitées dans différents pays selon les fournisseurs techniques utilisés par Liton Network.',
          'Nous prenons des mesures raisonnables pour assurer un niveau de protection approprié des données personnelles.'
        ]
      }
    },
    {
      number: '10',
      title: 'Modification de la politique',
      type: 'modificationBox',
      content: {
        paragraphs: [
          '📢 Liton Network peut modifier la présente Politique de Confidentialité à tout moment.',
          'Toute modification importante sera publiée sur la plateforme ou communiquée aux utilisateurs par un moyen approprié.'
        ]
      }
    },
    {
      number: '11',
      title: 'Contact',
      type: 'contact',
      email: 'support@litonnetwork.com'
    }
  ]
}