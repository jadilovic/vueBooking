<template>
	<div class="container summary">
		<div class="header-summary">
			<span class="font-nunito summary-head">
				${{ totalCost.toLocaleString('en-US') }}
			</span>
		</div>
		<div class="header-label col-12 col-s-12">
			<span class="font-nunito cost-description">
				{{
					totalCost > 1500
						? 'Big spender'
						: totalCost > 1100
						? 'Normal'
						: 'Thrifty'
				}}
			</span>
		</div>
		<div class="card-pie-chart col-6 col-s-6">
			<div id="pie-chart-container">
				<PieChart id="pie-chart" :pieData="pieChart" />
				<Legenda :pieData="pieChart" />
			</div>
		</div>
		<div class="selection-list col-6 col-s-6">
			<div v-for="(item, index) in summary" :key="item.service">
				<details>
					<summary>
						<img
							class="img-selection"
							alt="logo"
							height="22"
							v-bind:src="logos[index]"
						/>
						{{ item.service }}
						<img alt="move" v-bind:src="caret" class="icon" />
					</summary>
					<div class="info-list">
						<span class="info-cost"> ${{ item.cost }} </span>
						<span class="change-selection" @click="handleChange">
							Change?
						</span>
					</div>
				</details>
				<hr class="separator" />
			</div>
		</div>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import PieChart from '../components/PieChart.vue';
import Legenda from '../components/Legenda.vue';
import caret from '../assets/icons/caret.svg';
import accommSvg from '../assets/icons/accommodations.svg';
import transportSvg from '../assets/icons/transport.svg';
import foodSvg from '../assets/icons/food.svg';
export default {
	components: {
		PieChart,
		Legenda,
	},
	setup() {
		const services = ['Accommodation', 'Transport', 'Food'];
		const logos = [accommSvg, transportSvg, foodSvg];
		const colors = ['#5181fc', '#d73780', '#61ab04'];
		const summary = ref([]);
		const totalCost = ref(0);
		const pieChart = ref([]);

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
				// navigate('/');
				localStorage.removeItem('completed');
			} else {
				localStorage.setItem('completed', 'completed');
			}
			// setSummary([...summary]);
			createPieChart();
		};

		watchEffect(() => {
			localStorage.removeItem('edit');
			createSummary();
		});

		const handleChange = () => {
			localStorage.removeItem('completed');
			localStorage.setItem('edit', 'edit');
			navigate(`/${item.service}`);
		};

		return { summary, totalCost, pieChart, handleChange, logos, caret };
	},
};
</script>

<style>
.summary {
	background: #fed6d6;
	position: relative;
	height: 100vh;
}

.summary-head {
	font-weight: 'bold';
	display: 'inline';
}

.cost-description {
	font-weight: bold;
	display: inline;
	font-size: 16px;
}

.header-summary {
	text-align: center;
	padding-top: 100px;
	font-size: 38px;
	color: #000000;
}

.header-label {
	position: absolute;
	margin-top: 13px;
	left: 50%;
	transform: translate(-50%, -50%);
	/* height: 27px; */
	text-align: center;
	/* font-size: 19px; */
	color: #000000;
	background: #ffffff;
	border-radius: 10px;
	max-width: max-content;
}

.card-pie-chart {
	/* cursor: pointer; */
	height: 160px;
	border-radius: 20px;
	margin-top: 70px;
	color: #000000;
	background-color: #ffffff;
}

#pie-chart-container {
	display: flex;
	align-items: center;
	justify-content: center;
}

#pie-chart {
	margin-top: 30px;
	border-radius: 50%;
	width: 103px;
	height: 103px;
}

#legenda {
	margin-top: 30px;
	margin-left: 20px;
	background-color: white;
	padding: 5px;
}

.info {
	display: flex;
	align-items: center;
}

.box-color {
	height: 15px;
	width: 15px;
}

.info-text {
	margin-left: 11px;
	font-family: 'Ubuntu';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 160%;
	color: #000000;
}

#color-accommodation {
	background-color: #5181fc;
}

#color-transport {
	background-color: #d73780;
}

#color-food {
	background-color: #61ab04;
}

.selection-list {
	height: 325px;
	border-radius: 20px;
	margin-top: 35px;
	font-size: 16px;
	color: #000000;
	background-color: #ffffff;
}

details {
	user-select: none;
	margin-top: 15px;
	margin-left: 15px;
	margin-right: 15px;
	font-family: 'Ubuntu';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	color: #000000;
}

details > summary img.icon {
	width: 24px;
	height: 24px;
	transition: all 0.3s;
	margin-left: auto;
}

details[open] summary img.icon {
	transform: rotate(180deg);
}

summary {
	display: flex;
	cursor: pointer;
}

summary::-webkit-details-marker {
	display: none;
}

.img-selection {
	margin-right: 12px;
}

.info-list {
	height: 54px;
}

.info-cost {
	padding-top: 20px;
	float: left;
	font-size: 24px;
}

.change-selection {
	padding-top: 20px;
	float: right;
	cursor: pointer;
	font-size: 24px;
}

.icon {
	height: 15px;
}

.separator {
	width: 100%;
}
</style>
