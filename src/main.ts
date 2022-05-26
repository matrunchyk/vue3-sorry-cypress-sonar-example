import {createApp, defineAsyncComponent} from 'vue'
import router from './router';
import './styles/main.pcss';

const app = createApp(defineAsyncComponent(() => import('./App.vue')));

app.use(router).mount('#app');
