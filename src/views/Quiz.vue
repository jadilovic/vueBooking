<template>
	<div v-if="isInitial">
		<h1>Home</h1>
		<div @click="toggleInitial">Change Initial</div>
		<div>Is initial? : {{ isInitial }}</div>
	</div>
	<div v-else>
		<div v-if="currentGroupIndex < 3" :class="`quiz ${group} row`">
			<header>
				<span class="font-nunito">
					<img
						class="quiz__svgIcon"
						:alt="`${group} svg icon`"
						:src="require(`@/assets/icons/${group}.svg`)"
					/>
					<b>{{ groupName }}</b>
				</span>
			</header>
			<div v-if="currentServicesData.length" class="quiz__cards">
				<Cards
					:key="currentGroupIndex"
					:data="currentServicesData"
					:updateData="updateData"
					:selection="group"
				/>
			</div>
			<footer
				@click="nextGroup"
				class="not-allowed"
				:class="[`footer-${group}-color`, isSelectedService]"
			>
				<p class="font-link">
					{{ isEdit ? `Edit ${group}` : `Select ${group}` }}
					<span :class="!isEdit ? 'button-next' : ''">{{
						!isEdit ? `${currentGroupIndex + 1} / ${groups.length}` : ''
					}}</span>
				</p>
			</footer>
		</div>
	</div>
</template>

<script>
import { ref, watch, watchEffect, computed } from 'vue';
import { useRouter } from 'vue-router';
import services from '../assets/data/services';
import Cards from '../components/Cards.vue';
import { useStore } from 'vuex';

export default {
	components: { Cards },
	setup() {
		const store = useStore();
		const isEdit = ref(store.state.isEdit);
		const isInitial = ref(store.state.isInitial);
		const groups = ref([]);
		const currentGroupIndex = ref(0);
		const allServicesData = ref(services);
		const currentServicesData = ref([]);
		const selectedService = ref(null);
		const router = useRouter();

		const group = computed(() =>
			currentServicesData.value[0]?.group.toLowerCase()
		);

		const groupName = computed(
			() =>
				currentServicesData.value[0]?.group.charAt(0).toUpperCase() +
				currentServicesData.value[0]?.group.slice(1)
		);

		const isSelectedService = computed(() =>
			selectedService.value
				? 'footer-color allowed'
				: `footer-${group.value}-color-dark`
		);

		// const toggleEdit = () => {
		// 	store.commit('TOGGLE_EDIT', isEdit.value);
		// };

		const toggleInitial = () => {
			console.log('toggle initial');
			store.commit('TOGGLE_INITIAL', !isInitial.value);
			console.log(isInitial.value);
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

			console.log(currentServicesData.value);
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
				console.log('test testing hi');
				currentGroupIndex.value = groupIndex;
				setCurrentData();
				setCurrentSelectedFromLocalStorage();
			} else {
				setCurrentData();
			}
			setSelected();
		});
		console.log(selectedService.value);
		return {
			groups,
			group,
			groupName,
			allServicesData,
			updateData,
			selectedService,
			currentGroupIndex,
			currentServicesData,
			nextGroup,
			isEdit,
			isSelectedService,
			toggleInitial,
			isInitial,
		};
	},
	methods: {},
};
</script>

<style lang="scss">
.row {
	content: '';
	clear: both;
}

.row::after {
	content: '';
	clear: both;
	display: table;
}

[class*='col-'] {
	width: 100%;
	float: left;
}

.not-allowed {
	cursor: not-allowed;
}

.allowed {
	cursor: pointer;
}

.accommodation {
	background: $accommBackground;
}

.footer-accommodation-color {
	background: $accommColor;
}

.footer-accommodation-color-dark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		$accommColor;
}

.food {
	background: #e1ecd3;
}

.svgFood {
	margin-right: 10px;
	position: relative;
	width: 27px;
}

.footer-food-color {
	background: $foodColor;
}

.footer-food-color-dark {
	background: linear-gradient(0, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		$foodColor;
}

.transport {
	background: #f9ecf2;
}

.svgTransport {
	margin-right: 10px;
	position: relative;
	width: 27px;
}

.footer-transport-color {
	background: $transportColor;
}

.footer-transport-color-dark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		$transportColor;
}
</style>
