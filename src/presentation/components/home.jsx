import { useRef, useState } from "react";
import { styles } from "../style.js";
import { Send } from 'lucide-react';

import "../style.css";
import { Message } from "../widgets/message.jsx";
import Messages from "../../data/messages.js";

export default () => {
	const [textInput, setTextInput] = useState("");
	const messages = new Messages();

	function sendMessage(){
		if(!textInput.trim().length) return;
		messages.add(new Message({
			from: 'self',
			content: textInput.trim()
		}))
	}

	return (
    <div style={styles.page}>
			<div style={styles.chatbox}>

				{/* Man, fuck that, i wanna use css */}

				{
					messages.all().map(msg => (<Message sender={msg.from == 'server' ? 'S' : 'U'} message={msg.content} />))
				}	

			</div>
			<div style={styles.messagebar}>
				<input 
					value={textInput}
					onChangeText={setTextInput}
					style={styles.messageinput}
					placeholder="Message"
					/>
				<button style={styles.sendButton} onClick={() => sendMessage()}><Send /></button>
			</div>
		</div>
  );
}