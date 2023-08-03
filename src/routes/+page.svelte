<script async script lang="ts">
	import { theme } from '../stores';
	import Title from '../lib/title.svelte';
	import Search from '../lib/search.svelte';
	import Card from '../lib/card.svelte';
	import Footer from '../lib/footer.svelte';
	import { Nav } from '$lib/nav';
	import '@github/relative-time-element';
	export let data;
</script>

<main class:dark={$theme}>
	<header>
		<Nav {data} />
	</header>
	<section class="hero">
		<div class="left">
			<Title />
			<relative-time datetime="2023-07-01T16:30:00-08:00"> july 1, 2023 4:30pm </relative-time>
			<Search />
		</div>
		<div class="right">
			<img src="woman.webp" alt="woman" />
		</div>
	</section>
	<section class="container">
		<div class="outer">
			<div class="icon">
				<img src="Polygon-up.svg" alt="up" />
			</div>
		</div>
		<Card />
		<div class="card">
			<h1>Click to view all products</h1>
		</div>
		<div class="outer">
			<div class="icon">
				<img src="Polygon-down.svg" alt="down" />
			</div>
		</div>
	</section>
	<footer>
		<Footer />
	</footer>
</main>

<style lang="scss">
	$break: 768px;
	$sm: 576px;
	$md: 768px;
	$lg: 992px;
	$height: 4vh;
	$button-height: 56px;
	$shadow: #ddffbb20;
	$text-color: #004242;
	$border-color: #ddffbb;
	$secondary-border-color: #e0947d;
	$g-border-radius: 32px;
	$shadow-style: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	$color-ism: #f8f4ea;
	$color-sm: #ece8dd;
	$color-md: #e1d7c6;
	$color-lg: #e1d7c6;
	@font-face {
		font-family: 'Montserrat Alternates Regular';
		src: url('/fonts/MontserratAlternates-Regular.ttf');
		font-display: swap;
	}
	@font-face {
		font-family: 'Montserrat Alternates Bold';
		src: url('/fonts/MontserratAlternates-Bold.ttf');
		font-display: swap;
	}
	main {
		display: grid;
		z-index: 0;
		@media only screen and (max-width: $sm) {
			grid-template-rows: 10vmax auto auto 20vmax;
			padding: 16px;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.35%),
				$color-ism;
		}
		@media only screen and (min-width: $sm) {
			grid-template-rows: 10vmax auto auto 20vmax;
			padding: 16px;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.35%), $color-sm;
		}
		@media only screen and (min-width: $md) {
			grid-template-rows: auto 35vmax 35vmax 20vmax;
			padding: 0 16px;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.35%), $color-md;
		}
		@media only screen and (min-width: $lg) {
			grid-template-rows: auto 35vmax 35vmax 20vmax;
			padding: 0 100px;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.35%), $color-lg;
		}
	}
	.dark {
		color: aliceblue;
		@media only screen and (max-width: $sm) {
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.35%), #000e14;
		}
		@media only screen and (min-width: $sm) {
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.35%), #00141f;
		}
		@media only screen and (min-width: $md) {
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.35%), #001b29;
		}
		@media only screen and (min-width: $lg) {
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.35%), #00293d;
		}
	}
	header {
		z-index: 2;
		padding: 16px;
	}
	section {
		z-index: 1;
		@media only screen and (max-width: $sm) {
			padding-left: 16px;
			padding-right: 16px;
		}
		@media only screen and (min-width: $sm) {
			padding-left: 16px;
			padding-right: 16px;
		}
		@media only screen and (min-width: $md) {
			padding-left: 74px;
			padding-right: 74px;
		}
		@media only screen and (min-width: $lg) {
			padding-left: 74px;
			padding-right: 74px;
		}
	}
	.hero {
		display: grid;

		gap: 8px;
		@media only screen and (max-width: $sm) {
			grid-template-columns: auto;
			grid-template-rows: auto auto;
		}
		@media only screen and (min-width: $sm) {
			grid-template-columns: auto;
			grid-template-rows: auto auto;
		}
		@media only screen and (min-width: $md) {
			grid-template-columns: auto 40vmax;
			grid-template-rows: 35vmax;
		}
		@media only screen and (min-width: $lg) {
			grid-template-columns: auto 40vmax;
			grid-template-rows: 35vmax;
		}
	}
	.left {
		display: grid;
		height: 35vmax;
		justify-items: center;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: $g-border-radius;

		@media only screen and (max-width: $sm) {
			background: none;
			box-shadow: none;
			height: auto;
			padding-top: 16px;
			padding-bottom: 16px;
		}
		@media only screen and (min-width: $sm) {
			background: none;
			box-shadow: none;
			height: auto;
			padding-top: 16px;
			padding-bottom: 16px;
		}
		@media only screen and (min-width: $md) {
			background: rgba(255, 255, 255, 0.45);
			box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
			backdrop-filter: blur(9px);
			-webkit-backdrop-filter: blur(9px);
			border-radius: $g-border-radius;
			border: 1px solid rgba(255, 255, 255, 0.18);
		}
		@media only screen and (min-width: $lg) {
			background: rgba(255, 255, 255, 0.45);
			box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
			backdrop-filter: blur(9px);
			-webkit-backdrop-filter: blur(9px);
			border-radius: $g-border-radius;
			border: 1px solid rgba(255, 255, 255, 0.18);
		}
	}
	.right {
		height: 35vmax;
		border-radius: $g-border-radius;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		@media only screen and (max-width: $sm) {
			display: none;
		}
		@media only screen and (min-width: $sm) {
			display: none;
		}
		@media only screen and (min-width: $md) {
			display: grid;
		}
		@media only screen and (min-width: $lg) {
			display: grid;
		}
	}
	.right > img {
		display: grid;
		width: 40vmax;
		height: 35vmax;
		object-fit: cover;
		border-radius: $g-border-radius;
	}
	.container {
		display: grid;
		z-index: 1;
		gap: 8px;
		@media only screen and (max-width: $sm) {
			grid-template-columns: auto;
			grid-template-rows: auto auto auto auto;
			justify-content: center;
		}
		@media only screen and (min-width: $sm) {
			grid-template-columns: auto;
			grid-template-rows: auto auto auto auto;
			justify-content: center;
		}
		@media only screen and (min-width: $md) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
		@media only screen and (min-width: $lg) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	.card {
		width: auto;
		height: calc(35vmax - 42px);
		margin-top: 8px;
		margin-bottom: 8px;
		padding: 16px;
		align-items: center;
		justify-items: center;
		color: #004242;
		backdrop-filter: blur(3px);
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 32px;
		box-shadow: 0px 35px 68px 0px rgba(225, 215, 198, 0.5),
			inset 0px -2px 16px 0px rgba(225, 215, 198, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);
		@media only screen and (max-width: $sm) {
			display: none;
		}
		@media only screen and (min-width: $sm) {
			display: none;
		}
		@media only screen and (min-width: $md) {
			display: grid;
		}
		@media only screen and (min-width: $lg) {
			display: grid;
		}
	}
	.card > h1 {
		display: grid;
		width: 15vw;
		height: 15vw;
		font-family: 'Montserrat Alternates Bold';
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		text-align: center;
		align-items: center;
		justify-items: center;
		@media only screen and (max-width: $sm) {
			height: auto;
			width: auto;
			padding: 0;
		}
		@media only screen and (min-width: $sm) {
			height: auto;
			width: auto;
			padding: 0;
		}
		@media only screen and (min-width: $md) {
			display: grid;
		}
		@media only screen and (min-width: $lg) {
			display: grid;
		}
	}
	.icon {
		display: none;
		@media only screen and (max-width: $sm) {
			display: grid;
			justify-content: center;
			align-items: center;
			padding: 0;
			width: 20px;
			height: 20px;
			background: #ddffbb;
			border-radius: 50px;
		}
		@media only screen and (min-width: $sm) {
			display: grid;
			justify-content: center;
			align-items: center;
			padding: 0;
			width: 20px;
			height: 20px;
			background: #ddffbb;
			border-radius: 50px;
		}
		@media only screen and (min-width: $md) {
			display: none;
		}
		@media only screen and (min-width: $lg) {
			display: none;
		}
	}
	.outer {
		display: none;
		@media only screen and (max-width: $sm) {
			display: grid;
			justify-content: center;
			align-items: center;
		}
		@media only screen and (min-width: $sm) {
			display: grid;
			justify-content: center;
			align-items: center;
		}
		@media only screen and (min-width: $md) {
			display: none;
		}
		@media only screen and (min-width: $lg) {
			display: none;
		}
	}
	footer {
		padding-left: 16px;
		padding-right: 16px;
		padding-top: 8px;
	}
</style>
