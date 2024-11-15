import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const app = createApp(App)
const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives
})
app.use(pinia)
app.use(VueApexCharts)
app.use(vuetify)
app.mount('#app')
