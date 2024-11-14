<script>
	import '../app.css'
	let { children } = $props()
	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}
</script>

<nav class="navbar">
	<div class="navbar-content">
		<div class="logo-content">
			<div class="logo">Archshop</div>

			<button class="hamburger" on:click={toggleMenu} aria-label="Toggle navigation">
				<span class="hamburger-bar"></span>
				<span class="hamburger-bar"></span>
				<span class="hamburger-bar"></span>
			</button>
		</div>

		<ul class="nav-links {isMenuOpen ? 'show' : ''}">
			<li><a href="#beranda">Beranda</a></li>
			<li><a href="#produk">Produk</a></li>
			<li><a href="#kontak">Kontak</a></li>
		</ul>

		<button class="buy-button">Dimana kita beli?</button>
	</div>
</nav>

{@render children()}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

	.navbar {
		background-color: green;
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

	.logo-content {
		display: flex;
		align-items: center;
		gap: 30px;
	}

	.logo {
		color: white;
		font-size: 2rem;
		font-weight: 600;
	}

	.nav-links {
		list-style: none;
		display: flex;
		gap: 15px;
		margin: 0;
		padding: 0;
	}

	.nav-links li a {
		color: white;
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.nav-links li a:hover {
		text-decoration: underline;
	}

	.buy-button {
		background-color: white;
		color: green;
		font-weight: 600;
		border: none;
		padding: 8px 20px;
		cursor: pointer;
		border-radius: 3px;
		font-size: 1.2rem;
	}

	.buy-button:hover {
		background-color: #f0f0f0;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		background: none;
		border: none;
		cursor: pointer;
		padding: 5px;
	}

	.hamburger-bar {
		width: 25px;
		height: 3px;
		background-color: white;
		margin: 4px 0;
	}

	@media (max-width: 768px) {
		.navbar-content {
			flex-direction: column;
			align-items: flex-start;
		}

		.logo-content {
			width: 100%;
			justify-content: space-between;
		}

		.nav-links {
			display: none;
			flex-direction: column;
			width: 100%;
			margin-top: 10px;
			gap: 10px;
		}

		.nav-links.show {
			display: flex;
		}

		.buy-button {
			width: 100%;
			margin-top: 10px;
			padding: 10px 0;
			font-size: 1.2rem;
		}

		.hamburger {
			display: flex;
		}
	}
</style>
