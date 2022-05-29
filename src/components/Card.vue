<template>
	<div>
		Name: {{ itemObject.name }} Cost: {{ itemObject.cost }} Photo:
		{{ itemObject.photo }} Selected:
		{{ itemObject.selected }}
		<button @click="changeObject(index)">Change data</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	props: ['item', 'index', 'changeObject'],
	setup(props) {
		const itemObject = ref({});
		const { item, index, changeObject } = props;
		itemObject.value = item;
		return { itemObject, index, changeObject };
	},
};
</script>

<style></style>
