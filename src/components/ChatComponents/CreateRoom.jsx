import { useState } from 'react';


// const CreateRoom = ({ socket }) => {
//   const [roomName, setRoomName] = useState('');

//   const createRoom = (e) => {
//     e.preventDefault();
//     socket.emit('createRoom', roomName);
//     setRoomName('');
//   };

//   return (
//     <form onSubmit={createRoom}>
//       <input
//         type="text"
//         value={roomName}
//         placeholder="Create a room"
//         onChange={(e) => {
//           setRoomName(e.currentTarget.value);
//         }}
//         style={{ color: 'black' }}
//       />
//       <button type="submit">Join</button>
//     </form>
//   );
// }


// export default CreateRoom;
