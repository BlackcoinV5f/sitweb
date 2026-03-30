<template>
  <nav class="table-of-contents">
    <div class="toc-container">
      <h3>Sommaire</h3>
      <ul>
        <li v-for="section in sections" :key="section.id">
          <a :href="'#' + section.id" @click.prevent="scrollToSection(section.id)">
            {{ section.title }}
          </a>
        </li>
      </ul>
      <div class="toc-footer">
        <button @click="$emit('download-pdf')" class="download-btn">
          📄 Télécharger en PDF
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
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
  cursor: pointer;
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

@media (max-width: 1200px) {
  .table-of-contents {
    position: static;
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>