<script>
    /**
	 * @type {{ id: any; description: any; name: any; }}
	 */
     export let club;
</script>

<a class="p-6 font-mono text-center border-solid border-[2.5px] border-black flex flex-col items-center shadow-[5px_5px] hover:shadow-[7px_7px] transition-shadow" href={`/clubs/`+club.id}>
    <h2 class="uppercase text-2xl">{club.name}</h2>
    <p>{club.description}</p>
</a>
