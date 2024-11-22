<script lang="ts">
	import type { PageData } from './$types'
	import { Truck, Box, Shield, User, Star } from 'lucide-svelte'
	import Slash from 'lucide-svelte/icons/slash'
	import * as Breadcrumb from '$lib/components/ui/breadcrumb'
	import { products } from '$lib/data/products'
	import { ShoppingCart } from 'lucide-svelte'

	let { data }: { data: PageData } = $props()
	let reviews = [
		{
			id: 1,
			name: 'Afandika',
			avatar: User,
			comment:
				'Oleh-oleh jajanan dan makanan dari Gus Dur selalu menjadi pilihan utama! Kualitasnya sangat terjaga, dan rasanya luar biasa. Pasti kembali lagi untuk membeli!',
			rating: 4
		},
		{
			id: 2,
			name: 'Alya',
			avatar: User,
			comment:
				'Produk oleh-oleh ini sangat enak dan cocok untuk dibawa pulang. Rasanya khas dan memberikan kenangan tersendiri.',
			rating: 4
		},
		{
			id: 3,
			name: 'Budi',
			avatar: User,
			comment:
				'Jajanan dari Gus Dur selalu menjadi pilihan keluarga saya. Semua produk yang dibeli selalu memuaskan!',
			rating: 4
		}
	]

	let recommendedProducts = products.slice(0, 4)
</script>

{#if data.product}
	<div class="detail-container">
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator>
					<Slash />
				</Breadcrumb.Separator>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/allproduct">Semua Produk</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator>
					<Slash />
				</Breadcrumb.Separator>
				<Breadcrumb.Item>
					<Breadcrumb.Link>{data.product.title}</Breadcrumb.Link>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>

		<div class="product-details">
			<div class="product-image">
				<img src={data.product.image} alt={data.product.title} class="product-image-element" />
			</div>

			<div class="product-info">
				<h1 class="product-title">{data.product.title}</h1>
				<p class="product-description">{data.product.description}</p>
				<div class="divider"></div>
				<p class="product-price">Harga: {data.product.price}</p>
				<div class="divider"></div>

				<!-- Icon Features -->
				<div class="features">
					<div class="feature-item">
						<Truck class="feature-icon text-orange-500" />
						<div>
							<h3 class="feature-title">Gratis Ongkir</h3>
							<p class="feature-description">Nikmati pengiriman gratis untuk produk ini.</p>
						</div>
					</div>
					<div class="feature-item">
						<Box class="feature-icon text-orange-500" />
						<div>
							<h3 class="feature-title">Produk Berkualitas</h3>
							<p class="feature-description">Diproduksi dengan bahan pilihan terbaik.</p>
						</div>
					</div>
					<div class="feature-item">
						<Shield class="feature-icon text-orange-500" />
						<div>
							<h3 class="feature-title">Bergaransi</h3>
							<p class="feature-description">Garansi 100% uang kembali jika tidak sesuai.</p>
						</div>
					</div>
				</div>

				<div class="buttons">
					<button class="buy-button">Buy Now</button>
					<button class="add-to-cart-button">Add to Cart</button>
				</div>
			</div>
		</div>

		<!-- Reviews Section -->
		<div class="reviews-section">
			<h2 class="reviews-title">Reviews</h2>
			{#each reviews as review (review.id)}
				<div class="review-item">
					<review.avatar class="review-icon text-gray-500" />
					<div class="review-content">
						<div class="review-name-rating">
							<h3 class="review-name">{review.name}</h3>

							<div class="review-rating">
								{#each Array(review.rating) as _, index}
									<Star class="star-icon text-yellow-500" />
								{/each}
							</div>
						</div>
						<p class="review-text">{review.comment}</p>
					</div>
				</div>
				<div class="divider"></div>
			{/each}
		</div>
		<div class="recommended-products">
			<h2 class="section-title">Rekomendasi Produk untuk Anda</h2>
			<div class="product-grid">
				{#each recommendedProducts as product}
					<a class="card" href={`/product/${product.id}`}>
						<div class="image-wrapper">
							<img src={product.image} alt={product.title} class="product-image" />
							<div class="cart-icon">
								<ShoppingCart size="20" color="#333" />
							</div>
						</div>
						<div class="product-title-card">{product.title}</div>
						<div class="product-price-card">{product.price}</div>
						<div class="product-category">{product.category}</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<p>Produk tidak ditemukan!</p>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

	.product-details {
		padding-top: 20px;
	}

	.detail-container {
		padding: 20px;
		margin: 0 auto;
		max-width: 1200px;
		font-family: 'Poppins', sans-serif;
	}

	.product-details {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
	}

	.product-image {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.product-image-element {
		width: 100%;
		height: 100%;
		object-fit: cover;
		max-width: 600px;
		border-radius: 8px;
	}

	.product-info {
		width: 100%;
	}

	.product-title {
		font-size: 36px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.product-description {
		font-size: 14px;
		font-weight: 600;
		color: #555;
		margin-bottom: 10px;
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

	.divider {
		width: 100%;
		border-top: 2px solid #ddd;
		margin: 20px 0;
	}

	.product-price {
		font-size: 22px;
		font-weight: bold;
		color: #333;
		margin-bottom: 20px;
	}

	.features {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-bottom: 20px;
	}

	.feature-item {
		display: flex;
		align-items: flex-start;
		gap: 15px;
	}

	.feature-title {
		font-size: 16px;
		font-weight: bold;
	}

	.feature-description {
		font-size: 14px;
	}

	.buy-button,
	.add-to-cart-button {
		padding: 12px 20px;
		border-radius: 12px;
		font-size: 16px;
		cursor: pointer;
		width: 48%;
		border: none;
	}

	.buy-button {
		background-color: #38a169;
		color: white;
		transition: background-color 0.3s;
	}

	.buy-button:hover {
		background-color: #2f8c55;
	}

	.add-to-cart-button {
		background-color: #f0f0f0;
		color: #333;
		transition: background-color 0.3s;
	}

	.add-to-cart-button:hover {
		background-color: #d1d1d1;
	}

	.reviews-section {
		margin-top: 40px;
		padding: 20px;
		border-top: 2px solid #ddd;
	}

	.reviews-title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.review-item {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 20px;
		padding: 10px;
		background-color: #fff;
		border-radius: 8px;
	}

	.review-content {
		max-width: 800px;
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.review-name-rating {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.review-name {
		font-size: 16px;
		font-weight: bold;
		color: #333;
	}

	.review-rating {
		display: flex;
		gap: 5px;
	}

	.review-text {
		font-size: 14px;
		color: #555;
	}

	.recommended-products {
		margin-top: 40px;
	}
	.section-title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.product-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
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

	.product-title-card {
		font-weight: 400;
		font-size: 18px;
		color: #333;
		margin-bottom: 5px;
	}

	.product-price-card {
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

	@media (max-width: 768px) {
		.review-item {
			flex-direction: column;
			align-items: flex-start;
		}

		.review-name {
			font-size: 14px;
		}

		.review-rating {
			font-size: 12px;
		}

		.product-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 1024px) {
		.product-details {
			grid-template-columns: 1fr;
			gap: 30px;
		}

		.product-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.product-title {
			font-size: 24px;
		}

		.product-description {
			font-size: 14px;
		}

		.product-price {
			font-size: 18px;
		}

		.buttons {
			flex-direction: column;
			gap: 10px;
		}

		.buy-button,
		.add-to-cart-button {
			width: 100%;
		}

		.product-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.product-title {
			font-size: 20px;
		}

		.product-description {
			font-size: 12px;
		}

		.product-price {
			font-size: 16px;
		}
		.product-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
