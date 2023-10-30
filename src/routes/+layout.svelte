<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<div class="app">
	<main class="bg-gray-100">
		<Navbar />
		<slot />
	</main>
</div>

<style></style>
