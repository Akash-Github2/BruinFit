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
  const [year, setYear] = useState(''); 
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

        <div className = 'blueBox'>
          <h1>
            <div > Welcome to Bruinfit!  </div>
            <div className = 'discription'> Take control of your Life </div>
          </h1> 
        </div>

    

      <div className = 'goals'>
      
          <div className = 'yourFitnessSummaryUpdate'>  Update Your Fitness Summary  </div> 
          <div className="but">
          <div className="create">

                  <form>
            
                  <label className = 'Date'>Date:</label>

                  <div className = 'placement'>
                    
          
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
            
                    </div>


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
                      <option value="13"> 13 </option>
                      <option value="14"> 14 </option>
                      <option value="15"> 15 </option>
                      <option value="16"> 16 </option>
                      <option value="17"> 17 </option>
                      <option value="18"> 18 </option>
                      <option value="19"> 19 </option>
                      <option value="20"> 20 </option>
                      <option value="21"> 21 </option>
                      <option value="22"> 22 </option>
                      <option value="23"> 23 </option>
                      <option value="24"> 24 </option>
                      <option value="25"> 25 </option>
                      <option value="26"> 26 </option>
                      <option value="27"> 27 </option>
                      <option value="28"> 28 </option>
                      <option value="29"> 29 </option>
                      <option value="30"> 30 </option>
                      <option value="31"> 31 </option>

                    </select>

                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)} >
                      <option year="2023"> 2023 </option>
                      <option year="2022"> 2022 </option>
                      <option year="2021"> 2021 </option>
                      <option year="2020"> 2020 </option>
                      <option year="2019"> 2019 </option>
                      <option year="2018"> 2018 </option>
                      <option year="2017"> 2017 </option>
                      <option year="2016"> 2016 </option>
                      <option year="2015"> 2015 </option>
                      <option year="2014"> 2014 </option>
                      <option year="2013"> 2013 </option>
                      <option year="2012"> 2012 </option>
                      <option year="2011"> 2011 </option>
                      <option year="2010"> 2010 </option>
                      <option year="2009"> 2009 </option>
                      <option year="2008"> 2008 </option>
                      <option year="2007"> 2007 </option>
                      <option year="2006"> 2006 </option>
                      <option year="2005"> 2005 </option>
                      <option year="2004"> 2004 </option>
                      <option year="2003"> 2004 </option>
                      <option year="2002"> 2002 </option>
                      <option year="2001"> 2001 </option>
                      <option year="2000"> 2000 </option>

                    </select>
                    </form>
                  </div>
                  </div>

                  <div className="but">
                 
              
                
                  <div className="create">

                    
                     <form>
            
                     <label className = 'Weight'>Weight:</label>
                    <textarea
                      required
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    ></textarea>

                    </form>
                  </div>


              
                    <form>
                    <div className = 'create button'>
                    <form> <button> Add Information </button></form>
                    </div>
                    </form>

                
                  </div>

    
                
      <div className = 'greenBox'>
        <div className = 'caloriesRemaining'>
       <div className ='yourDailyCalorieCount'> Your Daily Calorie Count </div>
    
       
  
        </div>

        <div className = 'goalANDremaining'>
        GOAL:
        </div>

        <div className = 'goalANDremaining'>
        Remaining:
        </div>

      

      </div>

            


      </div> 


        <div style={{ 
          width: 1000
    
      }}
        className = 'yellowBox'
        >
      

        <div className = 'graphTitle'>  Your Fitness Summary  </div> 
        <LineChart chartData={userData} /> 
      
      </div>


        
      
        




     
      </>

    );
}


export default Home ; 