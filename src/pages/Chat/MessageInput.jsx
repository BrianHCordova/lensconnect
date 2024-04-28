import React, { useState } from 'react';

const NewMessage = ({ socket, username }) => {
    const [value, setValue] = useState('');
    console.log('username', username);

    const message = {
        user: username.username,
        message: value,
        date: new Date().toLocaleTimeString()
    }
    
    //first 'message' is the name of the event being emitted, the second 'message' is the data being sent
    const submitForm = (e) => {
      e.preventDefault();
      socket.emit('message', message);
      setValue('');
    };
  
    return (
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
    );
  };
  
  export default NewMessage;