<template>
	<div class="container accommodation">
		<div class="header">
			<span class="font-link">
				<img
					class="svgIcon"
					alt="building"
					src="@/assets/icons/accommodations.svg"
				/>
				<b>Accommodation</b>
				<div v-if="accommodationsData.length">
					<Cards
						:data="accommodationsData"
						:updateData="updateData"
						selection="accommodation"
					/>
				</div>
			</span>
		</div>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import accommodations from '../assets/data/accommodations';
import Cards from '../components/Cards.vue';

export default {
	components: { Cards },
	setup() {
		const accommodationsData = ref(accommodations);
		const edit = ref(false);

		const updateData = (data) => {
			accommodationsData.value = data;
			console.log(accommodationsData.value);
		};

		watchEffect(() => {
			const prevSelected = JSON.parse(localStorage.getItem('accommodation'));
			const change = localStorage.getItem('edit');
			const completed = localStorage.getItem('completed');
			if (completed === 'completed') {
				navigate('/summary');
			}
			if (change === 'edit') {
				edit.value = true;
			} else {
				edit.value = false;
			}
			if (prevSelected?.name) {
				accommodationsData.value.forEach((item) => {
					if (item.name === prevSelected.name) {
						item.selected = true;
					}
				});
			} else {
				accommodationsData.value.forEach((item) => (item.selected = false));
			}
			// setData(accommodations);
		});
		// accommodationsData.value = accommodations;
		return { accommodationsData, updateData };
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.accommodation {
	background: #ecf0f9;
}
.font-nunito {
	font-family: 'Nunito', sans-serif;
	font-weight: 700;
	font-weight: bold;
	padding: 10px;
	padding-top: 23px;
}

.svgIcon {
	/* border: 1px solid red; */
	position: relative;
	height: 22px;
	margin-right: 12px;
}

.backgroundScenic {
	background-image: url('../assets/images/accommodation-scenic.jpeg');
}

.backgroundScenicDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/accommodation-scenic.jpeg');
}

.backgroundQuaint {
	background-image: url('../assets/images/accommodation-quaint.jpeg');
}

.backgroundQuaintDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/accommodation-quaint.jpeg');
}

.backgroundCheap {
	background-image: url('../assets/images/accommodation-cheap.jpeg');
}

.backgroundCheapDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/accommodation-cheap.jpeg');
}

.card {
	position: relative;
	cursor: pointer;
	margin-bottom: 35px;
	font-size: 16px;
	color: #1f2c41;
}

.infoButton {
	height: 75px;
	margin-top: 170px;
	font-size: 16px;
	background: #ffffff;
}

.footer-accomm-color {
	background: #5181fc;
}

.footer-accomm-color-dark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		#5181fc;
}

.disabled-link {
	cursor: not-allowed;
}
</style>
