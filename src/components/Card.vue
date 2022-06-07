<template>
	<div
		class="card"
		@click="changeObject(index)"
		:id="index"
		:key="itemObject.name"
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

<style lang="scss">
@import '../styles/global.scss';
</style>
