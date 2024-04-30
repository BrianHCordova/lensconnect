import React from 'react'

export default function ChatButton({ socket, username }) {
    console.log('username', username);
    // Function to open chat window
    function handleChatOpen() {
        window.location.href = '/chat';
        socket.emit('join', username);
    }
  return (
    <>
    {/* conditionally renders chat button if user is logged in */}
        <div className="chatBtn col-span-2">
            <button onClick={handleChatOpen}>Start Chat!</button>
        </div>
    </>

  )
}
