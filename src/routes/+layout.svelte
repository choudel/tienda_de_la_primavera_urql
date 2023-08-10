<script async script lang="ts">
	import { cacheExchange, fetchExchange, setContextClient, Client } from '@urql/svelte';
	import { authExchange } from '@urql/exchange-auth';
	import { goto } from '$app/navigation';

	async function initializeAuthState() {
		const token = localStorage.getItem('token');
		return token;
	}
	function logout() {
		goto('/auth');
	}
	const client = new Client({
		url: 'http://localhost:3000/graphql',
		exchanges: [
			cacheExchange,
			authExchange(async (utils) => {
				let token = await initializeAuthState();
				console.log(token);
				return {
					addAuthToOperation(operation) {
						return utils.appendHeaders(operation, {
							Authorization: `Bearer ${token}`
						});
					},
					didAuthError(error, _operation) {
						if (error.response.status === 403) {
							this.refreshAuth();
							return true;
						}
						return false;
					},
					async refreshAuth() {
						localStorage.clear();
						logout();
					}
				};
			}),
			fetchExchange
		]
	});

	setContextClient(client);
</script>

<slot />
