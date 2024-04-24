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


export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        {/* <Route path="/hire" element={<Hire />}></Route> */}
      </Routes>
    </Router>
  )
}
