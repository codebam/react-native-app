import { baseURL } from "../data/url";
import { getFrom } from "./requests";


export async function getServerResponse(
	prompt,
	messages
){
	return await getFrom(baseURL+'/', 
		{
			"system": messages.map(item => item.content),
			"user": [
				prompt
			]
		}
	).then(json => json.response);
}