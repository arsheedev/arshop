import { products } from '$lib/data/products'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const id = Number(params.id)
	const product = products.find((product) => product.id === id)

	return { product }
}
