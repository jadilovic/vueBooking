<template>
	<div class="container-home row">
		<div class="header">
			<span class="font-link"> Lorem<b>Ipsum</b> </span>
		</div>
		<div class="description">
			<span class="font-link">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged.
				<p>
					It was popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem
					Ipsum.
				</p>
			</span>
		</div>
		<router-link to="/quiz">
			<!-- <router-link to="/accommodation"> -->
			<div class="footer col-12 col-s-12">
				<p class="font-link">Start Quiz</p>
			</div>
		</router-link>
	</div>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import services from '../assets/data/services';

export default {
	name: 'HomeView',
	components: {},
	setup() {
		const completed = localStorage.getItem('completed');
		const edit = localStorage.getItem('edit');
		const router = useRouter();
		const clearPreviousSelections = () => {
			services.forEach((element) => {
				return (element.selected = false);
			});
		};

		watchEffect(() => {
			clearPreviousSelections();
			if (completed === 'completed' || edit === 'edit') {
				router.push({ name: 'Summary' });
			} else {
				localStorage.removeItem('accommodation');
				localStorage.removeItem('transport');
				localStorage.removeItem('food');
			}
		});
	},
};
</script>

<style lang="scss">
@import '../styles/global.scss';
</style>
