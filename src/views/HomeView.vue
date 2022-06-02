<template>
	<div class="container-home">
		<div class="header">
			<span class="font-link"> Lorem<b>Ipsum</b> </span>
		</div>
		<div class="description">
			<span class="font-link">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged.
				<p>
					It was popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem
					Ipsum.
				</p>
			</span>
		</div>
		<router-link to="/accommodation">
			<div class="footer col-12 col-s-12">
				<p class="font-link">Start Quiz</p>
			</div>
		</router-link>
	</div>
</template>

<script>
import { watchEffect } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

export default {
	name: 'HomeView',
	components: {},
	setup() {
		const completed = localStorage.getItem('completed');
		const edit = localStorage.getItem('edit');
		const router = useRouter();
		watchEffect(() => {
			if (completed === 'completed' || edit === 'edit') {
				router.push({ name: 'Summary' });
			} else {
				localStorage.removeItem('accommodation');
				localStorage.removeItem('transport');
				localStorage.removeItem('food');
			}
		});
	},
};
</script>

<style>
.container-home {
	height: 785px;
	border-radius: 20px;
	padding-left: 15px;
	padding-right: 15px;
}
.font-link {
	font-family: 'Ubuntu', sans-serif;
	font-weight: 400;
	size: 16px;
}

b {
	font-weight: 700;
}

.description {
	text-align: left;
	margin-top: 70px;
	margin-left: 35px;
	margin-right: 35px;
	font-size: 16px;
	line-height: 160%;
	font-feature-settings: 'pnum' on, 'lnum' on;
	color: #1f2c41;
}

.footer a {
	color: #ffffff;
}

.footer {
	position: sticky;
	margin-top: 60px;
	bottom: 0px;
	height: 72px;
	padding: 9px;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	background: #111111;
	border-radius: 20px 20px 0px 0px;
	text-align: center;
	color: white;
}
</style>
