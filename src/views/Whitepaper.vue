<template>
  <main class="whitepaper-wrapper">
    <!-- Table des matières flottante -->
    <nav class="table-of-contents">
      <div class="toc-container">
        <h3>Sommaire</h3>
        <ul>
          <li v-for="section in sections" :key="section.id">
            <a :href="'#' + section.id" @click="scrollToSection(section.id)">
              {{ section.title }}
            </a>
          </li>
        </ul>
        <div class="toc-footer">
          <button @click="downloadPDF" class="download-btn">
            📄 Télécharger en PDF
          </button>
        </div>
      </div>
    </nav>

    <article class="whitepaper-container">
      <header class="document-header">
        <h1>LIVRE BLANC BLACKCOIN (BKC)</h1>
        <p class="document-subtitle">Plateforme d'éducation et d'accès aux services financiers numériques</p>
        <div class="warning-banner">
          ⚠️ <strong>Document informatif</strong> — Le token BKC est un outil utilitaire, 
          ne constitue pas un produit d'investissement et ne garantit aucun rendement.
        </div>
      </header>

      <section id="introduction">
        <h2><span class="section-number">1.</span> Introduction</h2>
        <p>
          L'évolution des technologies numériques a profondément transformé l'accès à l'information,
          mais l'accès aux opportunités financières reste encore largement limité pour une grande partie
          de la population mondiale. Les marchés financiers, l'investissement, la compréhension des
          mécanismes économiques et l'accès à certains services demeurent complexes, coûteux ou réservés
          à une minorité.
        </p>
        <p>
          <strong class="highlight">Blackcoin est né de cette observation</strong> : il existe un écart important entre l'univers financier
          traditionnel, l'écosystème des actifs numériques et le grand public. La plateforme Blackcoin a
          pour ambition de réduire cet écart en proposant une infrastructure numérique axée sur <strong>l'accès,
          l'apprentissage, l'utilisation et l'expérimentation</strong> de services financiers modernes.
        </p>
        <div class="note-box">
          <p>Le token BKC s'inscrit comme un <strong>outil fonctionnel</strong> au sein de cet écosystème.</p>
        </div>
      </section>

      <section id="vision">
        <h2><span class="section-number">2.</span> Vision et objectifs du projet</h2>
        <p>
          Blackcoin est avant tout une <strong class="keyword">plateforme de services financiers numériques</strong>. 
          L'objectif principal est de fournir aux utilisateurs des outils, des contenus et des services permettant de :
        </p>
        <ul class="objectives-list">
          <li>✅ <span>Mieux comprendre l'univers de la finance et des actifs numériques</span></li>
          <li>✅ <span>Accéder à des informations structurées et pédagogiques</span></li>
          <li>✅ <span>Utiliser des services financiers numériques dans un environnement unifié</span></li>
          <li>✅ <span>Interagir avec des fonctionnalités innovantes de manière progressive et encadrée</span></li>
        </ul>
        <div class="warning-box">
          <p>
            <strong>Le token BKC n'est pas conçu comme un produit d'investissement, 
            mais comme un instrument utilitaire</strong> destiné à faciliter l'utilisation 
            de certains services de la plateforme.
          </p>
        </div>
      </section>

      <section id="ecosysteme">
        <h2><span class="section-number">3.</span> Présentation de l'écosystème Blackcoin</h2>
        <p>L'écosystème Blackcoin repose sur trois piliers complémentaires :</p>
        <div class="ecosystem-pillars">
          <div class="pillar">
            <div class="pillar-icon">👥</div>
            <h4>Participation communautaire</h4>
            <p>Activité, engagement, progression</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">🛠️</div>
            <h4>Services numériques</h4>
            <p>Éducation, outils, accès</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">🪙</div>
            <h4>Token BKC</h4>
            <p>Outil fonctionnel interne</p>
          </div>
        </div>
        <p class="note-text">
          Ces trois composantes sont volontairement distinctes afin d'éviter toute confusion 
          entre participation, utilisation des services et détention de tokens.
        </p>
      </section>

      <section id="minage">
        <h2><span class="section-number">4.</span> Phase de participation et de minage</h2>
        
        <h3>4.1 Principe général</h3>
        <p>
          La plateforme Blackcoin introduit une phase de participation communautaire, 
          communément appelée « phase de minage ». Cette phase a pour objectif principal de :
        </p>
        <ul>
          <li><strong>Encourager l'engagement</strong> des utilisateurs</li>
          <li><strong>Tester et améliorer</strong> la plateforme</li>
          <li><strong>Structurer</strong> une communauté active autour des services Blackcoin</li>
        </ul>
        <p class="note-text">La phase de minage est <strong>limitée dans le temps</strong> et s'étend sur quelques mois.</p>

        <h3>4.2 Nature de la participation</h3>
        <p>La participation repose sur des actions non spéculatives :</p>
        <div class="participation-grid">
          <div class="participation-card">
            <div class="card-icon">💻</div>
            <p>Utilisation de la plateforme</p>
          </div>
          <div class="participation-card">
            <div class="card-icon">📚</div>
            <p>Activités éducatives</p>
          </div>
          <div class="participation-card">
            <div class="card-icon">🔄</div>
            <p>Interaction avec les fonctionnalités</p>
          </div>
          <div class="participation-card">
            <div class="card-icon">📈</div>
            <p>Progression dans des parcours</p>
          </div>
        </div>
        
        <div class="disclaimer-box">
          <h4>⚠️ IMPORTANT</h4>
          <p>
            Cette phase ne constitue <strong>ni un investissement, ni une promesse de rendement futur</strong>, 
            et ne garantit aucun avantage économique. Aucune contribution financière n'est requise.
          </p>
        </div>
      </section>

      <section id="progression">
        <h2><span class="section-number">5.</span> Progression, gamification et services premium</h2>
        
        <h3>5.1 Parcours de progression</h3>
        <p>Blackcoin intègre un système de progression visant à améliorer l'expérience utilisateur :</p>
        <ul>
          <li>🎮 <strong>Niveaux</strong> - Évolution selon l'activité</li>
          <li>🧭 <strong>Parcours thématiques</strong> - Apprentissage structuré</li>
          <li>🎯 <strong>Objectifs pédagogiques</strong> - Défis éducatifs</li>
          <li>🪙 <strong>Points internes</strong> - Récompenses non monétaires</li>
        </ul>
        <p class="note-text">La progression est conçue comme un <strong>outil d'accompagnement</strong>, non comme un mécanisme d'accumulation de valeur.</p>

        <h3>5.2 Services premium</h3>
        <p>Certains services sont accessibles via des offres premium facultatives :</p>
        <div class="services-grid">
          <div class="service-card">🎓 Contenus éducatifs avancés</div>
          <div class="service-card">🔧 Outils supplémentaires</div>
          <div class="service-card">📊 Tableaux de bord enrichis</div>
          <div class="service-card">⚡ Fonctionnalités expérimentales</div>
        </div>

        <h3>5.3 Points internes</h3>
        <div class="warning-box">
          <p>Les points internes :</p>
          <ul>
            <li>❌ <strong>N'ont aucune valeur monétaire</strong></li>
            <li>❌ <strong>Ne sont pas échangeables</strong></li>
            <li>❌ <strong>Ne sont pas convertibles</strong> en actifs numériques</li>
            <li>✅ <strong>Servent uniquement</strong> à l'utilisation interne de la plateforme</li>
          </ul>
          <p class="mt-2">Ils sont conçus comme un mécanisme d'usage et de consommation, non comme un stock de valeur.</p>
        </div>
      </section>

      <section id="token">
        <h2><span class="section-number">6.</span> Le token BKC</h2>
        
        <div class="token-info-card">
          <h3>6.1 Rôle du token</h3>
          <p>Le token BKC est un <strong class="keyword">outil utilitaire</strong> au sein de l'écosystème Blackcoin :</p>
          <ul>
            <li>🔓 Accès à certaines fonctionnalités spécifiques</li>
            <li>💳 Règlement de services internes</li>
            <li>🤝 Facilitation des interactions au sein de la plateforme</li>
          </ul>
          <div class="token-warning">
            <p>La détention de BKC ne confère <strong>aucun droit financier, aucun dividende et aucune promesse de rendement</strong>.</p>
          </div>
        </div>

        <h3>6.2 Utilisation du token</h3>
        <p>
          Le BKC est destiné à un usage strictement fonctionnel. Son rôle est limité aux besoins 
          opérationnels de la plateforme. L'utilisation du token est indépendante de la participation 
          à la phase de minage ou aux services premium.
        </p>
      </section>

      <section id="distribution">
        <h2><span class="section-number">7.</span> Distribution et gestion du token</h2>
        <p>La distribution du token BKC est conçue pour assurer le bon fonctionnement de l'écosystème :</p>
        <div class="distribution-grid">
          <div class="dist-item">
            <h4>🔄 Utilisation interne</h4>
            <p>Fonctionnalités de la plateforme</p>
          </div>
          <div class="dist-item">
            <h4>🚀 Développement</h4>
            <p>Évolution de la plateforme</p>
          </div>
          <div class="dist-item">
            <h4>⚙️ Opérations techniques</h4>
            <p>Maintenance et infrastructure</p>
          </div>
          <div class="dist-item">
            <h4>👥 Animation communautaire</h4>
            <p>Engagement et récompenses</p>
          </div>
        </div>
        <div class="note-box">
          <p>La détention du token ne constitue pas une participation au capital, ni un droit de gouvernance financière.</p>
        </div>
      </section>

      <section id="cotation">
        <h2><span class="section-number">8.</span> Cotation et plateformes d'échange</h2>
        <div class="warning-box">
          <p>
            L'équipe Blackcoin pourra, le moment venu, étudier les possibilités d'intégration 
            du token BKC sur des plateformes d'échange compatibles. <strong>Toutefois :</strong>
          </p>
          <ul>
            <li>❌ <strong>Aucune cotation n'est garantie</strong></li>
            <li>❌ <strong>Aucune liquidité n'est promise</strong></li>
            <li>❌ <strong>Aucune échéance temporelle n'est contractuelle</strong></li>
          </ul>
          <p class="mt-2">
            Les décisions relatives à une éventuelle cotation dépendront de facteurs techniques, 
            réglementaires et stratégiques.
          </p>
        </div>
      </section>

      <section id="reglementation">
        <h2><span class="section-number">9.</span> Cadre réglementaire et conformité</h2>
        <p>Blackcoin s'inscrit dans une démarche de conformité progressive :</p>
        <div class="compliance-list">
          <div class="compliance-item">
            <div class="check-icon">✓</div>
            <div>
              <h4>Éviter toute qualification en produit financier</h4>
              <p>Approche utilitaire claire</p>
            </div>
          </div>
          <div class="compliance-item">
            <div class="check-icon">✓</div>
            <div>
              <h4>Séparation usage / participation / token</h4>
              <p>Distinction nette entre les composantes</p>
            </div>
          </div>
          <div class="compliance-item">
            <div class="check-icon">✓</div>
            <div>
              <h4>Information transparente</h4>
              <p>Communication claire et régulière</p>
            </div>
          </div>
        </div>
        <div class="legal-note">
          <p>
            <strong>Note légale :</strong> Les utilisateurs sont responsables de vérifier la conformité 
            de leur utilisation avec les lois en vigueur dans leur juridiction. La plateforme Blackcoin 
            n'est pas accessible aux résidents de certaines juridictions restrictives.
          </p>
        </div>
      </section>

      <section id="risques">
        <h2><span class="section-number">10.</span> Analyse des risques</h2>
        <p>L'utilisation de la plateforme Blackcoin comporte des risques :</p>
        <div class="risks-grid">
          <div class="risk-card">
            <h4>📜 Risque réglementaire</h4>
            <p>Évolution des cadres légaux</p>
          </div>
          <div class="risk-card">
            <h4>💻 Risque technologique</h4>
            <p>Bugs, sécurité, maintenance</p>
          </div>
          <div class="risk-card">
            <h4>🔄 Risque d'évolution du projet</h4>
            <p>Changements de roadmap</p>
          </div>
          <div class="risk-card">
            <h4>👥 Risque de non-adoption</h4>
            <p>Adoption limitée par la communauté</p>
          </div>
          <div class="risk-card">
            <h4>📊 Risque de non-cotation</h4>
            <p>Absence de marché secondaire</p>
          </div>
        </div>
        <div class="warning-banner">
          <strong>Les utilisateurs sont invités à utiliser la plateforme en connaissance de cause.</strong>
        </div>
      </section>

      <section id="conclusion">
        <h2><span class="section-number">11.</span> Conclusion</h2>
        <div class="conclusion-content">
          <p>
            Blackcoin est un projet orienté vers <strong>l'usage, l'éducation et l'accessibilité</strong> 
            des services financiers numériques. Le token BKC est un outil fonctionnel au service de cette 
            vision, et non une finalité en soi.
          </p>
          <p>
            La réussite du projet repose sur l'adoption des services, la qualité de l'expérience utilisateur 
            et l'évolution progressive de l'écosystème, dans le respect des cadres réglementaires applicables.
          </p>
        </div>
        <div class="call-to-action">
          <h3>🚀 Prêt à explorer Blackcoin ?</h3>
          <div class="cta-buttons">
            <button class="cta-btn primary">Rejoindre la communauté</button>
            <button class="cta-btn secondary">Accéder à la plateforme</button>
          </div>
        </div>
      </section>

      <footer class="document-footer">
        <div class="footer-content">
          <p class="disclaimer">
            <strong>Document informatif</strong> — Version 1.0 — Dernière mise à jour : Mars 2024<br>
            Ce document ne constitue pas une offre financière, un conseil en investissement 
            ou une sollicitation d'achat. Consultez nos CGU pour plus d'informations.
          </p>
          <div class="footer-links">
            <a href="#">Conditions Générales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </article>
  </main>
