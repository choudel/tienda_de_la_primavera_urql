<script>
	import FirstAcc from './first-acc.svelte';
</script>

<FirstAcc>
	<div class="second_accordion">
		<a href="/" class="login">Login</a>
		<a href="/" class="logo"><div class="icon">P</div></a>
		<a href="/" class="home">home</a>
		<slot />
		<a href="/" class="blog">Page_5</a>
	</div>
</FirstAcc>

<style lang="scss">
	$sm: 576px;
	$md: 768px;
	$lg: 992px;
	$height: 4vh;
	$shadow: #ddffbb20;
	a {
		color: #004242;
		text-align: center;
		text-decoration: none;
		padding: 10px 10px;
	}
	.second_accordion {
		align-items: center;
		border-radius: 32px;
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
	.logo {
		grid-area: logo;
		min-height: $height;
		align-items: center;
		justify-items: center;

		@media only screen and (max-width: $sm) {
			display: none;
			background-color: var(--color2);
			&:hover {
				background-color: $shadow;
				border-radius: 32px 0 0 32px;
			}
		}
		@media only screen and (min-width: $sm) {
			display: none;
			background-color: var(--color2);
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
			background-color: var(--color2);
			&:hover {
				background-color: $shadow;
			}
		}
		@media only screen and (min-width: $sm) {
			background-color: var(--color2);
			&:hover {
				background-color: $shadow;
			}
		}
		@media only screen and (min-width: $md) {
			display: grid;
			height: 56px;
			&:hover {
				background-color: $shadow;
			}
		}
		@media only screen and (min-width: $lg) {
			display: grid;
			height: 56px;
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
			min-height: 56px;
		}
		@media only screen and (max-width: $sm) {
			background-color: var(--color2);
			border-radius: 0;
		}
		@media only screen and (min-width: $sm) {
			background-color: var(--color2);
			border-radius: 0;
		}
		@media only screen and (min-width: $md) {
			border-radius: 0 32px 32px 0;
			height: 56px;
		}
		@media only screen and (min-width: $lg) {
			border-radius: 0 32px 32px 0;
			height: 56px;
		}
	}
	.blog {
		display: grid;
		grid-area: blog;
		min-height: $height;
		align-items: center;
		justify-items: center;

		@media only screen and (max-width: $sm) {
			background-color: var(--color2);
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $sm) {
			background-color: var(--color2);
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $md) {
			border-radius: 0;
			height: 56px;
		}
		@media only screen and (min-width: $lg) {
			border-radius: 0;
			height: 56px;
		}
		&:hover {
			background-color: $shadow;
			min-height: 56px;
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
		border: 3px solid #ddffbb;
		border-radius: 50px;
	}
</style>
