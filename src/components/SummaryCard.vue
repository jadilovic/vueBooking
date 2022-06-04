<template>
	<div class="selection-list col-6 col-s-6">
		<div v-for="item in summaryData" :key="item.service">
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
					<span class="change-selection" @click="handleChange(item.service)">
						Change?
					</span>
				</div>
			</details>
			<hr class="separator" />
		</div>
	</div>
</template>

<script>
import caret from '../assets/icons/caret.svg';
export default {
	props: ['summaryData'],
	data() {
		return { caret };
	},
	methods: {
		handleChange(service) {
			localStorage.removeItem('completed');
			localStorage.setItem('edit', 'edit');
			this.$router.push({ name: service });
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../styles/global.scss';
</style>
