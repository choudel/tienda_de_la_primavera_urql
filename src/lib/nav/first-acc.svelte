<script>
	import { theme } from '../../stores';
</script>

<nav
	class="accordion"
	id="start"
	style="
  --color1:#579BB1;
  --color2:#579BB1;
  --color3:#DDFFBB;
  --color4:#A4BC92"
>
	<div class="first_accordion" class:fa-dark={$theme}>
		<input
			class="first_accordion__input"
			type="checkbox"
			name="first_accordion"
			id="section1"
			class:fai-dark={$theme}
		/>
		<label class="first_accordion__label" for="section1"
			><div class="icon">
				<img src="humberger.svg" alt="humburger" />
			</div>
		</label>
		<a href="/" class="logo1"><div class="icon">P</div></a>

		<div class="first_accordion__content">
			<slot />
		</div>
	</div>
</nav>

<style lang="scss">
	$break: 768px;
	$sm: 576px;
	$md: 768px;
	$lg: 992px;
	$height: 4vh;
	$button-height: 56px;
	$shadow: #ddffbb20;
	$text-color: #004242;
	$border-color: #ffffff50;
	$secondary-border-color: #e0947d;
	$g-border-radius: 32px;
	$shadow-style: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
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
	* {
		font-family: 'Montserrat Alternates Regular';
	}
	.accordion {
		color: $text-color;
		min-height: $height;
	}
	a {
		color: $text-color;
		text-align: center;
		text-decoration: none;
		padding: 10px 10px;
	}
	.first_accordion {
		display: grid;
		min-height: $height;
		background: var(--color1);
		grid-template-areas:
			'logo1 . button'
			'coll coll coll';
		grid-template-columns: 100px auto 100px;
		border: 2px solid $border-color;
		border-radius: $g-border-radius;
		box-shadow: $shadow-style;
		@media only screen and (min-width: $md) {
			background: var(--color2);
		}
		@media only screen and (min-width: $lg) {
			background: var(--color2);
		}
	}
	.fa-dark {
		background-color: #00607a;
	}
	.first_accordion__input {
		display: none;
		background-color: var(--color2);
		@media only screen and (max-width: $sm) {
			&:checked ~ .first_accordion__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $sm) {
			&:checked ~ .first_accordion__content {
				display: grid;
			}
		}
	}
	.fai-dark {
		background-color: #005066;
	}
	.first_accordion__label {
		grid-area: button;
		cursor: pointer;
		padding: 10px;
		border-radius: $g-border-radius;
		&:hover {
			background-color: $shadow;
			border-radius: 0 32px 32px 0;
		}
		@media only screen and (max-width: $sm) {
			display: grid;
			align-items: center;
			justify-items: end;
			padding-right: 15px;
			max-width: 100px;
		}
		@media only screen and (min-width: $sm) {
			display: grid;
			align-items: center;
			justify-items: end;
			padding-right: 15px;
			max-width: 100px;
		}
		@media only screen and (min-width: $md) {
			display: none;
		}
		@media only screen and (min-width: $lg) {
			display: none;
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
	.first_accordion__content {
		text-align: center;
		grid-area: coll;
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
	.logo1 {
		grid-area: logo1;
		&:hover {
			background-color: $shadow;
			border-radius: 32px 0 0 32px;
		}
		@media only screen and (max-width: $sm) {
			display: grid;
			text-align: left;
		}
		@media only screen and (min-width: $sm) {
			display: grid;
			text-align: left;
		}
		@media only screen and (min-width: $md) {
			display: none;
		}
		@media only screen and (min-width: $lg) {
			display: none;
		}
	}
</style>
