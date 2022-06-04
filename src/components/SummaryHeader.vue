<template>
	<div class="header-summary">
		<span class="font-nunito summary-head">
			${{ totalCost.toLocaleString('en-US') }}
		</span>
	</div>
	<div class="header-label col-12 col-s-12">
		<span class="font-nunito cost-description">
			{{
				totalCost > 1500
					? 'Big spender'
					: totalCost > 1100
					? 'Normal'
					: 'Thrifty'
			}}
		</span>
	</div>
</template>

<script>
export default {
	props: ['totalCost'],
};
</script>

<style lang="scss" scoped>
@import '../styles/global.scss';
</style>
