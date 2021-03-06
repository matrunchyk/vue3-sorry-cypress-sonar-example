import { createApp, defineAsyncComponent } from 'vue';
import { makeServer } from '../tests/mirage';
import router from './router';
import './styles/main.pcss';

makeServer();

const app = createApp(defineAsyncComponent(() => import('./App.vue')));

app.use(router).mount('#app');
