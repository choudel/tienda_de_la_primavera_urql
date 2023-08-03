<script lang="ts">
	import { theme } from '../stores';
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const client = getContextClient();
	const query = gql`
		query {
			query {
				items {
					nodes {
						item
						id
						price
						image
						sellText
					}
				}
			}
		}
	`;
	$: todos = queryStore({
		client,
		query
	});
	let loading = ['', '', ''];
</script>

{#if $todos.fetching}
	{#each loading as node}
		<div class="card">
			<div class="item-pic">
				<div class="fake-image" />
			</div>
			<div class="label">
				<div class="fake-name" class:dark={$theme} />
				<div class="fake-text" class:dark={$theme} class:light={!$theme} />
				<div class="fake-price" class:dark={$theme} />
			</div>
		</div>
	{/each}
{:else if $todos.error}
	<p>Oh no... {$todos.error.message}</p>
{:else}
	{#each $todos.data.query.items.nodes as node}
		<div class="card" class:bg-dark={$theme} class:bg-light={!$theme}>
			<div class="item-pic">
				<img src={node.image} alt="bag" />
			</div>
			<div class="label">
				<div class="item-name" class:dark={$theme}>{node.item}</div>
				<div class="sell-text" class:dark={$theme} class:light={!$theme}>{node.sellText}</div>
				<div class="price" class:dark={$theme}>{node.price} D.A</div>
			</div>
		</div>
	{/each}
{/if}

<slot />

<style lang="scss">
	$break: 768px;
	$g-border-radius: 32px;
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
	.card {
		display: grid;
		width: auto;
		max-height: calc(35vmax - 42px);
		grid-template-columns: auto;
		grid-template-rows: 15vmax auto;
		margin-top: 8px;
		margin-bottom: 8px;
		padding: 16px;
		gap: 10px;
		@media only screen and (max-width: $break) {
			grid-template-columns: 100px 40vw;
			grid-template-rows: auto;
			width: calc(100vw - 78px);
			height: auto;
			padding: 0;
		}
	}
	.item-pic {
		min-height: 15vmax;
		display: grid;
		border-radius: 32px 32px 0 0;
		justify-content: center;
		align-items: center;
		@media only screen and (max-width: $break) {
			border-radius: 32px 0 0 32px;
			min-height: auto;
		}
	}
	img {
		width: 12vmax;
		height: 12vmax;
		border-radius: $g-border-radius;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		@media only screen and (max-width: $break) {
			height: 100px;
			width: 100px;
			border-radius: 32px 0 0 32px;
		}
	}
	.dark {
		color: aliceblue;
	}
	.light {
		color: #000000;
	}
	.bg-dark {
		background: rgba(255, 255, 255, 0.25);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-radius: 32px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
	.bg-light {
		backdrop-filter: blur(3px);
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 32px;
		box-shadow: 0px 35px 68px 0px rgba(225, 215, 198, 0.5),
			inset 0px -2px 16px 0px rgba(225, 215, 198, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);
	}
	.label {
		color: #004242;
		display: grid;
		gap: 8px;
		padding: 8px;
		justify-content: center;
		align-items: center;
		@media only screen and (max-width: $break) {
			grid-template-columns: calc(100vw - 208px);
			align-items: center;
			justify-content: left;
		}
	}
	.item-name {
		font-family: 'Montserrat Alternates Bold';
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		text-align: center;
		@media only screen and (max-width: $break) {
			text-align: left;
		}
	}
	.sell-text {
		font-family: 'Montserrat Alternates Regular';
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		text-align: center;
		@media only screen and (max-width: $break) {
			text-align: left;
		}
	}

	.price {
		font-family: 'Montserrat Alternates Regular';
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		text-align: center;
		@media only screen and (max-width: $break) {
			text-align: right;
		}
	}
	.fake-image {
		background-color: #00424225;
		width: 12vmax;
		height: 12vmax;
		border-radius: $g-border-radius;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		@media only screen and (max-width: $break) {
			height: 100px;
			width: 100px;
			border-radius: 32px 0 0 32px;
		}
	}
	.fake-name {
		height: 15px;
		width: 80px;
		background-color: #00424225;
		border-radius: $g-border-radius;
	}
	.fake-text {
		height: 15px;
		width: 100px;
		background-color: #00424225;
		border-radius: $g-border-radius;
	}
	.fake-price {
		height: 15px;
		width: 60px;
		background-color: #00424225;
		border-radius: $g-border-radius;
	}
</style>
