import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import AppLayout from './layouts/AppLayout';

createApp(App)
	.use(store)
	.use(router)
	.component('AppLayout', AppLayout)
	.mount('#app');