</template>

<script>
export default {
  name: 'Whitepaper',
  data() {
    return {
      sections: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'vision', title: 'Vision et objectifs' },
        { id: 'ecosysteme', title: 'Écosystème' },
        { id: 'minage', title: 'Phase de minage' },
        { id: 'progression', title: 'Progression et services' },
        { id: 'token', title: 'Token BKC' },
        { id: 'distribution', title: 'Distribution' },
        { id: 'cotation', title: 'Cotation' },
        { id: 'reglementation', title: 'Réglementation' },
        { id: 'risques', title: 'Analyse des risques' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    }
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    downloadPDF() {
      // Fonction pour générer/télécharger le PDF
      alert('Fonctionnalité PDF à implémenter');
    }
  }
}
</script>

<style scoped>
.whitepaper-wrapper {
  background: linear-gradient(135deg, #1f0f33 0%, #2a1842 100%);
  min-height: 100vh;
  padding: 120px 20px 60px;
  position: relative;
}

/* Table des matières */
.table-of-contents {
  position: fixed;
  left: 20px;
  top: 120px;
  width: 260px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(245, 179, 1, 0.2);
  z-index: 100;
}

.toc-container h3 {
  color: #f5b301;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.toc-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-container li {
  margin-bottom: 8px;
}

.toc-container a {
  color: #ddd;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
  display: block;
  padding: 4px 8px;
  border-radius: 4px;
}

.toc-container a:hover {
  color: #f5b301;
  background: rgba(245, 179, 1, 0.1);
}

.toc-footer {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.download-btn {
  width: 100%;
  padding: 10px;
  background: rgba(245, 179, 1, 0.2);
  border: 1px solid #f5b301;
  color: #f5b301;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.download-btn:hover {
  background: rgba(245, 179, 1, 0.3);
}

/* Contenu principal */
.whitepaper-container {
  max-width: 880px;
  margin: 0 auto;
  color: #ffffff;
  line-height: 1.85;
  background: rgba(255, 255, 255, 0.02);
  padding: 40px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.document-header {
  text-align: center;
  margin-bottom: 50px;
}

.document-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #ffffff;
}

.document-subtitle {
  color: #aaa;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.warning-banner {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

/* Sections */
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

h3 {
  margin-top: 35px;
  margin-bottom: 15px;
  color: #ddd;
  font-size: 1.3rem;
}

h4 {
  color: #fff;
  margin-bottom: 8px;
}

/* Listes améliorées */
.objectives-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.objectives-list li {
  padding: 12px 15px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid #f5b301;
}

/* Box de mise en valeur */
.note-box {
  background: rgba(32, 128, 255, 0.1);
  border-left: 4px solid #2080ff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.warning-box {
  background: rgba(245, 179, 1, 0.1);
  border-left: 4px solid #f5b301;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.disclaimer-box {
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid rgba(255, 59, 48, 0.3);
  padding: 20px;
  border-radius: 8px;
  margin: 25px 0;
}

.disclaimer-box h4 {
  color: #ff3b30;
  margin-top: 0;
}

/* Grids et cartes */
.ecosystem-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.pillar {
  text-align: center;
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s;
}

.pillar:hover {
  transform: translateY(-5px);
  border-color: #f5b301;
}

.pillar-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.participation-grid,
.services-grid,
.risks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.participation-card,
.service-card,
.risk-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.participation-card .card-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.distribution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.dist-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
}

/* Éléments de compliance */
.compliance-list {
  margin: 25px 0;
}

.compliance-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  margin-bottom: 10px;
}

.check-icon {
  color: #4cd964;
  font-weight: bold;
  font-size: 1.2rem;
}

.legal-note {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 0.9rem;
}

/* CTA */
.call-to-action {
  text-align: center;
  margin-top: 50px;
  padding: 40px;
  background: rgba(245, 179, 1, 0.1);
  border-radius: 16px;
  border: 2px dashed #f5b301;
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

/* Footer */
.document-footer {
  margin-top: 70px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  text-align: center;
}

.disclaimer {
  opacity: 0.75;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.footer-links a {
  color: #aaa;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #f5b301;
}

/* Classes utilitaires */
.mt-2 { margin-top: 20px; }
.highlight { color: #f5b301; }
.keyword { color: #4cd964; font-weight: bold; }
.note-text { color: #aaa; font-style: italic; }

/* Responsive */
@media (max-width: 1200px) {
  .table-of-contents {
    position: static;
    width: 100%;
    margin-bottom: 40px;
  }
  
  .whitepaper-wrapper {
    padding: 100px 15px 40px;
  }
}

@media (max-width: 768px) {
  .whitepaper-container {
    padding: 25px;
  }
  
  .document-header h1 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .ecosystem-pillars,
  .participation-grid,
  .distribution-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .whitepaper-wrapper {
    padding: 80px 10px 30px;
  }
  
  .whitepaper-container {
    padding: 20px;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}
</style>