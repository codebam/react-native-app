import { useRef, useState } from "react";
import { styles } from "../style.js";
import { Send } from 'lucide-react';

import "../style.css";
import { Message } from "../widgets/message.jsx";
import Messages from "../../data/messages.js";
import { Message as MessageData } from "../../data/message.js";
import { Text, View, TextInput, Button } from "react-native";
import { getServerResponse } from "../../controllers/serverResponse.js";
import { setLocalMessages } from "../../controllers/localdb.js";

export default () => {
	const [textInput, setTextInput] = useState("");
	const [paused, setPaused] = useState(false);
	const messages = new Messages();

	function sendMessage(){
		if(!textInput.trim().length || paused) return false;

		if(textInput.trim() == '/clear'){
			messages.set([]);
			setTextInput('');
			setLocalMessages([]);
			return false;
		}

		const allMessages = messages.all();

		messages.add(new MessageData({
			from: 'self',
			content: textInput.trim()
		}), new MessageData({
			from: 'server',
			content: '...',
			onload: true
		}));

		getServerResponse(textInput.trim(), allMessages)
		.then(response => {
			let _messages = [new MessageData({
				from: 'self',
				content: textInput.trim()
			}), new MessageData({
				from: 'server',
				content: response
			})];
			messages.add(..._messages);
			setLocalMessages([...messages.all(), ..._messages]);
			scrollToBottom();
			setPaused(false);
		})
		.catch(e => setPaused(false));

		scrollToBottom();

		setTextInput('');
		setPaused(true);
		return true;
	}

	function scrollToBottom() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox) {
      chatbox.scrollTop = chatbox.scrollHeight*2;
    }
  };

	window.onload = () => scrollToBottom();

	return (
    <div style={styles.page}>
			<div style={styles.chatbox} id="chatbox">

				{/* Man, fuck that, i wanna use css */}

				{
					messages.all().map(msg => (<Message sender={msg.from == 'server' ? 'S' : 'U'} message={msg.content} loading={msg.onload} />))
				}	

			</div>
			<div style={styles.messagebar}>
				<TextInput 
					aria-disabled={paused}
					value={textInput}
					onChangeText={setTextInput}
					// onInput={(e) => setTextInput(e.target.value)
					onKeyPress={(e) => !e.shiftKey && e.key == 'Enter' ? (e.preventDefault(),sendMessage()) : ""}
					style={styles.messageinput}
					placeholder="Message"
				></TextInput>
				<button style={styles.sendButton} onClick={() => sendMessage()}><Send /></button>
			</div>
		</div>
  );
}