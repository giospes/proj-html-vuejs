import { createApp } from 'vue';
import App from './App.vue';

import './assets/style/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faArrowLeft, faLaptopCode, faClipboardCheck, faIdCard   } from '@fortawesome/free-solid-svg-icons'


library.add(faArrowLeft, faArrowRight, faLaptopCode, faClipboardCheck, faIdCard)

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')


