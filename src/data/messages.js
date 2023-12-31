import { useState } from "react";

import { Message as MessageData } from "./message";
import { getLocalMessages, setLocalMessages } from "../controllers/localdb";

export default class Messages {
	messages = {};

  /**
   * Create a new Messages instance.
   */
  constructor() {
    const [messages, setMessages] = useState(getLocalMessages());
    this.messages.set = (m) => {
			setMessages(m);
			setLocalMessages(messages);
		};
    this.messages.all = messages;
    this.messages.get = () => messages;
  }

  /**
   * Set the messages array.
   * @param {MessageData[]} messages - An array of messages.
   * @returns {Messages} The updated Messages instance.
   */
  set(messages) {
    this.messages.set(messages);
    return this;
  }

  /**
   * Get all messages.
   * @returns {MessageData[]} An array of all messages.
   */
  all() {
    return [...this.messages.all];
  }

  /**
   * Add a new message to the array.
   * @param {MessageData} message - The message to add.
   * @returns {Messages} The updated Messages instance.
   */
  add(...messages) {
    this.messages.set([...this.messages.all, ...messages]);
    return this;
  }

  /**
   * Set a message at a specific index in the array.
   * @param {number} index - The index at which to set the message.
   * @param {MessageData} options - The new message data.
   * @returns {Messages} The updated Messages instance.
   */
  setMessage(index, options) {
    let messages = [...this.messages.all];
		if(index < 0) index = messages.length-1;
    messages[index] = new MessageData({...messages[index], ...options});
    this.messages.set(messages);
    return this;
  }

  /**
   * Get a message at a specific index.
   * @param {number} index - The index of the message to retrieve.
   * @returns {MessageData} The message at the specified index.
   */
  at(index) {
    return this.messages.all.at(index);
  }
}
