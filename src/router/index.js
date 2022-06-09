import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SummaryView from '../views/SummaryView.vue';
import QuizView from '../views/QuizView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/summary',
		name: 'Summary',
		component: SummaryView,
	},
	{
		path: '/quiz',
		name: 'QuizView',
		component: QuizView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
