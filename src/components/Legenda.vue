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

<style scoped>
#legenda {
	margin-top: 30px;
	margin-left: 20px;
	background-color: white;
	padding: 5px;
}

.info {
	display: flex;
	align-items: center;
}

.box-color {
	height: 15px;
	width: 15px;
}

#color-accommodation {
	background-color: #5181fc;
}

#color-transport {
	background-color: #d73780;
}

#color-food {
	background-color: #61ab04;
}

.info-text {
	margin-left: 11px;
	font-family: 'Ubuntu';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 160%;
	color: #000000;
}
</style>
