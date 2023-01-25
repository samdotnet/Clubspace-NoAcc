<script>
    import { clubs } from "../../stores/clubstore";
    import Club from "../../components/Club.svelte";

    let searchTerm = "";
    /**
	 * @type {any[]}
	 */

    let filteredClubs = [];

    $:{
        if(searchTerm) {
            filteredClubs = $clubs.filter(club => club.name.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            filteredClubs = [...$clubs] 
        }
    }

</script>

<div>
    <input class="w-full text-lg font-mono p-4 border-[2.5px] border-black" type="text" placeholder="Search Clubs" bind:value={searchTerm}>
    
    <div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">  
        {#each filteredClubs as club}
        <Club {club}/>
        {/each}
    </div>
</div>