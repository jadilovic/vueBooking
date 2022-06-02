<template>
	<div class="selection-list col-6 col-s-6">
		<div v-for="item in summaryData" :key="item.service">
			<details>
				<summary>
					<img
						class="img-selection"
						alt="logo"
						height="22"
						v-bind:src="item.logo"
					/>
					{{ item.service }}
					<img alt="move" v-bind:src="caret" class="icon" />
				</summary>
				<div class="info-list">
					<span class="info-cost"> ${{ item.cost }} </span>
					<span class="change-selection" @click="handleChange(item.service)">
						Change?
					</span>
				</div>
			</details>
			<hr class="separator" />
		</div>
	</div>
</template>

<script>
import caret from '../assets/icons/caret.svg';
export default {
	props: ['summaryData'],
	data() {
		return { caret };
	},
	methods: {
		handleChange(service) {
			localStorage.removeItem('completed');
			localStorage.setItem('edit', 'edit');
			this.$router.push({ name: service });
		},
	},
};
</script>

<style scoped>
.selection-list {
	height: 325px;
	border-radius: 20px;
	font-size: 16px;
	color: #000000;
	background-color: #ffffff;
}

details {
	user-select: none;
	margin-top: 15px;
	margin-left: 15px;
	margin-right: 15px;
	font-family: 'Ubuntu';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	color: #000000;
}

details > summary img.icon {
	width: 24px;
	height: 24px;
	transition: all 0.3s;
	margin-left: auto;
}

details[open] summary img.icon {
	transform: rotate(180deg);
}

summary {
	display: flex;
	cursor: pointer;
}

summary::-webkit-details-marker {
	display: none;
}

.img-selection {
	margin-right: 12px;
}

.info-list {
	height: 54px;
}

.info-cost {
	padding-top: 20px;
	float: left;
	font-size: 24px;
}

.change-selection {
	padding-top: 20px;
	float: right;
	cursor: pointer;
	font-size: 24px;
}

.icon {
	height: 15px;
}

.separator {
	width: 100%;
}
</style>
