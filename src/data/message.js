

class Message {

	// self | server
	from = "self";
	content = "";
	date = new Date();


	// add @param thingies here  for intellisense
	constructor(args){
		this._setValues(args);
	}

	_setValues({
		from,
		content,
		date
	} = {}){
		if(from) this.from = from;
		if(content) this.content = content;
		if(date) this.date = date;
	}

	fromJson(json){
		let args = JSON.parse(json);
		this._setValues(args);
	}

	toJson(){
		return JSON.stringify(this);
	}
	
}
