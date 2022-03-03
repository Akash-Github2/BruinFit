import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Route, Router, Routes} from 'react-router-dom';
import Switch from "react-switch";
import Home from './Home'
import Food from './Food'
import Fitness from './Fitness'
import Friends from './Friends'








function App() {
  return (
    <div className='App'>
     <Navbar/>
        <Routes>
           { /*<Route exact path="/" component={Navbar} />*/}
  <Route exact path="food-fitness" element= {<><Food/><Fitness/></>}/>
  <Route exact path="friends" element= {<Friends/>}/>
        </Routes>
    </div>
      
  );
}
export default App;