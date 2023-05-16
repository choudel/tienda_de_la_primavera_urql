<script lang="ts">
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const todos = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				items {
					nodes {
						item
						nodeId
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
	img {
		max-width: 20vw;
		height: auto;
	}
</style>
