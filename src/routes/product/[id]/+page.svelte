<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()
</script>

{#if data.product}
	<div class="detail-container">
		<h1 class="product-title">{data.product.title}</h1>
		<div class="product-image"></div>
		<p class="product-description">{data.product.description}</p>
		<p class="product-price">Harga: {data.product.price}</p>
	</div>
{:else}
	<p>Produk tidak ditemukan!</p>
{/if}

<style>
	.detail-container {
		padding: 20px;
		margin: 0 auto;
		max-width: 800px;
		text-align: center;
	}

	.product-title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.product-image {
		width: 100%;
		height: 300px;
		background-color: #ddd;
		border-radius: 8px;
		margin-bottom: 20px;
	}

	.product-description {
		font-size: 16px;
		color: #555;
		margin-bottom: 10px;
	}

	.product-price {
		font-size: 18px;
		font-weight: bold;
		color: #38a169;
	}
</style>
