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
    , []);

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
    };
    
    return (
      <>
        <form onSubmit={submitForm}>
          <input
              type="text"
              value={value}
              placeholder="Type your message"
              onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            style={{ color: 'black' }}
          />
          <button type="submit">Send</button>
        </form>


      
      </>
    );
  };
  
  export default NewMessage;