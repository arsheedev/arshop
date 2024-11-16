<script lang="ts">
	import { ShoppingCart } from 'lucide-svelte'
	import { Button } from '../ui/button'
	import { goto } from '$app/navigation'

	const products = [
		{ id: 1, title: 'Produk 1', price: 'Rp 100.000', category: 'Kategori A' },
		{ id: 2, title: 'Produk 2', price: 'Rp 150.000', category: 'Kategori B' },
		{ id: 3, title: 'Produk 3', price: 'Rp 200.000', category: 'Kategori C' },
		{ id: 4, title: 'Produk 4', price: 'Rp 250.000', category: 'Kategori A' },
		{ id: 5, title: 'Produk 5', price: 'Rp 300.000', category: 'Kategori B' },
		{ id: 6, title: 'Produk 6', price: 'Rp 350.000', category: 'Kategori C' },
		{ id: 7, title: 'Produk 7', price: 'Rp 400.000', category: 'Kategori A' },
		{ id: 8, title: 'Produk 8', price: 'Rp 450.000', category: 'Kategori B' },
		{ id: 9, title: 'Produk 9', price: 'Rp 500.000', category: 'Kategori C' },
		{ id: 10, title: 'Produk 10', price: 'Rp 550.000', category: 'Kategori A' },
		{ id: 11, title: 'Produk 11', price: 'Rp 600.000', category: 'Kategori B' },
		{ id: 12, title: 'Produk 12', price: 'Rp 650.000', category: 'Kategori C' },
		{ id: 13, title: 'Produk 13', price: 'Rp 700.000', category: 'Kategori A' },
		{ id: 14, title: 'Produk 14', price: 'Rp 750.000', category: 'Kategori B' },
		{ id: 15, title: 'Produk 15', price: 'Rp 800.000', category: 'Kategori C' }
	]

	let currentPage = 1
	const itemsPerPage = 12
	const totalPages = Math.ceil(products.length / itemsPerPage)

	function goToPage(page: number) {
		currentPage = page
	}

	$: displayedProducts = products.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	)
</script>

<div class="container">
	<div class="header">
		<div class="title">Oleh-Oleh untuk Anda</div>
		<Button class="bg-green-700 hover:bg-green-800" href="/all">Lihat Semua Produk</Button>
	</div>

	<div class="product-grid">
		{#each displayedProducts as product}
			<div class="card">
				<div class="placeholder-image">
					<div class="cart-icon">
						<ShoppingCart size="20" color="#333" />
					</div>
				</div>
				<div class="product-title">{product.title}</div>
				<div class="product-price">{product.price}</div>
				<div class="product-category">{product.category}</div>
			</div>
		{/each}
	</div>

	<div class="pagination">
		{#each Array(totalPages) as _, index}
			<button class:active={currentPage === index + 1} on:click={() => goToPage(index + 1)}>
				{index + 1}
			</button>
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

	.placeholder-image {
		width: 100%;
		height: 250px;
		background-color: #ddd;
		border-radius: 5px;
		margin-bottom: 10px;
		position: relative;
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
