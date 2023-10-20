import { baseURL } from "../data/url";

export async function postTo(url, data) {
	return await fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
	}).then((response) => response.json());
}

