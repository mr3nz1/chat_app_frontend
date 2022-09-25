import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import User from "./pages/User"
import Search from "./pages/Search"
import EditProfile from "./pages/EditProfile"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
                <Route path="/users/:user/edit" element={<EditProfile />} />
                <Route path="/users/:user" element={<User />} />
            </Routes>
        </Router>
    )
}

export default App