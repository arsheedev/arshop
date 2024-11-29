<script>
	import { MapPin } from 'lucide-svelte'
	import '../app.css'

	let { children } = $props()
</script>

<nav class="navbar bg-green-700">
	<div class="navbar-content">
		<div class="logo">
			<a href="/" class="center-text">Archshop</a>
		</div>
		<div class="nav-links">
			<a href="https://maps.app.goo.gl/kgx5chvb7YufQcsM9" class="nav-link">
				<MapPin class="icon" /> Lokasi
			</a>
			<a href="/allproducts" class="nav-link">All Product</a>
		</div>
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
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 1000; /* Pastikan navbar tetap di atas konten lain */
		padding: 10px 0;
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

	.logo {
		flex-grow: 1;
	}

	.center-text {
		text-align: left;
		color: white;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.nav-links {
		display: flex;
		gap: 20px;
	}

	.nav-link {
		color: white;
		text-decoration: none;
		font-size: 1rem;
		display: flex;
		align-items: center;
		gap: 5px;
		transition: color 0.3s ease;
	}

	.nav-link:hover {
		color: black;
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

		.nav-links {
			width: 100%;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}

		.nav-link {
			width: 100%;
			padding: 10px 0;
			text-align: left;
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
