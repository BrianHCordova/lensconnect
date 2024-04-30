import React, { useEffect, useState } from 'react';
//function to create a new socket connection
import io from 'socket.io-client'
import Messages from '../../components/ChatComponents/Messages';
import MessageInput from '../../components/ChatComponents/MessageInput';
import MessageHistory from '../../components/ChatComponents/MessageHistory';
import Sidebar from '../../components/ChatComponents/Sidebar';
import API from '../../utils/API';
// import CreateRoom from '../../components/ChatComponents/CreateRoom';

export default function Chat(props) {
    const URL_PREFIX = "http://localhost:3000"

    const [socket, setSocket] = useState(null);
    const [user, setUser] = useState([]);

    //hook to create a new socket connection
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
    }, [props.userId]);

    // socket.on('connect', () => {
    //   console.log(`${socket.id} connected`)
    // })

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
        { socket ? (
            <div>
                <Sidebar />
                <MessageHistory />
                <Messages socket={socket} username={user}/>
                <MessageInput socket={socket} username={user} />
                {/* <CreateRoom socket={socket} /> */}
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
