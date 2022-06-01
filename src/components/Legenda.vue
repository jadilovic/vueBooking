<template>
	<div id="legenda">
		<div class="info">
			<div id="color-accommodation" class="box-color"></div>
			<div class="info-text">
				{{ `${Math.floor(pieData[0]?.percentage * 100)}% accommodation` }}
			</div>
		</div>
		<div class="info">
			<div id="color-transport" class="box-color"></div>
			<div class="info-text">
				{{ `${Math.floor(pieData[1]?.percentage * 100)}% transport` }}
			</div>
		</div>
		<div class="info">
			<div id="color-food" class="box-color"></div>
			<div class="info-text">
				{{ `${Math.floor(pieData[2]?.percentage * 100)}% food` }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['pieData'],
};
</script>

<style></style>
