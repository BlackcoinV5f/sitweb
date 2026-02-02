import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // 👈 on importe le router
import './style.css'

createApp(App)
  .use(router)                 // 👈 on branche le router
  .mount('#app')
