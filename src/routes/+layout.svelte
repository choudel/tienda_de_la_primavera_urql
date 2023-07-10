<script async script lang="ts">
	import { cacheExchange, fetchExchange, gql, setContextClient, Client } from '@urql/svelte';
	import { authExchange } from '@urql/exchange-auth';
	const tempClient = new Client({
		url: 'http://localhost:3000/graphql',
		exchanges: [cacheExchange, fetchExchange]
	});
	setContextClient(tempClient);
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

		return jwt;
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
					}
				};
			}),
			fetchExchange
		]
	});

	setContextClient(client);
</script>

<slot />
