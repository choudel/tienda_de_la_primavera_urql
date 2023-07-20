<script>
	import { theme } from '../stores';
</script>

<div class="title" class:dark={$theme}>
	<h1>Tienda de la primavera</h1>
</div>

<style lang="scss">
	$sm: 576px;
	$md: 768px;
	$lg: 992px;
	$text-color: #004242;
	@font-face {
		font-family: 'Permanent Marker';
		src: url('/fonts/PermanentMarker-Regular.ttf');
		font-display: swap;
	}
	.title {
		height: calc(35vmax / 2);
		display: grid;
		text-align: center;
		font-family: 'Permanent Marker';
		font-weight: 400;
		font-size: 25px;
		line-height: 35px;
		color: $text-color;
		@media only screen and (max-width: $sm) {
			height: auto;
			padding-top: 32px;
			padding-bottom: 32px;
			font-size: 35px;
			line-height: 51px;
		}
		@media only screen and (min-width: $sm) {
			height: auto;
			padding-top: 32px;
			padding-bottom: 32px;
			font-size: 35px;
			line-height: 51px;
		}
		@media only screen and (min-width: $md) {
			font-size: 16px;
			line-height: 41px;
		}
		@media only screen and (min-width: $lg) {
			font-size: 16px;
			line-height: 41px;
		}
	}
	.dark {
		color: aliceblue;
	}
</style>
