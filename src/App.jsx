import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/";
import Profile from "./pages/Profile/";
import Search from "./pages/Search/";
import SearchedProfile from "./pages/SearchedProfile";
import Browse from "./pages/Browse/";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Footer from "./components/Footer";
import Chat from "./pages/Chat";
import ChatOne from "./pages/ChatOne";
import Review from "./pages/Review";
import ReviewBySearch from "./pages/ReviewBySearch";
import Report from "./pages/Report";
import About from "./pages/About";
import Settings from "./pages/Settings";
import API from "./utils/API";

export default function App() {
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      API.checkToken(savedToken).then((data) => {
        if (data.validToken) {
          setToken(savedToken);
          setUserId(data.userId);
        } else {
          localStorage.removeItem("token");
        }
      });
    }
  }, []);

  const handleSignup = (obj) => {
    API.signup(obj).then((data) => {
      setToken(data.token);
      setUserId(data.user.id);
      localStorage.setItem("token", data.token);
    });
  };

  const handleLogin = (obj) => {
    API.login(obj).then((data) => {
      setToken(data.token);
      setUserId(data.user.id);
      localStorage.setItem("token", data.token);
    });
  };

  const logout = () => {
    setToken("");
    setUserId(0);
    localStorage.removeItem("token")
  }

  return (
    <>
      <Router>
        <Nav handleSubmit={logout} userId={userId} />
        <main>
          <Routes>
            <Route path="/" element={<Home userId={userId} />} />
            <Route
              path="/profile"
              element={<Profile userId={userId} token={token} />}
            />
            <Route
              path="/profile/:id"
              element={<SearchedProfile userId={userId} id={userId} />}
            />
            <Route path="/search" element={<Search />} />
            <Route
              path="/browse"
              element={<Browse userId={userId} token={token} />}
            />
            <Route
              path="/login"
              element={
                <Login
                  type="Login"
                  handleSubmit={handleLogin}
                  userId={userId}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup
                  type="Signup"
                  handleSubmit={handleSignup}
                  userId={userId}
                />
              }
            />
            <Route
              path="/logout"
              element={<Logout handleSubmit={logout} userId={userId} />}
            />
            <Route
              path="/chat"
              element={<Chat userId={userId} token={token} />}
            />
            <Route
              path="/chat/:id"
              element={<ChatOne userId={userId} token={token} />}
            />
            <Route
              path="/review/"
              element={<ReviewBySearch userId={userId} token={token} />}
            />
            <Route
              path="/review/:id"
              element={<Review userId={userId} token={token} />}
            />
            <Route
              path="/report"
              element={<Report userId={userId} token={token} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/settings"
              element={<Settings userId={userId} token={token} />}>
            </Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
