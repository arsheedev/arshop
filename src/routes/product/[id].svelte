<script lang="ts">
	import { onMount } from 'svelte'
	import { products } from './products'

	type Product = {
		id: number
		title: string
		price: string
		category: string
		description: string
	}

	export let params: { id: string }
	let product: Product | undefined

	onMount(() => {
		product = products.find((p) => p.id === parseInt(params.id))
	})
</script>

{#if product}
	<div class="detail-container">
		<h1 class="product-title">{product.title}</h1>
		<div class="product-image"></div>
		<p class="product-description">{product.description}</p>
		<p class="product-price">Harga: {product.price}</p>
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
