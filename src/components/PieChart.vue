<template>
	<div class="pie-chart" :style="pieStyles"></div>
</template>

<script>
export default {
	props: ['pieData'],
	computed: {
		pieStyles() {
			let acum = 0;
			let styles = this.pieData.map(
				(segment) => `${segment.color} 0 ${(acum += segment.percentage * 100)}%`
			);
			return {
				background: `conic-gradient( ${styles.join(',')} )`,
			};
		},
	},
};
</script>

<style scoped>
.pie-chart {
	width: 103px;
	height: 103px;
	border-radius: 50%;
}
</style>
