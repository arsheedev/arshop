<script>
	import '../app.css'
	let { children } = $props()
	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}
</script>

<nav class="navbar bg-green-700">
	<div class="navbar-content">
		<div class="center-text">Arshop</div>
	</div>
</nav>

{@render children()}

<footer class="footer bg-black">
	<div class="footer-content">
		<div class="footer-left">
			<span>Archshop</span>
		</div>
		<div class="footer-right">
			<div class="footer-section">
				<strong>Lokasi:</strong>
				<p>
					Jl. Irian Jaya Tebuireng No.10, Cukir, Kec. Diwek, Kabupaten Jombang, Jawa Timur 61471
				</p>
			</div>
			<div class="footer-section">
				<strong>Kontak:</strong>
				<p>+62 813-3518-1693</p>
			</div>
		</div>
	</div>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

	.navbar {
		padding: 10px 0;
		width: 100%;
		font-family: 'Poppins', sans-serif;
	}

	.navbar-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.center-text {
		flex-grow: 1;
		text-align: center;
		color: white;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.footer {
		padding: 80px 0;
		color: white;
		font-family: 'Poppins', sans-serif;
		background-color: black;
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.footer-left {
		font-size: 1.5rem;
		font-weight: 600;
	}

	.footer-right {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.footer-section {
		font-size: 0.9rem;
	}

	.footer-section strong {
		display: block;
		margin-bottom: 5px;
	}

	@media (max-width: 768px) {
		.navbar-content {
			flex-direction: column;
			align-items: flex-start;
		}

		.footer-content {
			flex-direction: column;
			align-items: flex-start;
			text-align: left;
			gap: 15px;
		}

		.footer-right {
			width: 100%;
		}
	}
</style>
