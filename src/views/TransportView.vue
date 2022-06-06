<template>
	<div class="container transport row">
		<div class="header">
			<span class="font-nunito">
				<img
					class="svgTransport"
					alt="planes buses and cars"
					src="@/assets/icons/transport.svg"
				/>
				<b>Transport</b>
			</span>
		</div>
		<div v-if="transportData.length">
			<Cards
				:data="transportData"
				:updateData="updateData"
				selection="transport"
			/>
		</div>
		<router-link
			:to="edit ? '/summary' : selectedTransport ? '/food' : ''"
			:class="{ disabled: !selectedTransport }"
		>
			<div
				class="footer col-12 col-s-12"
				:class="
					selectedTransport
						? 'footer-transport-color'
						: 'footer-transport-color-dark not-allowed'
				"
			>
				<p class="font-link">
					{{ edit ? 'Edit transport' : 'Select transport' }}
					<span :class="!edit ? 'button-next' : ''">{{
						!edit ? '2 / 3' : ''
					}}</span>
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import transport from '../assets/data/transports';
import Cards from '../components/Cards.vue';

export default {
	components: { Cards },
	setup() {
		const transportData = ref(transport);
		const selectedTransport = ref(null);
		const edit = ref(false);
		const router = useRouter();

		const updateData = (data) => {
			transportData.value = data;
		};

		watch(transportData.value, () => {
			const selected = transportData.value.some(
				(item) => item.selected === true
			);
			selectedTransport.value = selected;
		});

		watchEffect(() => {
			const prevSelected = JSON.parse(localStorage.getItem('transport'));
			const change = localStorage.getItem('edit');
			const completed = localStorage.getItem('completed');
			const selected = transportData.value.some(
				(item) => item.selected === true
			);
			selectedTransport.value = selected;
			if (completed === 'completed') {
				router.push({ name: 'Summary' });
			}
			if (change === 'edit') {
				edit.value = true;
			} else {
				edit.value = false;
			}
			if (prevSelected?.name) {
				transportData.value.forEach((item) => {
					if (item.name === prevSelected.name) {
						item.selected = true;
					}
				});
			} else {
				transportData.value.forEach((item) => (item.selected = false));
			}
		});
		return { transportData, updateData, selectedTransport, edit };
	},
};
</script>

<style lang="scss">
@import '../styles/global.scss';

.backgroundLuxury {
	background-image: url('../assets/images/transport-luxury.jpeg');
}

.backgroundLuxuryDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/transport-luxury.jpeg');
}

.backgroundPublic {
	background-image: url('../assets/images/transport-public.jpeg');
}

.backgroundPublicDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/transport-public.jpeg');
}

.backgroundTransportCheap {
	background-image: url('../assets/images/transport-cheap.jpeg');
}

.backgroundTransportCheapDark {
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('../assets/images/transport-cheap.jpeg');
}
</style>
