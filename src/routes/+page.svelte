<Nav />
<div class='pt-24'>
<h1>Welcome to your Sales Dashboard!</h1>
<a href="/products">View your products</a>
</div>

<script lang='ts'>
 import Nav from "$lib/Nav.svelte";   // You can place the Nav component in the lib directory to ensure it is easily callable from the entire project.  
 
 // I prefer to call the Nav component on each page, giving it parameters as to which page is active. 
</script>
