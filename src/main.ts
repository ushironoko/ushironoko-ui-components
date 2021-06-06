import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { worker } from './mock'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

createApp(App).mount('#app');
