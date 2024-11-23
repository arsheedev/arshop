<script lang="ts">
	import { goto, preloadData, pushState } from '$app/navigation'
	import { page } from '$app/stores'
	import { Button } from '$lib/components/ui/button'
	import * as Dialog from '$lib/components/ui/dialog'
	import { products } from '$lib/data/products'
	import { ShoppingCart } from 'lucide-svelte'
	import Product from './product/[id]/+page.svelte'

	const itemsPerPage = 12
	const totalPages = Math.ceil(products.length / itemsPerPage)

	let currentPage = $state(1)
	let productDialogOpen = $state(false)

	function goToPage(page: number) {
		currentPage = page
	}

	async function onProductClick(e: MouseEvent & { currentTarget: HTMLAnchorElement }) {
		if (e.metaKey || e.ctrlKey) return
		e.preventDefault()

		const { href } = e.currentTarget

		const result = await preloadData(href)

		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { ProductPage: result.data as typeof $page.state.ProductPage })
		} else {
			goto(href)
		}
	}

	let displayedProducts = $derived(
		products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	)

	$effect(() => {
		if ($page.state.ProductPage) {
			productDialogOpen = true
		} else {
			productDialogOpen = false
		}
	})
</script>

<div class="container">
	<div class="header">
		<div class="title">Oleh-Oleh untuk Anda</div>
		<Button class="bg-green-700 hover:bg-green-800" href="/allproduct">Lihat Semua Produk</Button>
	</div>

	<div class="product-grid">
		{#each displayedProducts as product}
			<a class="card" href={`/product/${product.id}`} onclick={onProductClick}>
				<div class="image-wrapper">
					<img src={product.image} alt={product.title} class="product-image" />
					<div class="cart-icon">
						<ShoppingCart size="20" color="#333" />
					</div>
				</div>
				<div class="product-title">{product.title}</div>
				<div class="product-price">{product.price}</div>
				<div class="product-category">{product.category}</div>
			</a>
		{/each}
	</div>

	<div class="pagination">
		{#each Array(totalPages) as _, index}
			<button class:active={currentPage === index + 1} onclick={() => goToPage(index + 1)}>
				{index + 1}
			</button>
		{/each}
	</div>
</div>

<Dialog.Root open={productDialogOpen}>
	<Dialog.Content>
		<Product data={$page.state.ProductPage} />
	</Dialog.Content>
</Dialog.Root>

<pre>{JSON.stringify($page.state.ProductPage, null, 2)}</pre>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

	* {
		font-family: 'Poppins', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.container {
		padding: 20px;
		margin: 0 auto;
		max-width: 1200px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
		flex-wrap: wrap;
	}

	.title {
		font-size: 24px;
		font-weight: 500;
		margin-bottom: 10px;
	}

	.product-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		min-height: 900px;
	}

	.card {
		background-color: #ffffff;
		border-radius: 8px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		height: 400px;
		position: relative;
		cursor: pointer;
	}

	.image-wrapper {
		width: 100%;
		height: 250px;
		background-color: #ddd;
		border-radius: 5px;
		margin-bottom: 10px;
		position: relative;
		overflow: hidden;
	}

	.product-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.cart-icon {
		position: absolute;
		top: 10px;
		right: 10px;
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 50%;
		padding: 5px;
		cursor: pointer;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	}

	.product-title {
		font-weight: 400;
		font-size: 18px;
		color: #333;
		margin-bottom: 5px;
	}

	.product-price {
		color: #000;
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 3px;
	}

	.product-category {
		font-size: 14px;
		color: #888;
		margin-bottom: 10px;
	}

	.pagination {
		display: flex;
		gap: 10px;
		justify-content: center;
		margin-top: 20px;
	}

	.pagination button {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: none;
		background-color: #f0f0f0;
		color: #333;
		font-size: 16px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pagination button:hover {
		background-color: #38a169;
		color: #fff;
	}

	.pagination button.active {
		background-color: #38a169;
		color: #fff;
	}

	@media (max-width: 1024px) {
		.product-grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.header {
			flex-direction: column;
			align-items: flex-start;
		}

		.title {
			margin-bottom: 15px;
		}
	}

	@media (max-width: 768px) {
		.product-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.title {
			font-size: 20px;
		}
	}

	@media (max-width: 480px) {
		.product-grid {
			grid-template-columns: 1fr;
		}

		.title {
			font-size: 18px;
		}
	}
</style>
