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

<style scoped>
.summary-head {
	font-weight: 'bold';
	display: 'inline';
}

.cost-description {
	font-weight: bold;
	display: inline;
	font-size: 16px;
}

.header-summary {
	text-align: center;
	padding-top: 100px;
	font-size: 38px;
	color: #000000;
}

.header-label {
	position: absolute;
	margin-top: 13px;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	color: #000000;
	background: #ffffff;
	border-radius: 10px;
	max-width: max-content;
}
</style>
