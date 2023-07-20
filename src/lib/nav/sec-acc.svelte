<script>
	import FirstAcc from './first-acc.svelte';
	import DarkButton from '$lib/dark-button.svelte';
	import { theme } from '../../stores';
	export let toggle = false;
</script>

<FirstAcc>
	<div class="second_accordion">
		<a href="/" class="login" class:dark={$theme} class:light={!$theme}>Login</a>
		<a href="/" class="logo" class:dark={$theme} class:light={!$theme}><div class="icon">P</div></a>
		<a href="/" class="home" class:dark={$theme} class:light={!$theme}>home</a>
		<slot />
		<div class="blog" class:dark={$theme} class:light={!$theme}><DarkButton /></div>
	</div>
	{#if toggle}
		<slot name="close" />
	{/if}
</FirstAcc>

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
	a {
		color: $text-color;
		text-align: center;
		text-decoration: none;
		padding: 10px 10px;
	}
	.second_accordion {
		align-items: center;
		border-radius: $g-border-radius;
		display: grid;
		@media only screen and (max-width: $sm) {
			grid-template-areas:
				'logo'
				'login'
				'home'
				'page_1'
				'pag1'
				'page_2'
				'pag2'
				'page_3'
				'pag3'
				'page_4'
				'pag4'
				'blog';
			grid-template-columns: auto;
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $sm) {
			grid-template-areas:
				'logo'
				'login'
				'home'
				'page_1'
				'pag1'
				'page_2'
				'pag2'
				'page_3'
				'pag3'
				'page_4'
				'pag4'
				'blog';
			grid-template-columns: auto;
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $md) {
			grid-template-areas:
				'logo home page_1 page_2 page_3 page_4 blog . login '
				'pag1 pag1 pag1 pag1 pag1 pag1 pag1 pag1 pag1'
				'pag2 pag2 pag2 pag2 pag2 pag2 pag2 pag2 pag2'
				'pag3 pag3 pag3 pag3 pag3 pag3 pag3 pag3 pag3'
				'pag4 pag4 pag4 pag4 pag4 pag4 pag4 pag4 pag4';
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto 1fr;
		}
		@media only screen and (min-width: $lg) {
			grid-template-areas:
				'logo home page_1 page_2 page_3 page_4 blog . login '
				'pag1 pag1 pag1 pag1 pag1 pag1 pag1 pag1 pag1'
				'pag2 pag2 pag2 pag2 pag2 pag2 pag2 pag2 pag2'
				'pag3 pag3 pag3 pag3 pag3 pag3 pag3 pag3 pag3'
				'pag4 pag4 pag4 pag4 pag4 pag4 pag4 pag4 pag4';
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto 1fr;
		}
	}
	.dark {
		color: aliceblue;
		@media only screen and (max-width: $sm) {
		}
		@media only screen and (min-width: $sm) {
		}
		@media only screen and (min-width: $md) {
			background-color: #005066;
		}
		@media only screen and (min-width: $lg) {
			background-color: #005066;
		}
	}
	.light {
		@media only screen and (max-width: $sm) {
		}
		@media only screen and (min-width: $sm) {
		}
		@media only screen and (min-width: $md) {
			background-color: var(--color2);
		}
		@media only screen and (min-width: $lg) {
			background-color: var(--color2);
		}
	}
	.logo {
		grid-area: logo;
		min-height: $height;
		align-items: center;
		justify-items: center;
		@media only screen and (max-width: $sm) {
			display: none;
			&:hover {
				background-color: $shadow;
				border-radius: 32px 0 0 32px;
			}
		}
		@media only screen and (min-width: $sm) {
			display: none;
			&:hover {
				background-color: $shadow;
				border-radius: 32px 0 0 32px;
			}
		}
		@media only screen and (min-width: $md) {
			display: grid;
			border-radius: 32px 0 0 32px;
			&:hover {
				background-color: $shadow;
				border-radius: 32px 0 0 32px;
			}
		}
		@media only screen and (min-width: $lg) {
			display: grid;
			border-radius: 32px 0 0 32px;
			&:hover {
				background-color: $shadow;
				border-radius: 32px 0 0 32px;
			}
		}
	}
	.home {
		display: grid;
		min-height: $height;
		align-items: center;
		justify-items: center;
		grid-area: home;
		@media only screen and (max-width: $sm) {
			&:hover {
				background-color: $shadow;
			}
		}
		@media only screen and (min-width: $sm) {
			&:hover {
				background-color: $shadow;
			}
		}
		@media only screen and (min-width: $md) {
			display: grid;
			height: $button-height;
			&:hover {
				background-color: $shadow;
			}
		}
		@media only screen and (min-width: $lg) {
			display: grid;
			height: $button-height;
			&:hover {
				background-color: $shadow;
			}
		}
	}
	.login {
		display: grid;
		grid-area: login;
		min-height: $height;
		align-items: center;
		justify-items: center;
		border-radius: 0 32px 32px 0;
		&:hover {
			background-color: $shadow;
			min-height: $button-height;
		}
		@media only screen and (max-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $md) {
			border-radius: 0 32px 32px 0;
			height: $button-height;
		}
		@media only screen and (min-width: $lg) {
			border-radius: 0 32px 32px 0;
			height: $button-height;
		}
	}
	.blog {
		display: grid;
		grid-area: blog;
		min-height: $height;
		align-items: center;
		justify-items: center;
		padding: 10px 10px;
		@media only screen and (max-width: $sm) {
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $sm) {
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $md) {
			border-radius: 0;
			height: $button-height;
		}
		@media only screen and (min-width: $lg) {
			border-radius: 0;
			height: $button-height;
		}
		&:hover {
			background-color: $shadow;
			min-height: $button-height;
		}
	}
	.icon {
		display: grid;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0px;
		font-family: 'Montserrat Alternates Bold';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 39px;
		width: 50px;
		height: 50px;
		border: 3px solid $border-color;
		border-radius: 50px;
	}
</style>
