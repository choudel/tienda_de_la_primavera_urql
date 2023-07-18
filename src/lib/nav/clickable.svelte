<script lang="ts">
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

<SecAcc>
	<input
		class="second_accordion__input"
		type="radio"
		name="second_accordion"
		id="page_1"
		value="pag1"
		bind:group={selected}
		on:click={() => handleDisplay('pag1')}
	/>
	<label class="second_accordion__label" for="page_1" id="page_1_id">page_1</label>

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
	<label class="second_accordion__label" for="page_2" id="page_2_id">page_2</label>

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
	<label class="second_accordion__label" for="page_3" id="page_3_id">page_3</label>

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
	<label class="second_accordion__label" for="page_4" id="page_4_id">page_4</label>

	<div class="second_accordion__content" id="page_4__content" class:toggle={!toggle}>
		{#if toggle}
			<slot name="page_4" />
		{/if}
	</div>
</SecAcc>

<style lang="scss">
	$sm: 576px;
	$md: 768px;
	$lg: 992px;
	$height: 4vh;
	$shadow: #ddffbb20;
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
			background-color: var(--color2);
		}
		@media only screen and (min-width: $sm) {
			background-color: var(--color2);
		}
		@media only screen and (min-width: $md) {
			height: 56px;
		}
		@media only screen and (min-width: $lg) {
			height: 56px;
		}
		&:hover {
			background-color: $shadow;
			min-height: 56px;
		}
	}
	#page_1__content {
		grid-area: pag1;
		background-color: var(--color3);
		border-radius: 32px;
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
			background-color: var(--color2);
		}
		@media only screen and (min-width: $sm) {
			background-color: var(--color2);
		}
		@media only screen and (min-width: $md) {
			height: 56px;
		}
		@media only screen and (min-width: $lg) {
			height: 56px;
		}
		&:hover {
			background-color: $shadow;
			min-height: 56px;
		}
	}
	#page_2__content {
		grid-area: pag2;
		background-color: var(--color3);
		border-radius: 32px;
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
			background-color: var(--color2);
		}
		@media only screen and (min-width: $sm) {
			background-color: var(--color2);
		}
		@media only screen and (min-width: $md) {
			height: 56px;
		}
		@media only screen and (min-width: $lg) {
			height: 56px;
		}
		&:hover {
			background-color: $shadow;
			min-height: 56px;
		}
	}
	#page_3__content {
		grid-area: pag3;
		background-color: var(--color3);
		border-radius: 32px;
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
			background-color: var(--color2);
			max-width: 100vw;
		}
		@media only screen and (min-width: $sm) {
			background-color: var(--color2);
			max-width: 100vw;
		}
		@media only screen and (min-width: $md) {
			height: 56px;
		}
		@media only screen and (min-width: $lg) {
			height: 56px;
		}
		&:hover {
			background-color: $shadow;
			min-height: 56px;
		}
	}
	#page_4__content {
		grid-area: pag4;
		background-color: var(--color3);
		border-radius: 32px;
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
</style>
