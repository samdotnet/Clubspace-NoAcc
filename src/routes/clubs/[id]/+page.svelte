<script>
    /**
	 * @type {{ club: any; name: any; description: any}}
	 */
     export let data;
</script>

<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{data.club.name}</h1>
    <p>{data.club.description}</p>
</div>