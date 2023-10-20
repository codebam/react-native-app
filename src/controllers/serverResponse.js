import { baseURLCustom } from "../data/url";
import { postTo } from "./requests";

export async function getServerResponse(prompt, messages) {
	return await postTo(baseURLCustom + "/", {
		system: messages.map((item) => item.content),
		user: [prompt],
	}).then((json) => json.response);
}

