

export class Message {

	// self | server
	from = "self";
	content = "";
	date = new Date();
	onload = false;


	/**
	 * Create a new Message.
	 * @param {Object} args - Message arguments.
	 * @param {string} args.from - The sender of the message (either "self" or "server").
	 * @param {string} args.content - The content of the message.
	 * @param {boolean} args.onload - The loading state.
	 * @param {Date} args.date - The date the message was sent.
	 */
	constructor(args){
		this._setValues(args);
	}

	/**
	 * Set the message properties from an object.
	 * @param {Object} args - Message arguments.
	 * @param {string} [args.from] - The sender of the message (either "self" or "server").
	 * @param {string} [args.content] - The content of the message.
	 * @param {boolean} [args.onload] - The loading state.
	 * @param {Date} [args.date] - The date the message was sent.
	 */
	_setValues({
		from,
		content,
		date,
		onload
	} = {}){
		if(from) this.from = from;
		if(content) this.content = content;
		if(date) this.date = date;
		if(onload) this.onload = onload;
		else this.date = new Date();
	}

	/**
	 * Deserialize a JSON string and set the message properties.
	 * @param {string} json - JSON string representing a message.
	 */
	fromJson(json){
		let args = JSON.parse(json);
		this._setValues(args);
	}

	/**
	 * Serialize the message to a JSON string.
	 * @returns {string} The JSON representation of the message.
	 */
	toJson(){
		return JSON.stringify(this);
	}
	
}
