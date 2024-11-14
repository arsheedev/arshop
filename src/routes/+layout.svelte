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
		<div class="center-text">Archshopaja</div>
	</div>
</nav>

{@render children()}

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

	@media (max-width: 768px) {
		.navbar-content {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
