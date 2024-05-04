import React, { useEffect, useState } from 'react';
//function to create a new socket connection
import io from 'socket.io-client'
import MessageInput from '../../components/ChatComponents/MessageInput';
import MessageHistory from '../../components/ChatComponents/MessageHistory';
import API from '../../utils/API';
// import CreateRoom from '../../components/ChatComponents/CreateRoom';

export default function ChatOne(props) {
    const URL_PREFIX = "https://lensconnect-back.onrender.com/"

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


    const backbtn = () => {
      window.location.href = '/chat';
    }

    const queryParams = new URLSearchParams(window.location.search);
    const queryString = queryParams.toString().split('=')[1];

  return (

    <div>
      <div >
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-[480px]">
              <div className="mb-6 bg-zinc-900 px-6 py-6 shadow-md shadow-black sm:rounded-lg sm:px-6">
                <div className="my-2">
                  <button className="btn text-white bg-cyan-800 hover:bg-cyan-500 duration-200 ease-in-out" onClick={backbtn}>Back to Chats</button>
                </div>
                <div className="my-8">
                  <h1 className='card-title text-3xl font-bold'>@{queryString}</h1>
                </div>

                <MessageHistory />
                {/* <Messages socket={socket} username={user}/> */}
                <MessageInput socket={socket} username={user} />
                {/* <CreateRoom socket={socket} /> */}
              </div>
            </div>
      </div>
    </div>
  );
}   

