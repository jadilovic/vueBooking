<template>
	<div class="row">
		<div v-for="(item, index) in data" :key="item.name">
			<Card :item="item" :index="index" :changeObject="changeObject" />
		</div>
	</div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
	props: ['data', 'updateData', 'selection'],
	components: { Card },
	setup(props) {
		const { data, updateData, selection } = props;
		let prevIndex = -1;
		const changeObject = (objectIndex) => {
			const index = objectIndex;
			if (index === prevIndex) {
				data.forEach((item) => (item.selected = false));
				localStorage.removeItem(selection);
				prevIndex = -1;
				updateData(data);
			} else {
				prevIndex = index;
				data.forEach((item) => (item.selected = false));
				data[index].selected = true;
				localStorage.setItem(selection, JSON.stringify(data[index]));
				updateData(data);
			}
		};
		console.log(prevIndex);
		return { data, updateData, changeObject };
	},
};
</script>

<style>
.row {
	margin-top: 70px;
	content: '';
	clear: both;
	display: table;
}
</style>
