<script async script lang="ts">
	import { enhance } from '$app/forms';
	import { goto, invalidate } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import { cacheExchange, fetchExchange, gql, setContextClient, Client } from '@urql/svelte';
	let form = { email: '', password: '' };
	const tempClient = new Client({
		url: 'http://localhost:3000/graphql',
		exchanges: [cacheExchange, fetchExchange]
	});
	setContextClient(tempClient);
	async function initializeAuthState() {
		const authenticateMutation = gql`
			mutation MyMutation($email: String = "", $password: String = "") {
				authenticate(input: { email: $email, password: $password }) {
					authenticateResult {
						jwt
						refreshtoken
					}
				}
			}
		`;
		const result = await tempClient.mutation(authenticateMutation, {
			email: form.email,
			password: form.password
		});
		const jwt = result.data?.authenticate.authenticateResult.jwt;
		localStorage.setItem('token', jwt);
		goto('/');
	}
</script>

<form use:enhance>
	<label>
		email:
		<input type="email" name="email" autocomplete="off" bind:value={form.email} />
	</label>
	<label>
		password
		<input type="password" name="password" autocomplete="off" bind:value={form.password} />
	</label>
	<button
		type="submit"
		on:click={() => {
			initializeAuthState();
		}}>auth</button
	>
</form>
