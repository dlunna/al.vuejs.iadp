//import './assets/main.css'
//Carga el CSS
import "bootstrap/dist/css/bootstrap.min.css"
//Carga los JS
import "bootstrap"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')