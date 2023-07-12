<div class="title">
	<h1>Tienda de la primavera</h1>
</div>

<style lang="scss">
	$sm: 576px;
	$md: 768px;
	$lg: 992px;
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
		color: #004242;
		@media only screen and (max-width: 768px) {
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
</style>
