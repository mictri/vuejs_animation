import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'
import './assets/css/default.css'
import './assets/css/general.css'
import './assets/css/shared.css'
const app = createApp(App)
app.use(router).mount('#app')
