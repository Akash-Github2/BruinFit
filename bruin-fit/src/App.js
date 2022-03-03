import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Switch from "react-switch";
import Home from './Home'
import Food from './Food'
import Fitness from './Fitness'
import Friends from './Friends'








function App() {
  return (

    // <div className="app">
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<SignUp />} />
    //       <Route exact path="/home" element={<Home />} />
    //       <Route exact path="/food-fitness" element={<Food />} />
    //       <Route exact path="/friends" element={<Friends />} />
    //     </Routes>
    //   </Router>
    // </div>



    <div className='App'>
     <Navbar/>
        <Routes>
           { /*<Route exact path="/" component={Navbar} />*/}
  <Route exact path="food-fitness" element= {<><Food/><Food/></>}/>
  <Route exact path="friends" element= {<Friends/>}/>
        </Routes>
    </div>
      
  );
}
export default App;