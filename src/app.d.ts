// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			ProductPage: {
				product:
					| {
							id: number
							title: string
							price: string
							category: string
							description: string
							image: string
					  }
					| undefined
			}
		}
		// interface Platform {}
	}
}

export {}
