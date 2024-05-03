import React, { useEffect, useState } from 'react';
//function to create a new socket connection
import Messages from '../../components/ChatComponents/Messages';
import MessageInput from '../../components/ChatComponents/MessageInput';
import MessageHistory from '../../components/ChatComponents/MessageHistory';
import API from '../../utils/API';
import './style.css';

export default function ChatOne(props) {
  console.log(props);
    const [user, setUser] = useState([]);

    //hook to get the user data
    useEffect(() => {
      //if there is no user id, return
      if(!props.userId) {
        return
      }
      // Runs the getOneUser function from the API utils page
      API.getOneUser(props.userId).then((userData) => {
        setUser(userData);
        console.log(userData);
      });
      // runs setUser function when the user data is retrieved
    }, [props.userId]);

    const backButton = () => {
      window.location.href = '/chat';
    }

    

  return (
    <div className="container mx-auto w-1/2 grid">
      <div className="reportBtnWrap container">
      <button onClick={backButton}>Back to All Chats</button>
      </div>
      <header>
        {user.username ? (
          <h1>Welcome, {user.username}!</h1>
        ) : (
          <h1>Welcome</h1>
        )}
      </header>
      <div className="col-span-full">
          <MessageHistory />
          <Messages username={user} socket={props.socket} />
          <MessageInput username={user} socket={props.socket} />
          {/* <CreateRoom socket={socket} /> */}
      </div>
    </div>
  );
}   

