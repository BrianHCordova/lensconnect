import React, { useEffect, useState } from 'react'

export default function Messages({ socket, username }) {
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState('')
    const [roomData, setRoomData] = useState([]);
    
    useState(() => {
        setUser(username.username)
    }
    , [username]);
    

    // useEffect(() => {
    //     socket.on('messageResponse', (message) => {
    //         console.log(message)
    //         setMessages((messages) => [...messages, message])
    //     })

    // }, [socket])


    return ((
        <div>
            {messages.map((message, index) => (
                <div key={index}>{message.user}: {message.message} - {message.date}</div>
            ))}
        </div>
    ))
}
