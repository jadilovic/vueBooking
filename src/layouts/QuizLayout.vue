<template>
	<div>
		<HeaderLayout />
		<Home v-if="isInitial" />
		<Quiz v-else />
		<FooterLayout />
	</div>
</template>

<script>
import { ref, watch, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import HeaderLayout from '../layouts/HeaderLayout.vue';
import FooterLayout from '../layouts/FooterLayout.vue';
import Quiz from '../views/Quiz.vue';
import Home from '../views/Home.vue';
export default {
	name: 'QuizLayout',
	components: {
		HeaderLayout,
		Home,
		Quiz,
		FooterLayout,
	},
	setup() {
		const store = useStore();
		const isInitial = computed(() => store.getters.getIsInitial);

		const toggleInitial = () => {
			console.log('toggle initial');
			store.commit('TOGGLE_INITIAL');
		};

		console.log(isInitial.value);

		watch(() => {
			console.log('hello ');
		});
		console.log('quiz layout : ', isInitial.value);
		return { isInitial, toggleInitial };
	},
};
</script>

<style lang="scss">
.footer {
	margin: 70px;
}
</style>

<!-- <div class="footer">
			<h1>Quiz</h1>
			<div @click="toggleInitial">Change Initial</div>
			<div>Is initial? : {{ isInitial }}</div>
		</div> -->
