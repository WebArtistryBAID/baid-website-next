import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import './assets/styles/index.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(MotionPlugin)
app.mount('#app')

