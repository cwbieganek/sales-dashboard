<!-- 
	- This Nav component is easy to user and has 2 params, the active state and the sidebar toggle. 
	- A third dark mode parameter is optional
	- The active param uses a string to identify which tab is currently active, and applies an underline style to it.
-->

<div class={`header w-full h-16 md:h-20 flex justify-center fixed mt-0 z-10 ${dark=='true'?'bg-background':'bg-foreground'}`}>
    <div class={`w-[75%] lg:w-[95%] flex items-center h-full border-x-0 border-t-0 border justify-center lg:justify-between ${dark=='true'?'border-b-foreground':'border-b-background'}`}>
      <a href='/' class={`font-integral text-sm lg:text-2xl ${dark=='true'?'text-foreground':'text-background'} ${sidebar ? 'hidden':''}`}><img src='favicon.png' alt='logo' class='w-16 contrast-50 invert'></a>

      <button on:click={toggleSidebar} class="w-6 lg:hidden fixed ml-[80%]">
        <img src='/menu.svg' class={`w-full fill-background invert ${dark=='true' && "invert-0"}`} alt='hamburger menu'/>
       </button>

      <div class={`mr-0 lg:mr-8 md:block transition-all ${dark=='true'?'text-foreground':'text-background'} ${sidebar ? '':'hidden'}`}>
        <a href='/products' class={`text-sm lg:text-lg font-inter cursor-pointer transition-all underline-offset-8 hover:underline hover:underline-offset-2 mx-2 lg:mx-6 ${active=='products' && 'underline font-bold'}`}>products</a>
        <a href='/link1' class={`text-sm lg:text-lg font-inter cursor-pointer transition-all underline-offset-8 hover:underline hover:underline-offset-2 mx-2 lg:mx-6 ${active=='link1' && 'underline font-bold'}`}>Link 2</a>
        <a href='/link2' class={`text-sm lg:text-lg font-inter cursor-pointer transition-all underline-offset-8 hover:underline hover:underline-offset-2 mx-2 lg:mx-6 ${active=='link2' && 'underline font-bold'}`}>Link 3</a>
      </div>
    </div>
</div>


<script lang='ts'>
    export let active = "";
    export let dark = "true";   //Use this for dark mode as an additional parameter, set to dark by default
    let sidebar = false;

    function toggleSidebar() {
      sidebar = !sidebar;
    }
</script>