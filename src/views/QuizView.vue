<template>
	<div
		v-if="currentGroupIndex < 3"
		:class="'container ' + groups[currentGroupIndex].toLowerCase() + ' row'"
	>
		<div class="header">
			<span class="font-nunito">
				<img
					class="svgIcon"
					:alt="groups[currentGroupIndex].toLowerCase() + ' svg icon'"
					:src="
						require('@/assets/icons/' +
							groups[currentGroupIndex].toLowerCase() +
							'.svg')
					"
				/>
				<b>{{ groups[currentGroupIndex] }}</b>
			</span>
		</div>
		<div @click="toggleEdit">Change Edit</div>
		<div>{{ isEdit }}</div>
		<div v-if="currentServicesData.length" class="quiz">
			<Cards
				:key="currentGroupIndex"
				:data="currentServicesData"
				:updateData="updateData"
				:selection="currentServicesData[0].group.toLowerCase()"
			/>
		</div>
		<div
			@click="nextGroup"
			class="footer col-12 col-s-12"
			:class="
				selectedService
					? 'footer-' +
					  currentServicesData[0].group.toLowerCase() +
					  '-color allowed'
					: 'footer-' +
					  currentServicesData[0].group.toLowerCase() +
					  '-color-dark not-allowed'
			"
		>
			<p class="font-link">
				{{
					isEdit
						? 'Edit ' + currentServicesData[0].group.toLowerCase()
						: 'Select ' + currentServicesData[0].group.toLowerCase()
				}}
				<span :class="!isEdit ? 'button-next' : ''">{{
					!isEdit ? currentGroupIndex + 1 + ' / 3' : ''
				}}</span>
			</p>
		</div>
	</div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import services from '../assets/data/services';
import Cards from '../components/Cards.vue';
import { useStore } from 'vuex';

export default {
	components: { Cards },
	setup() {
		const store = useStore();
		const isEdit = ref(store.state.isEdit);
		const groups = ref([]);
		const currentGroupIndex = ref(0);
		const allServicesData = ref(services);
		const currentServicesData = ref([]);
		const selectedService = ref(null);
		const router = useRouter();

		const toggleEdit = () => {
			store.commit('TOGGLE_EDIT', isEdit.value);
		};

		const filterGroups = () => {
			allServicesData.value.forEach((element) => {
				if (!groups.value.includes(element.group)) {
					groups.value.push(element.group);
				}
			});
		};

		const updateData = (data) => {
			currentServicesData.value = data;
		};

		const nextGroup = () => {
			if (selectedService.value && currentGroupIndex.value < 3) {
				currentGroupIndex.value++;
			}
			if (
				(selectedService.value && currentGroupIndex.value === 3) ||
				(selectedService.value && isEdit.value === true)
			) {
				router.push({ name: 'Summary' });
			}
		};

		const setCurrentData = () => {
			currentServicesData.value = allServicesData.value.filter(
				(item) => item.group === groups.value[currentGroupIndex.value]
			);
		};

		const setCurrentSelectedFromLocalStorage = () => {
			const selectedItem = JSON.parse(
				localStorage.getItem(
					groups.value[currentGroupIndex.value].toLowerCase()
				)
			);
			if (selectedItem) {
				currentServicesData.value.forEach((element) => {
					if (element.name === selectedItem.name) {
						element.selected = true;
					}
				});
			} else {
				currentServicesData.value.forEach((element) => {
					element.selected = false;
				});
			}
		};

		const setSelected = () => {
			selectedService.value = currentServicesData.value.some(
				(item) => item.selected === true
			);
		};

		watch(currentGroupIndex, () => {
			setCurrentData();
			setSelected();
		});

		watchEffect(() => {
			const completed = localStorage.getItem('completed');
			const groupIndex = Number(localStorage.getItem('changeIndex'));
			filterGroups();
			if (completed === 'completed') {
				router.push({ name: 'Summary' });
			}
			if (isEdit.value) {
				currentGroupIndex.value = groupIndex;
				setCurrentData();
				setCurrentSelectedFromLocalStorage();
				localStorage.removeItem('changeIndex');
			} else {
				setCurrentData();
			}
			setSelected();
		});
		console.log(selectedService.value);
		return {
			groups,
			allServicesData,
			updateData,
			selectedService,
			currentGroupIndex,
			currentServicesData,
			nextGroup,
			isEdit,
			toggleEdit,
		};
	},
	methods: {},
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
