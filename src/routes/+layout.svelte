<script async script lang="ts">
	import { cacheExchange, fetchExchange, gql, setContextClient, Client } from '@urql/svelte';

	import { authExchange } from '@urql/exchange-auth';
	import { goto } from '$app/navigation';
	const tempClient = new Client({
		url: 'http://localhost:3000/graphql',
		exchanges: [cacheExchange, fetchExchange]
	});
	setContextClient(tempClient);
	let token1 = '';

	async function initializeAuthState() {
		const authenticateMutation = gql`
			mutation MyMutation($email: String = "", $password: String = "") {
				authenticate(input: { email: $email, password: $password }) {
					jwt
				}
			}
		`;
		const result = await tempClient.mutation(authenticateMutation, {
			email: 'chou1@gmail.com',
			password: 'secret1'
		});
		const jwt = result.data?.authenticate.jwt;
		localStorage.setItem('token', jwt);
		return jwt;
	}
	function logout() {
		goto('/a');
	}
	const client = new Client({
		url: 'http://localhost:3000/graphql',
		exchanges: [
			cacheExchange,
			authExchange(async (utils) => {
				let token = localStorage.getItem('token') || (await initializeAuthState());
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
