import { useRef, useState } from "react";
import { styles } from "../style.js";
import { Send } from 'lucide-react';

import "../style.css";
import { Message } from "../widgets/message.jsx";

export default () => {
	return (
    <div style={styles.page}>
			<div style={styles.chatbox}>

				{/* Man, fuck that, i wanna use css */}

				<Message sender="U" message="Hello" />		
				<Message sender="S" message="..." loading={true} />		

			</div>
			<div style={styles.messagebar}>
				<input style={styles.messageinput} placeholder="Message" />
				<button style={styles.sendButton}><Send /></button>
			</div>
		</div>
  );
}