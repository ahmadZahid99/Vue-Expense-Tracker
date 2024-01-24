// main.js
import { createApp } from 'vue';
import Toast from 'vue-toastification';
import { createPinia } from 'pinia';
import 'vue-toastification/dist/index.css';
import './assets/style.css';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Toast);
app.use(router);

app.mount('#app');
