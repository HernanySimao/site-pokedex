import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index'; 
import 'aos/dist/aos.css';
import AOS from 'aos';
import App from './App.vue';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia); 
app.use(router);
AOS.init({
    duration: 1000,  
    once: true,      
  }); 

app.mount('#app');
