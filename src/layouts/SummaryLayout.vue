<template>
	<div>
		<HeaderLayout />
		<slot />
		<FooterLayout />
	</div>
</template>

<script>
import HeaderLayout from '../layouts/HeaderLayout.vue';
import FooterLayout from '../layouts/FooterLayout.vue';
export default {
	name: 'SummaryLayout',
	components: {
		HeaderLayout,
		FooterLayout,
	},
};
</script>

<style></style>
