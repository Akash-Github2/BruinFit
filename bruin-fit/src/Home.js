

import { useState } from "react";
import LineChart from './components/LineChart'
import { UserData } from './Data'
import React from "react";
import "./Home.css";

// You must install:npm install --save react-chartjs-2 chart.js

function Home()
{

  // Graph Input Values
  const [month, setMonth] = useState('');
  const [calories, setCalories] = useState('');
  const [day, setDay] = useState('');
  const [weight, setWeight] = useState('');

  
// Weight and Calories Consumed Line Graph (Data.js has all values)
    const [userData] = useState({
        labels: UserData.map((data) => data.date),
        datasets: [
          {
            label: "Weight (lbs)", 
            data: UserData.map((data) => data.weight),
            borderColor: "rgba(255, 99, 132)",
            borderWidth:2,
            backgroundColor: "rgba(255, 99, 132)"
          },

          {
            label: "Calories Consumed", 
            data: UserData.map((data) => data.caloriesConsumed),
            borderColor: "rgb(100, 200, 235)",
            borderWidth:2,
            backgroundColor: "rgb(100, 200, 235)"
          },

          {
            label: "Calories Burned ", 
            data: UserData.map((data) => data.caloiresBurned ),
            borderColor: "rgb(53, 162, 235)",
            borderWidth:2,
            backgroundColor:  "rgb(53, 162, 235)"
          },


        ],
      });
      


    return(
      <> 

          <h1
            className = 'title'> Welcome to Bruinfit! 
            <div className = 'discription'> discription CHANGE CHANGE CHANGE </div>
          </h1> 

          <h1
            className = 'caloriesRemaining'> Calories Remaining: 0
          </h1> 

          
          <div className = 'CalorieTracker'> Update Fitness Summary
          
              <div className="create">
                  <form>
            
                  <label>Date:</label>
                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)} >
                      <option value="01"> 01 </option>
                      <option value="02"> 02 </option>
                      <option value="03"> 03 </option>
                      <option value="04"> 04 </option>
                      <option value="05"> 05 </option>
                      <option value="06"> 06 </option>
                      <option value="07"> 07 </option>
                      <option value="08"> 08 </option>
                      <option value="09"> 09 </option>
                      <option value="10"> 10 </option>
                      <option value="11"> 11 </option>
                      <option value="12"> 12 </option>
                    </select>
            
                    <select
                      value={day}
                      onChange={(e) => setDay(e.target.day)}
                    >
                      <option value="01"> 01 </option>
                      <option value="02"> 02 </option>
                      <option value="03"> 03 </option>
                      <option value="04"> 04 </option>
                      <option value="05"> 05 </option>
                      <option value="06"> 06 </option>
                      <option value="07"> 07 </option>
                      <option value="08"> 08 </option>
                      <option value="09"> 09 </option>
                      <option value="10"> 10 </option>
                      <option value="11"> 11 </option>
                      <option value="12"> 12 </option>
                      <option value="13"> 01 </option>
                      <option value="14"> 02 </option>
                      <option value="15"> 03 </option>
                      <option value="16"> 04 </option>
                      <option value="17"> 05 </option>
                      <option value="18"> 06 </option>
                      <option value="19"> 07 </option>
                      <option value="20"> 08 </option>
                      <option value="21"> 09 </option>
                      <option value="22"> 10 </option>
                      <option value="23"> 11 </option>
                      <option value="24"> 12 </option>
                      <option value="25"> 05 </option>
                      <option value="26"> 06 </option>
                      <option value="27"> 07 </option>
                      <option value="28"> 08 </option>
                      <option value="29"> 09 </option>
                      <option value="30"> 10 </option>
                      <option value="31"> 11 </option>

                    </select>
            
      

                    <label>Calories:</label>
                    <select
                      value={calories}
                      onChange={(e) => setCalories(e.target.value)}
                    >
                      <option value= "Consumed "> Consumed  </option>
                      <option value= "Burned"   > Burned    </option>
                    
                    </select>

                    <input 
                      type="text" 
                      required
                      value={calories}
                      onChange={(e) => setCalories(e.target.value)}
                    />
                  
            
                    <label>Weight:</label>
                    <textarea
                      required
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    ></textarea>
            
                
            
                    <button> Add Information </button>
                  </form>
      </div>
          

 </div> 



        <div style={{ width: 900 }}
        className = 'box'
        >
      

        <div className = 'graphTitle'>  Your Fitness Summary  </div> 
        <LineChart chartData={userData} /> 


      
          </div>


        




     
      </>

    );
}






export default Home ; 
