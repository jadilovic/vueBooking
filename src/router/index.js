import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Summary from '../views/Summary.vue';
import Quiz from '../views/Quiz.vue';
import SummaryLayout from '@/layouts/SummaryLayout.vue';
import QuizLayout from '@/layouts/QuizLayout.vue';

const routes = [
	{
		path: '/',
		name: 'Quiz',
		component: Quiz,
		meta: {
			layout: QuizLayout,
		},
	},
	{
		path: '/summary',
		name: 'Summary',
		component: Summary,
		meta: {
			layout: SummaryLayout,
		},
	},
	// {
	// 	path: '/quiz',
	// 	name: 'Quiz',
	// 	component: Quiz,
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
