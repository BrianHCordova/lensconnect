import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from React Router

const CreateAccountButton = ({ scrollY }) => {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Adjust the top value to move the button lower on the page
  const buttonTop = 'calc(50% + 400px)'; // Adjust the value as needed

  return (
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2"
      style={{ top: buttonTop, zIndex: 1 }}
      initial="hidden"
      animate={scrollY > 0 ? "hidden" : "visible"} // Hide the button when scrolled down
      variants={buttonVariants}
    >
      <Link to="/login"> {/* Use Link component to navigate to /login */}
        <button className="bg-emerald-900 hover:bg-emerald-500 duration-200 ease-in-out text-white font-bold py-2 px-4 rounded">
          Create Account
        </button>
      </Link>
    </motion.div>
  );
};

export default CreateAccountButton;
