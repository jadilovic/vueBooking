<template>
	<div class="selection-list col-6 col-s-6">
		<div v-for="(item, index) in summaryData" :key="item.service">
			<details>
				<summary>
					<img
						class="img-selection"
						alt="logo"
						height="22"
						v-bind:src="item.logo"
					/>
					{{ item.service }}
					<img alt="move" v-bind:src="caret" class="icon" />
				</summary>
				<div class="info-list">
					<span class="info-cost"> ${{ item.cost }} </span>
					<span class="change-selection" @click="handleChange(index)">
						Change?
					</span>
				</div>
			</details>
			<hr class="separator" />
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

import caret from '../assets/icons/caret.svg';
import { useStore } from 'vuex';
export default {
	props: ['summaryData'],
	data() {
		return { caret };
	},
	setup() {
		const store = useStore();
		const isEdit = ref(false);

		const toggleEdit = () => {
			store.commit('TOGGLE_EDIT', isEdit.value);
		};

		return { toggleEdit, isEdit };
	},
	methods: {
		handleChange(index) {
			this.toggleEdit();
			localStorage.removeItem('completed');
			localStorage.setItem('changeIndex', index);
			this.$router.push({ name: 'QuizView' });
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../styles/global.scss';
</style>
