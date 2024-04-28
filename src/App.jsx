// Imports the pages and nav component
import Nav from "./components/Nav"
import Home from "./pages/Home/"
import Profile from "./pages/Profile/"
import Search from "./pages/Search/"
import Browse from "./pages/Browse/"
import Login from "./pages/Login"
import Signup from './pages/Signup'
import Logout from "./pages/Logout"
import Footer from "./components/Footer"
import Chat from "./pages/Chat"

// Router-dom for page routes
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom"

// Imports the api fetch functions for use
import API from "./utils/API"

import React, { useEffect, useState } from "react";

export default function App() {
  // Creates useState for userId and token
  const [userId, setUserId] = useState(0)
  const [token, setToken] = useState("")

  // useEffect to set a token on page load 
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    // Make sure it exists and is vaild
    if (savedToken) {
      API.checkToken(savedToken).then(data => {
        if (data.validToken) {
          setToken(savedToken);
          setUserId(data.userId)
        } else {
          localStorage.removeItem("token")
        }
      })
    }
  }, [])
  // Function that sets the token and userId on signup
  const handleSignup = obj => {
    API.signup(obj).then(data => {
      setToken(data.token);
      setUserId(data.user.id);
      localStorage.setItem("token", data.token)
    })
  }
  // Function that sets the token and userId on login
  const handleLogin = obj => {
    API.login(obj).then(data => {
      console.log(data)
      setToken(data.token);
      setUserId(data.user.id);
      localStorage.setItem("token", data.token)
    })
  }
  // Function that removes the token and userId on logout
  // This function is not imported from API as it doesnt not use any API data
  const logout = () => {
    setToken("");
    setUserId(0);
    localStorage.removeItem("token")
  }

  return (
    <Router>
      <Nav handleSubmit={logout}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile userId={userId} token={token} />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/browse" element={<Browse userId={userId} token={token} />}></Route>
        <Route path="/login" element={<Login type="Login"  handleSubmit={handleLogin} userId={userId}/>}/>
        <Route path="/signup" element={<Signup type="Signup" handleSubmit={handleSignup} userId={userId}/>}/>
        <Route path="/logout" element={<Logout handleSubmit={logout} userId={userId}/>}/>
        <Route path="/chat" element={<Chat userId={userId} token={token}/>}></Route>
        {/* <Route path="/hire" element={<Hire />}></Route> */}
      </Routes>
      <Footer />
    </Router>
  )
}
