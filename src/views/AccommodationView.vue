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
			:to="edit ? '/summary' : selectedAccommodation ? '/transport' : ''"
			:class="{ disabled: !selectedAccommodation }"
		>
			<div
				class="footer col-12 col-s-12"
				:class="
					selectedAccommodation
						? 'footer-accomm-color'
						: 'footer-accomm-color-dark not-allowed'
				"
			>
				<p class="font-link">
					{{ edit ? 'Edit accommodation' : 'Select accommodation' }}
					<span :class="!edit ? 'button-next' : ''">{{
						!edit ? '1 / 3' : ''
					}}</span>
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import accommodations from '../assets/data/accommodations';
import Cards from '../components/Cards.vue';

export default {
	components: { Cards },
	setup() {
		const accommodationsData = ref(accommodations);
		const selectedAccommodation = ref(null);
		const edit = ref(false);
		const router = useRouter();

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
				router.push({ name: 'Summary' });
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

<style lang="scss">
@import '../styles/global.scss';

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
</style>
