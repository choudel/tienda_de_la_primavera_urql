<script>
	import { theme } from '../stores';
</script>

<div class="search" class:dark={$theme}>
	<label class="up" for="input-bar">Search for an Item</label>
	<div class="down">
		<button class="submit"><div class="icon"><img src="scope.svg" alt="scope" /></div></button>
		<input class="text" type="text" name="input-bar" class:drk-text={$theme} />
	</div>
</div>

<style lang="scss">
	$sm: 576px;
	$md: 768px;
	$lg: 992px;
	$shadow: #c7e9b0;
	$break: 768px;
	$text-color: #004242;
	$border-color: #ffffff50;
	$g-border-radius: 32px;
	.icon {
		display: grid;
		background: #b3c99c;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0px;
		font-family: 'Montserrat Alternates Bold';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 39px;
		width: 40px;
		height: 40px;
		border-radius: 50px;
		&:hover {
			background-color: $shadow;
		}
	}
	.search {
		font-family: 'Montserrat Alternates regular';
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: $text-color;
		display: grid;
		grid-template-rows: calc(13vmax / 2) calc(13vmax / 2);
		align-items: center;
		width: 25vmax;
		height: 13vmax;
		padding: 8px;
		background: #ffffff20;
		border: 2px solid $border-color;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: $g-border-radius;
		@media only screen and (max-width: $break) {
			width: calc(100vw - 78px);
			height: 116px;
		}
	}
	.up {
		display: grid;
		height: 5vmax;
		align-items: center;
		@media only screen and (max-width: $break) {
			width: 80vw;
		}
		@media only screen and (min-width: $lg) {
			margin: 10px;
		}
	}
	.down {
		display: grid;
		height: fit-content;
	}
	.down > input {
		width: calc(25vmax - 72px);
		padding-left: 66px;
		margin-bottom: 10px;
		@media only screen and (max-width: $break) {
			width: calc((100vw - 78px) - 72px);
		}
		@media only screen and (min-width: $lg) {
			width: calc(25vmax - 92px);
			margin: 10px;
		}
	}
	.text {
		background: #e1d7c6;
		display: grid;
		position: absolute;
		height: 40px;
		padding: 0;
		margin: 0;
		border: 2px solid #ffffff50;
		border-radius: 50px;
		@media only screen and (max-width: $break) {
			width: 80vw;
		}
	}
	.drk-text {
		background: #e1d7c650;
	}
	.submit {
		height: 66px;
		width: fit-content;
		position: relative;
		top: -11px;
		left: 2px;
		z-index: 2;
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		@media only screen and (min-width: $lg) {
			top: -1px;
			left: 12px;
		}
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
