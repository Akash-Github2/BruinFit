import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "./../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState(""); //in inches
  const [weight, setWeight] = useState("");
  const [weightGoal, setWeightGoal] = useState("");
  //TODO: add in the multiple choice for desired weight change per week over here
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
        navigate("/home");
        console.log("go to home - user approved");
        console.log(user.email);
      }
  }, [user, loading]);

  return (
    <div className= 'center'>
      <div className = 'auth'>
        <h1>Create Your BruinFit Account!</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form name ='register_form' onSubmit={(e) => {
              e.preventDefault();
              registerWithEmailAndPassword(firstName, lastName, email, password, age, height, weight, weightGoal);
            }
          }>
          
            <input
              type="text"
              value={firstName}
              required
              placeholder= "First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          

          
            <input
              type="text"
              value={lastName}
              required
              placeholder = "Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          

      
            <input
              type="text"
              value={email}
              required
              placeholder = "Email"
              onChange={(e) => setEmail(e.target.value)}
            />
  

          
            <input
              type="password"
              value={password}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />


          {/* const [age, setAge] = useState("");
  const [height, setHeight] = useState(""); //in inches
  const [weight, setWeight] = useState("");
  const [weightGoal, setWeightGoal] = useState(""); */}

          
            <input
              type="text"
              value={age}
              required
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              
            />
         

          
            <input
              type="text"
              value={height}
              required
              placeholder="Height"
              onChange={(e) => setHeight(e.target.value)}
            />
        

        
            <input
              type="text"
              value={weight}
              required
              placeholder="Weight"
              onChange={(e) => setWeight(e.target.value)}
              
            />
         

         
            <input
              type="text"
              value={weightGoal}
              required
              placeholder="Weight Goal"
              onChange={(e) => setWeightGoal(e.target.value)}
              
            />
        

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? 
          <Link to='/'>Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;