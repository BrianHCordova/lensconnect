import React, { useEffect, useState } from 'react'

export default function Messages({ socket }) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on('messageResponse', (message) => {
            setMessages((messages) => [...messages, message])
        })
    }, [socket])

    return (
        <div>
            {messages.map((message, index) => (
                <div key={index}>{message.user}: {message.message} - {message.date}
                </div>
            ))}
        </div>
    )
}
