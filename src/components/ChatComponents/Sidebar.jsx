import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import io from 'socket.io-client'

const socket = io('https://lensconnect-back.onrender.com/');

function ChatRooms(props) {
  // console.log(props.userId)
  const [chatRooms, setChatRooms] = useState([])
  const [chatRoomSender, setChatRoomSender] = useState([])
  const [chatRoomSenderName, setChatRoomSenderName] = useState([])
  const [myRooms, setMyRooms] = useState([])
  const [myRoomReceiver, setMyRoomReceiver] = useState([])
  const [myRoomReceiverName, setMyRoomReceiverName] = useState([])

  // console.log(chatRooms);
  // console.log(myRooms);
  // console.log(chatRoomSender);
  // console.log(myRoomReceiver);
  // console.log(chatRoomSenderName);
  // console.log(myRoomReceiverName); 

  //create a new array of objects with the chatRoom id and the sender name
  const chatRoomData = chatRooms.map((chatRoom, index) => {
    return {
      id: chatRoom.id,
      senderName: chatRoomSenderName[index]
    };
  });
  console.log(chatRoomData);

  //create a new array of objects with the myRoom id and the receiver name
  const myRoomData = myRooms.map((myRoom, index) => {
    return {
      id: myRoom.id,
      receiverName: myRoomReceiverName[index]
    };
  });
  console.log(myRoomData);


  //hook to get the chats sent to me
  useEffect(() => {
    if(!props.userId) {
      return
    }

    API.getChatRooms(props.userId).then((chatRoomData) => {
      setChatRooms(chatRoomData)
    })
  }, [props.userId])

  //mpa through chatRooms and get the user_sender id
useEffect(() => {
  if(!props.userId) {
    return
  }
      // loop through all the chatRooms and return user_sender
      const chatRoomSenders = chatRooms.map(chatRoom => chatRoom.user_sender);
      setChatRoomSender(chatRoomSenders);
    }, [chatRooms])

  useEffect(() => {
    if(!props.userId) {
      return
    }
    // loop through all the chatRoomSenders and return the user name
    const chatRoomSenderNames = chatRoomSender.map(async (chatRoomSender) => {
      const chatRoomSenderData = await API.getOneUser(chatRoomSender);
      return chatRoomSenderData.username;
    });
    Promise.all(chatRoomSenderNames).then((usernames) => {
      setChatRoomSenderName(usernames);
    });
  }, [chatRoomSender]);

    
  //hook to get the chats I've created
  useEffect(() => {
    if(!props.userId) {
      return
    }
    
    API.getMyRooms(props.userId).then((myRoomData) => {
      setMyRooms(myRoomData)
    })
  }
  , [props.userId])
    
  //map through myRooms and get the user_receiver id  
  useEffect(() => {
    if(!props.userId) {
      return
    }
    // loop through all the myRooms and return user_receiver
    const myRoomReceivers = myRooms.map(myRoom => myRoom.user_receiver);
    setMyRoomReceiver(myRoomReceivers);
  }
  , [myRooms])

  useEffect(() => {
    if(!props.userId) {
      return
    }
    // loop through all the myRoomReceivers and return the user name
    const myRoomReceiverNames = myRoomReceiver.map(async (myRoomReceiver) => {
      const myRoomReceiverData = await API.getOneUser(myRoomReceiver);
      return myRoomReceiverData.username;
    });
    Promise.all(myRoomReceiverNames).then((usernames) => {
      setMyRoomReceiverName(usernames);
    });
  }, [myRoomReceiver]);


  const openReceivedChatRoom = (e) => {
    e.preventDefault()
    console.log(e.target.innerText);
    const foundUser = chatRoomData.find(chatRoom => chatRoom.senderName === e.target.innerText)
    socket.emit('joinRoom', foundUser.id)
    window.location.href = `/chat/${foundUser.id}?chatRoomData=${e.target.innerText}`
  }

  const openSentChatRoom = (e) => {
    e.preventDefault()
    console.log(e.target.innerText);
    const foundUser = myRoomData.find(myRoom => myRoom.receiverName === e.target.innerText)
    socket.emit('joinRoom', foundUser.id)
    window.location.href = `/chat/${foundUser.id}?myRoomData=${e.target.innerText}`
  }

  return (
    <>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-zinc-900 px-6 py-12 shadow-md shadow-black sm:rounded-lg sm:px-12">
        <div>
          <div>
            <h1 className='card-title text-3xl font-bold'>Chats to Me</h1>
          </div>
          <div>
            {chatRoomData.map((chatRoom, index) => (
              <div key={index} className="my-2">
                <button onClick={openReceivedChatRoom} className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 duration-100 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
                {chatRoom.senderName}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className='card-title text-3xl font-bold'>Chats I've Created</h1>
        </div>
        <div>
          {myRoomData.map((myRoom, index) => (
            <div key={index} className="my-2">
              <button onClick={openSentChatRoom} className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 duration-100 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
              {myRoom.receiverName}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  );
}

export default ChatRooms;

