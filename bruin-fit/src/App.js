import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Switch from "react-switch";
import Home from './Home'
import Food from './Food'
import Fitness from './Fitness'
import Friends from './Friends'
import Profile from './Profile'
import Login from './components/Login';
import Register from './components/Register';









function App() {
  return (

    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/sign-up" element={<Register />} />
          <Route exact path="/home" element={<><Navbar/><Home /></>} />
          <Route exact path="/food-fitness" element={<><Navbar/><Food/><Fitness/></>} />
          <Route exact path="/friends" element={<><Navbar/><Friends /></>} />
          <Route exact path="profile" element= {<Profile/>}/>
        </Routes>
      </Router>
    </div>

  );
}
export default App;