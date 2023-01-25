import {writable} from "svelte/store"; 

export const clubs = writable([]);

const fetchClubs = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const res  = await fetch(url);
    const data = await res.json();
    console.log(data[0].id)
    const loadedClubs = data.map((data) => {
        return {
            id: data.id,
            name: data.title,
            description: data.body
        }
    });
    
    clubs.set(loadedClubs);
};

fetchClubs();