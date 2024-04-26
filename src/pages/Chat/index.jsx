import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';

export default function Chat() {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Creates a new socket connection
        const newSocket = io('http://localhost:3000');
        setSocket(newSocket);
        return () => newSocket.close();
    }
    , [setSocket]);

  return (
    <div>
      <header>
        Chat
      </header>
      <div>
        { socket ? (
            <div>
                <Messages socket={socket} />
                <MessageInput socket={socket} />
            </div>
            ) : (
            <div>
                <p>Not connected</p>
            </div>
        )}
      </div>
    </div>
  );
}   
