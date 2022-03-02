import React from 'react';
// import Navbar from "./components/Navbar/Navbar";
import './App.css'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   Home,
//   Food,
//   Fitness,
//   Friends
// } from "./components";
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='App'>
      <SignUp />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/sign-up" element={<Contact />} />
      </Routes> */}
    </div>
  );
}
export default App;