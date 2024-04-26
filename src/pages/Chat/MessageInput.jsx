import React, { useState } from 'react';


const NewMessage = ({socket}) => {
    const [value, setValue] = useState('');
    const message = {
        user: socket.id,
        message: value,
        date: new Date().toLocaleTimeString()
    }
    
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