import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AccommodationView from '../views/AccommodationView.vue';
import TransportView from '../views/TransportView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/accommodation',
		name: 'Accommodation',
		component: AccommodationView,
	},
	{
		path: '/transport',
		name: 'Transport',
		component: TransportView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
