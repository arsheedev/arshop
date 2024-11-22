<script lang="ts">
	import image from '$lib/assets/image-gusdur.png'
	import bg from '$lib/assets/homepage-kawasan.webp'
</script>

<section class="home">
	<img class="background-image" src={bg} alt="Background" />
	<div class="content">
		<div class="image-side">
			<img src={image} alt="" />
		</div>
		<div class="text-side">
			<h1 class="title text-green-700">
				Oleh Oleh,<br /> Dari Gus Dur
			</h1>
			<button class="buy-now-button">Beli Sekarang</button>
		</div>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

	.home {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: auto;
		min-height: 50vh;
		border-radius: 15px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		padding: 10px;
		margin: 10px;
		font-family: 'Poppins', sans-serif;
		overflow: hidden; /* Pastikan elemen tidak meluber */
	}

	/* Background Image */
	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		z-index: -2; /* Di bawah pseudo-element */
	}

	/* Overlay Layer */
	.home::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7); /* Lapisan hitam lebih gelap */
		z-index: -1; /* Di atas background tetapi di bawah konten */
	}

	.content {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.text-side {
		max-width: 50%;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: white;
	}

	.title {
		font-size: 4rem;
		margin: 0;
		line-height: 1.1;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.buy-now-button {
		background-color: #2f855a;
		color: white;
		font-size: 1.2rem;
		font-weight: 600;
		padding: 12px 24px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		margin-top: 15px;
		transition: background-color 0.3s ease;
	}

	.buy-now-button:hover {
		background-color: #276749;
	}

	.image-side {
		max-width: 50%;
		position: relative;
		bottom: -40px;
	}

	.image-side img {
		width: 100%;
		height: auto;
	}

	@media (max-width: 768px) {
		.home {
			flex-direction: column;
		}

		.content {
			flex-direction: column;
			align-items: center;
		}

		.text-side,
		.image-side {
			max-width: 100%;
		}

		.title {
			font-size: 2.5rem;
			text-align: center;
		}

		.buy-now-button {
			width: 100%;
		}

		.image-side img {
			max-width: 100%;
			margin-bottom: 20px;
		}
	}
</style>
