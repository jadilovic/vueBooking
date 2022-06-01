<template>
	<div class="container accommodation">
		<div class="header">
			<span class="font-nunito">
				<img
					class="svgIcon"
					alt="building"
					src="@/assets/icons/accommodations.svg"
				/>
				<b>Accommodation</b>
			</span>
		</div>
		<div v-if="accommodationsData.length">
			<Cards
				:data="accommodationsData"
				:updateData="updateData"
				selection="accommodation"
			/>
		</div>
		<router-link
			:to="selectedAccommodation ? '/transport' : ''"
			:class="{ disabled: !selectedAccommodation }"
		>
			<div
				class="footer col-12 col-s-12"
				:class="
					selectedAccommodation
						? 'footer-accomm-color'
						: 'footer-accomm-color-dark'
				"
			>
				<p class="font-link">
					{{ edit ? 'Edit accommodation' : 'Select accommodation' }}
					<span class="button-next">{{ !edit ? '1 / 3' : '' }}</span>
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';
import accommodations from '../assets/data/accommodations';
import Cards from '../components/Cards.vue';

export default {
	components: { Cards },
	setup() {
		const accommodationsData = ref(accommodations);
		const selectedAccommodation = ref(null);
		const edit = ref(false);

		const updateData = (data) => {
			accommodationsData.value = data;
		};

		watch(accommodationsData.value, () => {
			const selected = accommodationsData.value.some(
				(item) => item.selected === true
			);
			selectedAccommodation.value = selected;
		});

		watchEffect(() => {
			const prevSelected = JSON.parse(localStorage.getItem('accommodation'));
			const change = localStorage.getItem('edit');
			const completed = localStorage.getItem('completed');
			const selected = accommodationsData.value.some(
				(item) => item.selected === true
			);
			selectedAccommodation.value = selected;
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
		});
		return { accommodationsData, updateData, selectedAccommodation, edit };
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

.footer-accomm-color {
	background: #5181fc;
}

.footer-accomm-color-dark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		#5181fc;
}

.disabled {
	cursor: not-allowed;
}

.button-next {
	float: inherit;
	padding-left: 40px;
}
</style>
