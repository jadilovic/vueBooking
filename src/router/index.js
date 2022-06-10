import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Summary from '../views/Summary.vue';
import Quiz from '../views/Quiz.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/summary',
		name: 'Summary',
		component: Summary,
	},
	{
		path: '/quiz',
		name: 'Quiz',
		component: Quiz,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
