import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/ChatComponents/Sidebar';
import API from '../../utils/API';
import io from 'socket.io-client'

export default function Chat(props) {
  const URL_PREFIX = "http://localhost:3000"

  const [socket, setSocket] = useState(null);

    const [user, setUser] = useState([]);

    useEffect(() => {
      // Creates a new socket connection
      const newSocket = io(URL_PREFIX);
      setSocket(newSocket);
      return () => newSocket.close();
  }
  // runs setSocket when the socket is created
  , [setSocket]);
    
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
    }
    , [props.userId]);

  return (
    <div>
      <header>
        {user.username ? (
          <h1>Welcome, {user.username}!</h1>
        ) : (
          <h1>Welcome</h1>
        )}
      </header>
      <div>
            <div>
                <Sidebar userId={props.userId} socket={socket}/>
            </div>
      </div>
    </div>
  );
}   
