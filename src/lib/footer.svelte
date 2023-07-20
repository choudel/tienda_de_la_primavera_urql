<script>
	import { theme } from '../stores';
</script>

<div class="footer" class:dark={$theme}>
	<h3>DubrosRendann<br />a.k.a<br />Choudel</h3>
</div>

<style lang="scss">
	$sm: 576px;
	$md: 768px;
	$lg: 992px;
	* {
		font-family: 'Montserrat Alternates Regular';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 20px;
	}
	.footer {
		height: calc(20vmax - 8px);
		color: #004242;
		display: grid;
		background-color: #b3c99c;
		justify-content: center;
		align-items: center;
		padding: 8px;
		border-width: 2px 2px 0px 2px;
		border-style: solid;
		border-color: #ddffbb;
		border-radius: 32px 32px 0px 0px;
		text-align: center;
	}
	.dark {
		color: aliceblue;
		@media only screen and (max-width: $sm) {
			background-color: #00607a;
		}
		@media only screen and (min-width: $sm) {
			background-color: #005066;
		}
		@media only screen and (min-width: $md) {
			background-color: #004052;
		}
		@media only screen and (min-width: $lg) {
			background-color: #00303d;
		}
	}
</style>
