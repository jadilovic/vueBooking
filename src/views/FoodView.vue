<template>
	<div class="container food row">
		<div class="header">
			<span class="font-nunito">
				<img class="svgFood" alt="meals" src="@/assets/icons/food.svg" />
				<b>Food</b>
			</span>
		</div>
		<div v-if="foodData.length">
			<Cards :data="foodData" :updateData="updateData" selection="food" />
		</div>
		<router-link
			:to="selectedFood ? '/summary' : ''"
			:class="{ disabled: !selectedFood }"
		>
			<div
				class="footer col-12 col-s-12"
				:class="
					selectedFood
						? 'footer-food-color'
						: 'footer-food-color-dark not-allowed'
				"
			>
				<p class="font-link">
					{{ edit ? 'Edit food' : 'Select food' }}
					<span :class="!edit ? 'button-next' : ''">{{
						!edit ? '3 / 3' : ''
					}}</span>
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import food from '../assets/data/foods';
import Cards from '../components/Cards.vue';

export default {
	components: { Cards },
	setup() {
		const foodData = ref(food);
		const selectedFood = ref(null);
		const edit = ref(false);
		const router = useRouter();

		const updateData = (data) => {
			foodData.value = data;
		};

		watch(foodData.value, () => {
			const selected = foodData.value.some((item) => item.selected === true);
			selectedFood.value = selected;
		});

		watchEffect(() => {
			const prevSelected = JSON.parse(localStorage.getItem('food'));
			const change = localStorage.getItem('edit');
			const completed = localStorage.getItem('completed');
			const selected = foodData.value.some((item) => item.selected === true);
			selectedFood.value = selected;
			if (completed === 'completed') {
				router.push({ name: 'Summary' });
			}
			if (change === 'edit') {
				edit.value = true;
			} else {
				edit.value = false;
			}
			if (prevSelected?.name) {
				foodData.value.forEach((item) => {
					if (item.name === prevSelected.name) {
						item.selected = true;
					}
				});
			} else {
				foodData.value.forEach((item) => (item.selected = false));
			}
		});
		return { foodData, updateData, selectedFood, edit };
	},
};
</script>

<style lang="scss">
@import '../styles/global.scss';

.backgroundGourmet {
	background-image: url('../assets/images/food-gourmet.jpeg');
}

.backgroundGourmetDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/food-gourmet.jpeg');
}

.backgroundTraditional {
	background-image: url('../assets/images/food-traditional.jpeg');
}

.backgroundTraditionalDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/food-traditional.jpeg');
}

.backgroundFastFood {
	background-image: url('../assets/images/food-cheap.jpeg');
}

.backgroundFastFoodDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/food-cheap.jpeg');
}
</style>
