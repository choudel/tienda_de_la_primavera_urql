<script>
	import Clickable from './clickable.svelte';
	import { theme } from '../../stores';
	/**
	 * @type {{ element_1: any; element_2: any; element_3: any; element_4: any; }}
	 */
	export let data;
</script>

<Clickable>
	<div slot="page_1" class="sub_page_1" class:light={!$theme} class:dark={$theme}>
		{#each data.element_1 as detail}
			<a href={detail.link}>{detail.page}</a>
		{/each}
	</div>
	<div slot="page_2" class="sub_page_2" class:light={!$theme} class:dark={$theme}>
		{#each data.element_2 as detail}
			<a href={detail.link}>{detail.page}</a>
		{/each}
	</div>
	<div slot="page_3" class="sub_page_3" class:light={!$theme} class:dark={$theme}>
		{#each data.element_3 as detail}
			<a href={detail.link}>{detail.page}</a>
		{/each}
	</div>
	<div slot="page_4" class="sub_page_4" class:light={!$theme} class:dark={$theme}>
		{#each data.element_4 as detail}
			<a href={detail.link}>{detail.page}</a>
		{/each}
	</div>
</Clickable>

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
		border-color: $secondary-border-color;
		border-radius: $g-border-radius;
		@media only screen and (max-width: $sm) {
			display: grid;
			padding: 10px;
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
	.light {
		background-color: var(--color3);
		border-radius: 0;
	}
	.dark {
		background-color: #004052;
		border-radius: 0;
	}
</style>
