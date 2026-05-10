import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// 🔥 IMPORT FONT AWESOME
import '@fortawesome/fontawesome-free/css/all.min.css'

// 🌍 IMPORT i18n
import { setupI18n } from './i18n'

// ✅ Charge tous les JSON puis monte l'app
setupI18n().then((i18n) => {
  createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
})