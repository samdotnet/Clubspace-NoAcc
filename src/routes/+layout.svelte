<script lang="ts">
  import { onMount } from 'svelte'
  import Nav from '../components/Nav.svelte'
</script>

<svelte:head>
  <title>Clubspace</title>
  <meta name="description" content="Explore Clubs!" />
</svelte:head>

<body class="bg-slate-50 font-mono">
  <Nav/>
  <div class="w-full h-10"></div>
  <div class="container mx-auto">
    <div class="font-sans container p-8">
      <slot />
    </div>
  </div>
</body>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap');
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :root {
    scrollbar-width: thin !important;
    scrollbar-gutter: stable both-edges;
  }

</style>