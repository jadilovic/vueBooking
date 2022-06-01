<template>
	<div
		@click="changeObject(index)"
		:id="index"
		:key="itemObject.name"
		class="card col-4 col-s-6"
		:class="itemObject.selected ? itemObject.photo + 'Dark' : itemObject.photo"
	>
		<div
			v-if="itemObject.selected"
			class="circle"
			:class="
				selection === 'accommodation'
					? 'accommCircle'
					: selection === 'transport'
					? 'transportCircle'
					: 'foodCircle'
			"
			:id="index"
		>
			<div class="check">
				<img src="@/assets/icons/check.svg" alt="check mark" />
			</div>
		</div>
		<div
			:id="index"
			class="infoButton font-nunito"
			:class="
				!itemObject.selected
					? ''
					: selection === 'accommodation'
					? 'accommColor'
					: selection === 'transport'
					? 'transportColor'
					: 'foodColor'
			"
		>
			<span class="info-left">
				{{ itemObject.name }}
			</span>
			<span class="info-right"> ${{ itemObject.cost }} </span>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	props: ['item', 'index', 'changeObject', 'selection'],
	setup(props) {
		const itemObject = ref({});
		const { item, index, changeObject, selection } = props;
		itemObject.value = item;
		return { itemObject, index, changeObject, selection };
	},
};
</script>

<style>
.backgroundScenic {
	background-image: url('../assets/images/accommodation-scenic.jpeg');
}

.backgroundScenicDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/accommodation-scenic.jpeg');
}

.backgroundQuaint {
	background-image: url('../assets/images/accommodation-quaint.jpeg');
}

.backgroundQuaintDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/accommodation-quaint.jpeg');
}

.backgroundCheap {
	background-image: url('../assets/images/accommodation-cheap.jpeg');
}

.backgroundCheapDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/accommodation-cheap.jpeg');
}

.card {
	position: relative;
	cursor: pointer;
	margin-bottom: 35px;
	font-size: 16px;
	color: #1f2c41;
	border-radius: 20px;
}

.infoButton {
	height: 75px;
	margin-top: 170px;
	font-size: 16px;
	background: #ffffff;
	border-radius: 20px;
}

.circle {
	position: absolute;
	width: 57px;
	height: 57px;
	top: 35%;
	left: 50%;
	margin: -25px 0 0 -25px;
	border-radius: 100px;
}
.check {
	position: absolute;
	left: 20.83%;
	right: 20.83%;
	top: 20.17%;
	bottom: 29.17%;
	color: #ffffff;
}

.info-left {
	float: left;
}

.info-right {
	float: right;
}

.accommColor {
	color: #5181fc;
}

.transportColor {
	color: #d73780;
}

.foodColor {
	color: #61ab04;
}

.accommCircle {
	background: #5181fc;
}

.transportCircle {
	background: #d73780;
}

.foodCircle {
	background: #61ab04;
}
</style>
