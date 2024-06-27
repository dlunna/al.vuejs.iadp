//import './assets/main.css'
//Carga el CSS
import "bootstrap/dist/css/bootstrap.min.css"
//Carga los JS
import "bootstrap"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

/*<i class="fa-solid fa-school"></i>*/
/* add icons to the library */
library.add(faMedal, faCertificate, faAward, faHome, faFacebookF, faWhatsapp, faYoutube, faAppleWhole)









const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')