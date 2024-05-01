import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import io from 'socket.io-client'

const socket = io('http://localhost:3000');

function ChatRooms(props) {
  console.log(props.userId)
  const [chatRooms, setChatRooms] = useState([])
  const [myRooms, setMyRooms] = useState([])

  useEffect(() => {
    API.getChatRooms(props.userId).then((chatRoomData) => {
      setChatRooms(chatRoomData)
    })
  }, [])

  useEffect(() => {
    API.getMyRooms(props.userId).then((myRoomData) => {
      setMyRooms(myRoomData)
    })
  }
  , [])

  const openChatRoom = (e) => {
    e.preventDefault()
    console.log(e.target.innerText);
    socket.emit('joinRoom', e.target.innerText)
    window.location.href = `/chat/${e.target.innerText}`
  }

  return (
    <>
    <div>
      <h1>Chats to Me</h1>
    </div>
    <div>
      {chatRooms.map((chatRoom, index) => (
        <div key={index}>
          <button onClick={openChatRoom}>
          {chatRoom.id}
          </button>
        </div>
      ))}
    </div>
    <div>
      <h1>Chats I've Created</h1>
    </div>
    <div>
      {myRooms.map((myRoom, index) => (
        <div key={index}>
          <button onClick={openChatRoom}>
          {myRoom.id}
          </button>
        </div>
      ))}
    </div>

    </>
  );
}

export default ChatRooms;

