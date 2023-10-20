import { useState } from "react";


export default class Messages {
	messages = {};

	constructor(){
		const [messages, setMessages] = useState([]);
		this.messages.set = setMessages;
		this.messages.all = messages;
	}

	set(messages){
		this.messages.set(messages);
		return this;
	}

	all(){
		return this.messages.all;
	}

	add(message){
		this.messages.set([...this.messages.all, message]);
		return this;
	}


	setMessage(index, options){
		let messages = [...this.messages.all];
		messages[index] = options;
		this.messages.set(messages);
		return this;
	}

	at(index){
		return this.messages.all.at(index);
	}
}