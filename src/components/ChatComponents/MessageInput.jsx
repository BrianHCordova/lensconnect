import React, { useState } from 'react';

const NewMessage = ({ socket, username }) => {
    const [value, setValue] = useState('');
    const [roomValue, setRoomValue] = useState('');

    const message = {
      ID: username.id,
      user: username.username,
      message: value,
      date: new Date().toLocaleTimeString('en-US',
        {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }
      )
  };

      const room = {
        room: roomValue
      }
    
    //first 'message' is the name of the event being emitted, the second 'message' is the data being sent
    const submitForm = (e) => {
      e.preventDefault();
      socket.emit('message', message, room);
      setValue('');
    };

    const joinRoom = (e) => {
      e.preventDefault();
      socket.emit('joinRoom', room);
      setRoomValue('');
    }
  
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
          <input 
              type="text"
              value={roomValue}
              placeholder='type in a room'
              onChange={(e) => {
                setRoomValue(e.currentTarget.value);
              
              }} 
              style={{ color: 'black'}}/>
              <button type='button' onClick={joinRoom}>Join</button>
        </form>

      
      </>
    );
  };
  
  export default NewMessage;