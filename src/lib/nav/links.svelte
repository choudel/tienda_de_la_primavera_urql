<script>
	import Clickable from './clickable.svelte';
	/**
	 * @type {{ element_1: any; element_2: any; element_3: any; element_4: any; }}
	 */
	export let data;
</script>

<Clickable>
	<div slot="page_1" class="sub_page_1">
		{#each data.element_1 as detail}
			<a href={detail.link}>{detail.page}</a>
		{/each}
	</div>
	<div slot="page_2" class="sub_page_2">
		{#each data.element_2 as detail}
			<a href={detail.link}>{detail.page}</a>
		{/each}
	</div>
	<div slot="page_3" class="sub_page_3">
		{#each data.element_3 as detail}
			<a href={detail.link}>{detail.page}</a>
		{/each}
	</div>
	<div slot="page_4" class="sub_page_4">
		{#each data.element_4 as detail}
			<a href={detail.link}>{detail.page}</a>
		{/each}
	</div>
</Clickable>

<style lang="scss">
	$sm: 576px;
	$md: 768px;
	$lg: 992px;
	div {
		@media only screen and (max-width: $sm) {
			display: grid;
			padding: 10px;
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $sm) {
			display: grid;
			padding: 10px;
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $md) {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
		@media only screen and (min-width: $lg) {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
	div > a {
		display: grid;
		padding: 10px;
		text-align: left;
		margin: 2px;
		border: 2px solid;
		background-color: #e0947d;
		border-color: #e0947d;
		border-radius: 32px;
		@media only screen and (max-width: $sm) {
		}
		@media only screen and (min-width: $sm) {
			display: grid;
			padding: 10px;
		}
		@media only screen and (min-width: $md) {
			height: 15vh;
			justify-content: center;
			align-content: center;
		}
		@media only screen and (min-width: $lg) {
			height: 15vh;
			justify-content: center;
			align-content: center;
		}
		&:hover {
			background-color: #e0947d50;
		}
	}
	.sub_page_1 {
		background-color: var(--color3);
	}
	.sub_page_2 {
		background-color: var(--color3);
	}
	.sub_page_3 {
		background-color: var(--color3);
	}
	.sub_page_4 {
		background-color: var(--color3);
	}
</style>
