<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import { products } from '$lib/data/products'
	import { ShoppingCart } from 'lucide-svelte'

	const itemsPerPage = 12
	const totalPages = Math.ceil(products.length / itemsPerPage)

	let currentPage = $state(1)

	function goToPage(page: number) {
		currentPage = page
	}

	let displayedProducts = $derived(
		products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	)
</script>

<div class="container">
	<div class="header">
		<div class="title">Oleh-Oleh untuk Anda</div>
	</div>

	<div class="product-grid">
		{#each displayedProducts as product}
			<a class="card" href={`/product/${product.id}`}>
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
</div>

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
