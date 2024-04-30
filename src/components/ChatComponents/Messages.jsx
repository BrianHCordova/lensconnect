import React, { useEffect, useState } from 'react'

export default function Messages({ socket, username }) {
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState('')
    
    useState(() => {
        setUser(username.username)
    }
    , [username]);
    

    useEffect(() => {
        socket.on('messageResponse', (message) => {
            console.log(message)
            setMessages((messages) => [...messages, message])
        })

        socket.on('connect', () => {
            console.log(`${socket.id} connected`)
        })

        socket.emit('join', (user))
        
        socket.on('user-connected', (name) => {
            console.log(name)
        })

    }, [socket])


    return ((
        <div>
            <div>
                <h1>Current Chat</h1>
            </div>

                <div>
                    You have connected with ID: {socket.id}
                </div>
            {messages.map((message, index) => (
                <div key={index}>{message.user}: {message.message} - {message.date}</div>
            ))}
        </div>
    ))
}
