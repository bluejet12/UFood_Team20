import { createApp } from 'vue'; // Import createApp instead of default Vue import
import App from './App.vue';

const app = createApp(App); // Create the app instance
app.mount('#app'); // Mount the app to the #app element
