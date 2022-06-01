import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AccommodationView from '../views/AccommodationView.vue';
import TransportView from '../views/TransportView.vue';
import FoodView from '../views/FoodView.vue';
import SummaryView from '../views/SummaryView.vue';

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
	{
		path: '/food',
		name: 'Food',
		component: FoodView,
	},
	{
		path: '/summary',
		name: 'Summary',
		component: SummaryView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
