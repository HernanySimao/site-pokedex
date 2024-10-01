import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index'; 
import { createI18n } from 'vue-i18n';
import 'aos/dist/aos.css';
import AOS from 'aos';
import App from './App.vue';
import en from './lang/en.json';
import pt from './lang/pt.json';

const app = createApp(App);


const savedLanguage = localStorage.getItem('language') || 'en';
const i18n = createI18n({
  locale: savedLanguage,
  fallbackLocale: 'en',
  legacy: false,
  messages: {
    en,
    pt
  }
});



app.use(i18n);
const pinia = createPinia();
app.use(pinia); 
app.use(router);
AOS.init({
    duration: 1000,  
    once: true,      
  }); 

app.mount('#app');
