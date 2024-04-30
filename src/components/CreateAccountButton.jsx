// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom'; // Import Link from React Router

// const CreateAccountButton = ({ scrollY }) => {
//   const buttonVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   return (
//     <motion.div
//       className="absolute left-1/2 transform -translate-x-1/2"
//       style={{ top: '50%', zIndex: 1 }}
//       initial="hidden"
//       animate={scrollY > 0 ? "hidden" : "visible"} // Hide the button when scrolled down
//       variants={buttonVariants}
//     >
//       <Link to="/login"> {/* Use Link component to navigate to /login */}
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 md:text-lg lg:py-4 lg:px-8 lg:text-xl">
//           Create Account
//         </button>
//       </Link>
//     </motion.div>
//   );
// };

// export default CreateAccountButton;
