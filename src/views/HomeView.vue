<template>
	<div class="container">
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
export default {
	name: 'HomeView',
	components: {},
};
</script>

<style>
.font-link {
	font-family: 'Ubuntu', sans-serif;
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
