<template>
	<div
		class="card"
		@click="changeObject(index)"
		:id="index"
		:key="itemObject.name"
		:class="{ selected: itemObject.selected }"
	>
		<div class="card__aspect-ratio">
			<img :src="itemObject.photo" />
			<div v-if="itemObject.selected" class="card__circle" :id="index">
				<div class="card__check">
					<img src="@/assets/icons/check.svg" alt="check mark" />
				</div>
			</div>
		</div>
		<div :id="index" class="card__info-button font-nunito">
			<span class="card__info-left">
				{{ itemObject.name }}
			</span>
			<span class="card__info-right"> ${{ itemObject.cost }} </span>
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

.card {
	flex: 1;
	position: relative;
	cursor: pointer;
	margin-bottom: 32px;
	font-size: $cardFontSize;
	border-radius: $componentRadius;

	&__aspect-ratio {
		position: relative;
		height: 0;
		padding-bottom: 56.25%;
		border-radius: $componentRadius;
		overflow: hidden;

		.selected & {
			&:after {
				content: '';
				z-index: 1;
				background-color: #000;
				opacity: 0.5;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}
		}

		img {
			position: absolute;
			z-index: 1;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
		}

		&__circle {
			position: absolute;
			z-index: 2;
			width: 57px;
			height: 57px;
			top: calc(50% - 37.5px);
			left: 50%;
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			border-radius: 100px;

			.accommodation & {
				background: $accommColor;
			}
			.transport & {
				background: $transportColor;
			}
			.food & {
				background: $foodColor;
			}
		}
		&__check {
			position: absolute;
			left: 20.83%;
			right: 20.83%;
			top: 20.17%;
			bottom: 29.17%;
			color: #ffffff;
		}
	}

	&__infoButton {
		width: 100%;
		position: absolute;
		height: 75px;
		margin-top: -75px;
		z-index: 2;
		font-size: $cardFontSize;
		background: white;
		border-radius: $componentRadius;

		.selected & {
			.accommodation & {
				color: $accommColor;
			}
			.transport & {
				color: $transportColor;
			}
			.food & {
				color: $foodColor;
			}
		}

		&__info-left {
			float: left;
		}

		&__info-right {
			float: right;
		}
	}
}
</style>
