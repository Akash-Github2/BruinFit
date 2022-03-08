import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Switch from "react-switch";
import Home from './Home'
import Food from './Food'
import Fitness from './Fitness'
import Friends from './Friends'
// import SignUp from './components/SignUp';
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
        </Routes>
      </Router>
    </div>



  //   <div className='App'>
  //    <Navbar/>
  //       <Routes>
  //          { /*<Route exact path="/" component={Navbar} />*/}
  // <Route exact path="food-fitness" element= {<><Food/><Fitness/></>}/>
  // <Route exact path="friends" element= {<Friends/>}/>
  //       </Routes>
  //   </div>
      
  );
}
export default App;