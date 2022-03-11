import { createApp } from 'vue'
import App from '../src/app/App.vue'
import router from './app/router/index'
import BootstrapVue3 from 'bootstrap-vue-3' 
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
createApp(App).use(router).use(BootstrapVue3).mount('#app')
