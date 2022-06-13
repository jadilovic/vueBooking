<template>
	<div class="quiz row">
		<header>
			<span class="font-link"> Lorem<b>Ipsum</b> </span>
		</header>
		<div class="quiz__description">
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
		<div @click="toggleInitial">
			<!-- <router-link to="/quiz"> -->
			<footer>
				<p class="font-link">Start Quiz</p>
			</footer>
			<!-- </router-link> -->
		</div>
	</div>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import services from '../assets/data/services';
import { useStore } from 'vuex';

export default {
	name: 'Home',
	components: {},
	setup() {
		const completed = localStorage.getItem('completed');
		const edit = localStorage.getItem('edit');
		const router = useRouter();
		const store = useStore();

		const toggleInitial = () => {
			console.log('toggle initial');
			store.commit('TOGGLE_INITIAL');
		};

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

		return { toggleInitial };
	},
};
</script>

<style lang="scss">
.quiz {
	min-height: 100vh;
	border-radius: $componentRadius;
	padding-left: $containerPadding;
	padding-right: $containerPadding;

	&__description {
		text-align: left;
		margin-top: 30px;
		padding-bottom: 70px;
		margin-left: 35px;
		margin-right: 35px;
		font-size: 16px;
		line-height: 160%;
		font-feature-settings: 'pnum' on, 'lnum' on;
		color: #1f2c41;
	}

	&__cards {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 5px;
		padding-bottom: 82px;

		@include md {
			grid-template-columns: repeat(3, 1fr);
			padding-bottom: 82px;
			padding: 0;
		}
	}

	&__svgIcon {
		/* border: 1px solid red; */
		position: relative;
		height: 22px;
		margin-right: 12px;
	}
}
</style>
