<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<div class="app min-h-screen">
	<main class="bg-gray-950 min-h-screen">
		<Navbar />
		<slot />
	</main>
</div>

<style></style>
