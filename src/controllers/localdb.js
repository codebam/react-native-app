import { Message } from "../data/message";


export function setLocalMessages(messages){
	localStorage.messages = JSON.stringify(messages);
}

export function getLocalMessages(){
	return localStorage.messages ? JSON.parse(localStorage.messages).map(item => new Message(item)) : [];
}