<script lang="ts">
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const todos = queryStore({
		client: getContextClient(),
		query: gql`
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
		`
	});
</script>

{#if $todos.fetching}
	<p>Loading...</p>
{:else if $todos.error}
	<p>Oh no... {$todos.error.message}</p>
{:else}
	{#each $todos.data.items.nodes as node}
		<div class="card">
			<div class="item-pic">
				<img src={node.image} alt="bag" />
			</div>
			<div class="label">
				<div class="item-name">{node.item}</div>
				<div class="sell-text">{node.sellText}</div>
				<div class="price">{node.price} D.A</div>
			</div>
		</div>
	{/each}
{/if}

<slot />

<style lang="scss">
	@font-face {
		font-family: 'Montserrat Alternates Thin';
		src: url('MontserratAlternates-Thin.ttf');
		font-display: swap;
	}
	.card {
		display: grid;
		width: 335px;
		height: 326px;
		background: #b3c99c;
		grid-template-columns: auto;
		grid-template-rows: 232px auto;
		border: 2px solid #ddffbb;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 32px;
		margin-top: 8px;
		margin-bottom: 8px;
		padding: 16px;
		gap: 10px;
		@media only screen and (max-width: 815px) {
			grid-template-columns: 100px 40vw;
			grid-template-rows: auto;
			width: calc(100px + 40vw);
			height: auto;
			padding: 0;
		}
	}
	.item-pic {
		display: grid;
		border-radius: 32px 32px 0 0;
		justify-content: center;
		align-items: center;
		@media only screen and (max-width: 815px) {
			border-radius: 32px 0 0 32px;
		}
	}
	img {
		height: 200px;
		width: 200px;
		max-width: 20vw;
		border-radius: 32px;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		@media only screen and (max-width: 815px) {
			height: 100px;
			width: 100px;
			border-radius: 32px 0 0 32px;
		}
	}
	.label {
		color: #004242;
		display: grid;
		gap: 8px;
		padding: 8px;
		justify-content: center;
		align-items: center;
		@media only screen and (max-width: 815px) {
			grid-template-columns: calc(40vw - 28px);
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
		@media only screen and (max-width: 815px) {
			text-align: left;
		}
	}
	.sell-text {
		font-family: 'Montserrat Alternates Regular';
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		color: #000000;
		text-align: center;
		@media only screen and (max-width: 815px) {
			text-align: left;
		}
	}
	.price {
		font-family: 'Montserrat Alternates Regular';
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		text-align: center;
		@media only screen and (max-width: 815px) {
			text-align: right;
		}
	}
</style>
