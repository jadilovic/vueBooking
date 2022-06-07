<template>
	<div class="container summary-body row">
		<SummaryHeader :totalCost="totalCost" />
		<div class="card-pie-chart col-6 col-s-6">
			<div id="pie-chart-container">
				<PieChart :pieData="pieChart" />
				<Legenda :pieData="pieChart" />
			</div>
		</div>
		<SummaryCard :summaryData="summary" />
		<div @click="startNewQuiz" class="footer footer-summary col-12 col-s-12">
			<p class="font-link">Clear Selection / Start Over</p>
		</div>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import PieChart from '../components/PieChart.vue';
import Legenda from '../components/Legenda.vue';
import SummaryCard from '../components/SummaryCard.vue';
import SummaryHeader from '../components/SummaryHeader.vue';
import accommSvg from '../assets/icons/accommodation.svg';
import transportSvg from '../assets/icons/transport.svg';
import foodSvg from '../assets/icons/food.svg';
export default {
	components: {
		PieChart,
		Legenda,
		SummaryCard,
		SummaryHeader,
	},
	setup() {
		const router = useRouter();
		const services = ['Accommodation', 'Transport', 'Food'];
		const colors = ['#5181fc', '#d73780', '#61ab04'];
		const logos = [accommSvg, transportSvg, foodSvg];
		const summary = ref([]);
		const totalCost = ref(0);
		const pieChart = ref([]);
		const store = useStore();

		const toggleEdit = () => {
			store.commit('TOGGLE_EDIT', true);
		};

		const createPieChart = () => {
			const total = summary.value.reduce((acc, cur) => {
				return (acc += cur.cost);
			}, 0);
			for (let index = 0; index < 3; index++) {
				pieChart.value.push({
					service: services[index],
					color: colors[index],
					percentage: Number((summary.value[index].cost / total).toFixed(2)),
				});
			}
			totalCost.value = total;
		};

		const createSummary = () => {
			const accommodation = JSON.parse(localStorage.getItem('accommodation'));
			summary.value.push({
				...accommodation,
				logo: logos[0],
				service: services[0],
			});
			const transport = JSON.parse(localStorage.getItem('transport'));
			summary.value.push({
				...transport,
				logo: logos[1],
				service: services[1],
			});
			const food = JSON.parse(localStorage.getItem('food'));
			summary.value.push({ ...food, logo: logos[2], service: services[2] });

			if (!accommodation?.name || !transport?.name || !food?.name) {
				localStorage.removeItem('completed');
				router.push({ name: 'Home' });
			} else {
				localStorage.setItem('completed', 'completed');
			}
			createPieChart();
		};

		watchEffect(() => {
			createSummary();
		});

		return { summary, totalCost, pieChart, toggleEdit };
	},
	methods: {
		startNewQuiz() {
			this.toggleEdit();
			localStorage.removeItem('completed');
			localStorage.removeItem('accommodation');
			localStorage.removeItem('transport');
			localStorage.removeItem('food');
			this.$router.push({ name: 'Home' });
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../styles/global.scss';
</style>
