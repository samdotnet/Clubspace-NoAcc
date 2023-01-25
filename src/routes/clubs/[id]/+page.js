// @ts-ignore

export async function load({ fetch, params }) {

    const url = `https://jsonplaceholder.typicode.com/posts`;
    const res  = await fetch(url);
    const data = await res.json();
	const club = {
        name: data[params.id].title,
        description: data[params.id].body
	}
    return { club }
}