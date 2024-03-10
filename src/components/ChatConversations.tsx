import React, { useState } from "react";
import styles from "./ChatConversations.module.css";

const ChatConversations: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "Esther Howard",
      message: "Hello, how are you today?",
      time: "02:00 PM",
    },
    {
      id: 2,
      from: "You",
      message: "I am fine, thanks! And you?",
      time: "02:05 PM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const nextMessage = {
        id: messages.length + 1,
        from: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { timeStyle: "short" }),
      };
      setMessages([...messages, nextMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chatHeader}>
        <h2>Chat</h2>
      </div>
      <ul className={styles.messagesList}>
        {messages.map((message) => (
          <li key={message.id} className={styles.messageItem}>
            <span className={styles.messageAuthor}>{message.from}</span>
            <span className={styles.messageContent}>{message.message}</span>
            <span className={styles.messageTime}>{message.time}</span>
          </li>
        ))}
      </ul>
      <form className={styles.messageForm} onSubmit={handleSendMessage}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className={styles.messageInput}
        />
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatConversations;
