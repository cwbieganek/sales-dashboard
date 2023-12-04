<script lang="ts">
	import { page } from '$app/stores';

	const error = $page.error!; // error WILL be defined, despite what ts says
</script>

<h1 class="text-white text-center text-2xl mt-8">{error.message}</h1>
