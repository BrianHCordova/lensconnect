// Imports the pages and nav component
import Nav from "./components/Nav"
import Home from "./pages/Home/"
import Profile from "./pages/Profile/"
import Search from "./pages/Search/"
import Browse from "./pages/Browse/"

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
  useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    // Make sure it exists and is vaild
    if(savedToken){
      API.checkToken(savedToken).then(data=>{
        if(data.validToken){
          setToken(savedToken);
          setUserId(data.userId)
        } else {
          localStorage.removeItem("token")
        }
      })
    }
  },[])
  // const handleSignup = obj=>{
  //   API.signup(obj).then(data=>{
  //     setToken(data.token);
  //     setUserId(data.user.id);
  //     localStorage.setItem("token",data.token)
  //   })
  // }
  // const handleLogin = obj=>{
  //   API.login(obj).then(data=>{
  //     setToken(data.token);
  //     setUserId(data.user.id);
  //     localStorage.setItem("token",data.token)
  //   })
  // }
  // const logout = ()=>{
  //   setToken("");
  //   setUserId(0);
  //   localStorage.removeItem("token")
  // }
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile userId={userId} token={token}/>}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        {/* <Route path="/hire" element={<Hire />}></Route> */}
      </Routes>
    </Router>
  )
}
