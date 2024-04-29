import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function MessageHistory(props) {
    const [chat, setChat] = useState([]);
    useEffect(() => {
        API.getChat().then((chatData) => {
            setChat(chatData);
        });
    }, []);

  return (
    <div>
        <h1>Chat History</h1>
        <div>
            {chat.map((message, index) => (
            <div key={index}>
                {message.username}: {message.message} - {message.createdAt}
            </div>
            ))}
        </div>
    </div>
  );
}

export default MessageHistory;
