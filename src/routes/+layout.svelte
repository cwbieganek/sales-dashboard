<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<div class="app min-h-screen">
	<main class="bg-gray-100 min-h-screen">
		<Navbar />
		<slot />
	</main>
</div>

<style></style>
