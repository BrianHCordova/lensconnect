import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

const url = window.location.href;
const id = url.substring(url.lastIndexOf('/') + 1);

const NewMessage = ({ socket, username }) => {
    const [value, setValue] = useState(''); 
    const [roomData, setRoomData] = useState([]);

    useEffect(() => {
      API.getRoomById(id).then((roomData) => {
        setRoomData(roomData);
      });
    }
    , [value]);

    const message = {
      ID: username.id,
      user: username.username,
      message: value,
      ChatRoomId: roomData.id
  };

    //first 'message' is the name of the event being emitted, the second 'message' is the data being sent
    const submitForm = (e) => {
      e.preventDefault();
      socket.emit('message', message);
      setValue('');
      // window.location.reload();
    };
    
    return (
      <>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <form onSubmit={submitForm}>
          <input
              type="text"
              value={value}
              placeholder="Type your message"
              onChange={(e) => {
                setValue(e.currentTarget.value);
              }}
              style={{ color: 'black' }}
              className='rounded-lg w-3/4 p-[0.6rem]'
              />
          <button type="submit" className="w-1/5 ml-5 btn text-white bg-cyan-800 hover:bg-cyan-500 duration-200 ease-in-out">Send</button>
        </form>
    </div>


      
      </>
    );
  };
  
  export default NewMessage;