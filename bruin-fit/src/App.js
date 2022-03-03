import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Routes, Router, Route } from 'react-router-dom';
import Home from './Home'
import Food from './Food'





function App() {
  return (
       <div className='App'>
    
    {/* <Router>  */}
      <Navbar />
      {/* <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/food' component={Food} />
        <Route path='/fitness' component={Fitness} />
        <Route path='/friends' component={Friends} />
        <Route path='/signup' component={SignUp} />
      </Routes>
    </Router> */}
      

        </div>
      
  );
}
export default App;