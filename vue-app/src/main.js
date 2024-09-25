// src/main.js
import { createApp } from 'vue'; // Import Vue 3's createApp method
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import router from './router';
import {auth} from "../firebaseConfig";

// Create the Vue app instance
const app = createApp(App);

app.use(router);
app.config.globalProperties.$auth = auth;
app.mount('#app');
