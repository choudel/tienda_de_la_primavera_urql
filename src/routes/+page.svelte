<script lang="ts">
	import Nav from '../lib/nav.svelte';
	import Title from '../lib/title.svelte';
	import Search from '../lib/search.svelte';
	import Card from '../lib/card.svelte';
	import Footer from '../lib/footer.svelte';
	import { Client, setContextClient, cacheExchange, fetchExchange } from '@urql/svelte';

	const client = new Client({
		url: 'http://localhost:3000/graphql',
		exchanges: [cacheExchange, fetchExchange]
	});

	setContextClient(client);
</script>

<main>
	<header>
		<Nav />
	</header>
	<section class="hero">
		<Title />
		<Search />
	</section>
	<section class="container">
		<div class="outer">
			<div class="icon">
				<img src="Polygon-up.svg" alt="up" />
			</div>
		</div>
		<Card />
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
	$break: 815px;
	main {
		z-index: 0;
		display: grid;
		grid-template-rows: auto 35vmax 35vmax 20vmax;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.35%), #a4bc92;
		@media only screen and (max-width: 815px) {
			grid-template-rows: 10vmax auto auto 20vmax;
			padding: 16px;
		}
	}
	header {
		z-index: 2;
		padding: 16px;
	}
	section {
		z-index: 1;
		padding-left: 74px;
		padding-right: 74px;
		@media only screen and (max-width: 815px) {
			padding-left: 16px;
			padding-right: 16px;
		}
	}
	.container {
		display: grid;
		z-index: 1;
		grid-template-columns: auto auto auto auto;

		gap: 8px;
		@media only screen and (max-width: 815px) {
			grid-template-columns: auto;
			grid-template-rows: auto auto auto auto;
			justify-content: center;
		}
	}
	.icon {
		display: none;
		@media only screen and (max-width: $break) {
			display: grid;
			justify-content: center;
			align-items: center;
			padding: 0;
			width: 20px;
			height: 20px;
			background: #ddffbb;
			border-radius: 50px;
		}
	}
	.outer {
		display: none;
		@media only screen and (max-width: $break) {
			display: grid;
			justify-content: center;
			align-items: center;
		}
	}
	footer {
		padding-left: 16px;
		padding-right: 16px;
		padding-top: 8px;
	}
</style>
