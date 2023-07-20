<script lang="ts">
	import { theme } from '../../stores';
	import SecAcc from './sec-acc.svelte';
	let selected = 'start';
	let toggle = false;
	$: toggle;
	$: selected;
	function handleDisplay(arg: string) {
		if (selected != arg || !toggle) {
			toggle = true;
		} else {
			toggle = !toggle;
		}
	}
</script>

<SecAcc {toggle}>
	<input
		class="second_accordion__input"
		type="radio"
		name="second_accordion"
		id="page_1"
		value="pag1"
		bind:group={selected}
		on:click={() => handleDisplay('pag1')}
	/>
	<label
		class="second_accordion__label"
		for="page_1"
		id="page_1_id"
		class:dark={$theme}
		class:light={!$theme}>page_1</label
	>

	<div class="second_accordion__content" id="page_1__content" class:toggle={!toggle}>
		{#if toggle}
			<slot name="page_1" />
		{/if}
	</div>

	<input
		class="second_accordion__input"
		type="radio"
		name="second_accordion"
		id="page_2"
		value="pag2"
		bind:group={selected}
		on:click={() => handleDisplay('pag2')}
	/>
	<label
		class="second_accordion__label"
		for="page_2"
		id="page_2_id"
		class:dark={$theme}
		class:light={!$theme}>page_2</label
	>

	<div class="second_accordion__content" id="page_2__content" class:toggle={!toggle}>
		{#if toggle}
			<slot name="page_2" />
		{/if}
	</div>

	<input
		class="second_accordion__input"
		type="radio"
		name="second_accordion"
		id="page_3"
		value="pag3"
		bind:group={selected}
		on:click={() => handleDisplay('pag3')}
	/>
	<label
		class="second_accordion__label"
		for="page_3"
		id="page_3_id"
		class:dark={$theme}
		class:light={!$theme}>page_3</label
	>

	<div class="second_accordion__content" id="page_3__content" class:toggle={!toggle}>
		{#if toggle}
			<slot name="page_3" />
		{/if}
	</div>

	<input
		class="second_accordion__input"
		type="radio"
		name="second_accordion"
		id="page_4"
		value="pag4"
		bind:group={selected}
		on:click={() => handleDisplay('pag4')}
	/>
	<label
		class="second_accordion__label"
		for="page_4"
		id="page_4_id"
		class:dark={$theme}
		class:light={!$theme}>page_4</label
	>

	<div class="second_accordion__content" id="page_4__content" class:toggle={!toggle}>
		{#if toggle}
			<slot name="page_4" />
		{/if}
	</div>

	<div slot="close" class="test" class:toggle={!toggle} on:click={() => (toggle = false)}>
		{!toggle ? '' : 'close'}
	</div>
</SecAcc>

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
	.dark {
		color: aliceblue;
		@media only screen and (max-width: $sm) {
			background-color: #00607a;
		}
		@media only screen and (min-width: $sm) {
			background-color: #00607a;
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
			background-color: var(--color2);
		}
		@media only screen and (min-width: $sm) {
			background-color: var(--color2);
		}
	}
	.second_accordion__input {
		display: none;
		padding: 10px 10px;
		align-items: center;
		justify-items: center;
	}
	.second_accordion__label {
		display: grid;
		cursor: pointer;
		padding: 10px 10px;
		z-index: 1;
	}
	.second_accordion__content {
		text-align: left;
		display: none;
	}

	#page_1 {
		@media only screen and (max-width: $sm) {
			display: none;
			&:checked ~ #page_1__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $sm) {
			display: none;
			&:checked ~ #page_1__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $md) {
			&:checked ~ #page_1__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $lg) {
			&:checked ~ #page_1__content {
				display: grid;
			}
		}
	}
	#page_1_id {
		display: grid;
		grid-area: page_1;
		min-height: $height;
		align-items: center;
		justify-items: center;
		@media only screen and (max-width: $sm) {
		}
		@media only screen and (min-width: $sm) {
		}
		@media only screen and (min-width: $md) {
			height: $button-height;
		}
		@media only screen and (min-width: $lg) {
			height: $button-height;
		}
		&:hover {
			background-color: $shadow;
			min-height: $button-height;
		}
	}
	#page_1__content {
		grid-area: pag1;
		border-radius: $g-border-radius;
		@media only screen and (max-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $md) {
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $lg) {
			border-radius: 0 0 32px 32px;
		}
	}

	#page_2 {
		@media only screen and (max-width: $sm) {
			display: none;
			&:checked ~ #page_2__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $sm) {
			display: none;
			&:checked ~ #page_2__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $md) {
			&:checked ~ #page_2__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $lg) {
			&:checked ~ #page_2__content {
				display: grid;
			}
		}
	}
	#page_2_id {
		display: grid;
		grid-area: page_2;
		min-height: $height;
		align-items: center;
		justify-items: center;
		@media only screen and (max-width: $sm) {
		}
		@media only screen and (min-width: $sm) {
		}
		@media only screen and (min-width: $md) {
			height: $button-height;
		}
		@media only screen and (min-width: $lg) {
			height: $button-height;
		}
		&:hover {
			background-color: $shadow;
			min-height: $button-height;
		}
	}
	#page_2__content {
		grid-area: pag2;
		border-radius: $g-border-radius;
		@media only screen and (max-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $md) {
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $lg) {
			border-radius: 0 0 32px 32px;
		}
	}

	#page_3 {
		@media only screen and (max-width: $sm) {
			display: none;
			&:checked ~ #page_3__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $sm) {
			display: none;
			&:checked ~ #page_3__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $md) {
			&:checked ~ #page_3__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $lg) {
			&:checked ~ #page_3__content {
				display: grid;
			}
		}
	}
	#page_3_id {
		display: grid;
		grid-area: page_3;
		min-height: $height;
		align-items: center;
		justify-items: center;
		@media only screen and (max-width: $sm) {
		}
		@media only screen and (min-width: $sm) {
		}
		@media only screen and (min-width: $md) {
			height: $button-height;
		}
		@media only screen and (min-width: $lg) {
			height: $button-height;
		}
		&:hover {
			background-color: $shadow;
			min-height: $button-height;
		}
	}
	#page_3__content {
		grid-area: pag3;
		border-radius: $g-border-radius;
		@media only screen and (max-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $md) {
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $lg) {
			border-radius: 0 0 32px 32px;
		}
	}

	#page_4 {
		@media only screen and (max-width: $sm) {
			display: none;
			&:checked ~ #page_4__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $sm) {
			display: none;
			&:checked ~ #page_4__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $md) {
			&:checked ~ #page_4__content {
				display: grid;
			}
		}
		@media only screen and (min-width: $lg) {
			&:checked ~ #page_4__content {
				display: grid;
			}
		}
	}
	#page_4_id {
		padding-right: 8px;
		padding-left: 18px;
		display: grid;
		grid-area: page_4;
		max-width: 140px;
		min-height: $height;
		align-items: center;
		justify-items: center;
		@media only screen and (max-width: $sm) {
			max-width: 100vw;
		}
		@media only screen and (min-width: $sm) {
			max-width: 100vw;
		}
		@media only screen and (min-width: $md) {
			height: $button-height;
		}
		@media only screen and (min-width: $lg) {
			height: $button-height;
		}
		&:hover {
			background-color: $shadow;
			min-height: $button-height;
		}
	}
	#page_4__content {
		grid-area: pag4;
		border-radius: $g-border-radius;
		@media only screen and (max-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $sm) {
			border-radius: 0;
		}
		@media only screen and (min-width: $md) {
			border-radius: 0 0 32px 32px;
		}
		@media only screen and (min-width: $lg) {
			border-radius: 0 0 32px 32px;
		}
	}
	.test {
		padding: 8px;
		margin: 8px;
		border-radius: $g-border-radius;
		z-index: 2;
		cursor: pointer;
		text-align: center;
		background-color: var(--color4);
		box-shadow: $shadow-style;
		&:hover {
			background-color: $shadow;
		}
	}
</style>
