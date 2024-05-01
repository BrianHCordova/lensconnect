import React, { useState, useEffect } from "react";
import API from "../../utils/API";

const url = window.location.href;
const id = url.substring(url.lastIndexOf('/') + 1);

function MessageHistory(props) {
    const [roomData, setRoomData] = useState([]);

    useEffect(() => {
        API.getRoomById(id).then((roomData) => {
            setRoomData(roomData);
        });
    }
    , []);

    console.log(roomData);

return (
    <div>
        <h1>Chat History</h1>
        <div>
            {roomData.Chats && roomData.Chats.map((message, index) => (
                <div key={index}>
                    {message.username}: {message.message} - {message.createdAt}
                </div>
            ))}
        </div>
    </div>
);
}

export default MessageHistory;
