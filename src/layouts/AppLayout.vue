<template>
	<component :is="layout">
		<slot />
	</component>
</template>

<script>
import DefaultLayout from './DefaultLayout';
import { markRaw, shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
	name: 'AppLayout',
	setup() {
		const layout = shallowRef(DefaultLayout);
		const route = useRoute();
		watch(
			() => route.meta,
			(meta) => {
				console.log(meta.layout);
				layout.value = meta?.layout || DefaultLayout;
			},
			{ immediate: true }
		);
		return { layout };
	},
};
</script>
