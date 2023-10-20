import { baseURL } from "../data/url";


export async function getFrom(url, data){
	return await fetch(url, {
		method: 'GET',
		data
	}).then(response => response.json());
}