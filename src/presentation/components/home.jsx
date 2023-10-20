import { useRef, useState } from "react";
import { styles } from "../style.js";
import { Send } from 'lucide-react';

import "../style.css";
import { Message } from "../widgets/message.jsx";
import Messages from "../../data/messages.js";
import { Message as MessageData } from "../../data/message.js";

export default () => {
	const [textInput, setTextInput] = useState("");
	const messages = new Messages();

	function sendMessage(){
		if(!textInput.trim().length) return;
		messages.add(new MessageData({
			from: 'self',
			content: textInput.trim()
		}))
		setTextInput('');
	}

	return (
    <div style={styles.page}>
			<div style={styles.chatbox}>

				{/* Man, fuck that, i wanna use css */}

				{
					messages.all().map(msg => (<Message sender={msg.from == 'server' ? 'S' : 'U'} message={msg.content} loading={msg.onload} />))
				}	

			</div>
			<div style={styles.messagebar}>
				<input 
					value={textInput}
					onInput={(e) => setTextInput(e.target.value)}
					onKeyUp={(e) => e.key == 'Enter' ? sendMessage() : ""}
					style={styles.messageinput}
					placeholder="Message"
					/>
				<button style={styles.sendButton} onClick={() => sendMessage()}><Send /></button>
			</div>
		</div>
  );
}