import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi-base.css'
import 'virtual:windi-utilities.css'
import { worker } from './mock'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

createApp(App).mount('#app');
