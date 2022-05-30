<template>
	<div class="row">
		<div v-for="(item, index) in data" :key="item.name">
			<Card
				:item="item"
				:index="index"
				:changeObject="changeObject"
				:selection="selection"
			/>
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
		const getIndexIfPrevSelected = () => {
			data.forEach((item, i) => {
				if (item.selected === true) {
					prevIndex = i;
				}
			});
		};
		getIndexIfPrevSelected();
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
		return { data, updateData, changeObject, selection };
	},
};
</script>

<style>
.row {
	margin-top: 70px;
	content: '';
	clear: both;
	/* display: table; */
}

[class*='col-'] {
	width: 100%;
	float: left;
}

@media only screen and (min-width: 700px) {
	.selection-list {
		margin-top: 70px;
	}
	.col-s-1 {
		width: 8.33%;
	}
	.col-s-2 {
		width: 16.66%;
	}
	.col-s-3 {
		width: 25%;
	}
	.col-s-4 {
		width: 33.33%;
	}
	.col-s-5 {
		width: 41.66%;
	}
	.col-s-6 {
		width: 47%;
		margin-left: 1.5%;
		margin-right: 1.5%;
	}
	.col-s-7 {
		width: 58.33%;
	}
	.col-s-8 {
		width: 66.66%;
	}
	.col-s-9 {
		width: 75%;
	}
	.col-s-10 {
		width: 83.33%;
	}
	.col-s-11 {
		width: 91.66%;
	}
	.col-s-12 {
		width: 100%;
	}
}
@media only screen and (min-width: 900px) {
	.col-1 {
		width: 8.33%;
	}
	.col-2 {
		width: 16.66%;
	}
	.col-3 {
		width: 25%;
	}
	.col-4 {
		width: 30.33%;
		margin-left: 1.5%;
		margin-right: 1.5%;
	}
	.col-5 {
		width: 41.66%;
	}
	.col-6 {
		width: 47%;
		margin-left: 1.5%;
		margin-right: 1.5%;
	}
	.col-7 {
		width: 58.33%;
	}
	.col-8 {
		width: 66.66%;
	}
	.col-9 {
		width: 75%;
	}
	.col-10 {
		width: 83.33%;
	}
	.col-11 {
		width: 91.66%;
	}
	.col-12 {
		width: 100%;
	}
}
</style>
