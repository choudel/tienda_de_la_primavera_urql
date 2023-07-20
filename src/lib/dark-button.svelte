<script>
	import { theme } from '../stores';
	function toggleTheme() {
		theme.update((n) => (n = !n));
	}
</script>

<button on:click={toggleTheme} class:dark={$theme} class:light={!$theme}>
	{#if $theme}
		<div class="sun">☀️</div>
	{:else}
		<div class="moon">🌑</div>
	{/if}
</button>

<style lang="scss">
	button {
		width: 40px;
		border-radius: 50px;
		padding: 0;
	}
	.light {
		background-color: #00293d;
		border: 2px solid #ddffbb;
	}
	.dark {
		background-color: #fcc75d;
		border: 2px solid white;
	}
	.sun {
		display: flex;
		justify-items: center;
		justify-content: end;
	}
	.moon {
		display: flex;
		justify-items: center;
		justify-content: baseline;
	}
</style>
