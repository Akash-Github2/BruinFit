/*
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
      console.log("go to home - user approved");
    }
  }, [user, loading]);

  
  return (
    <form className= "form-a" onSubmit={(e) => {
      e.preventDefault();
      logInWithEmailAndPassword(email, password)
    }
  }>
      <div className = "Login">
        <h2>Login to BruinFit!</h2>
        
        <div className= "form-group">
          <label htmlFor="email">Email:</label>
          <input type = "email" name = "email" id= "email" value={email} onChange={(e) => setEmail(e.target.value)}
              />
        </div>
        <div className= "form-group">
          <label htmlFor="password">Password:</label>
          <input type = "password" name = "password" id= "password" value={password} onChange={(e) => setPassword(e.target.value)}
             />
        </div>
        <input type="submit" value = "LOGIN"/>
        
        Don't have an account? <Link to="/sign-up">Register</Link> now.
      </div>
      
      <div className = "Register">
            Don't have an account? <Link to="/sign-up">Register</Link> now.
          </div>
      
  
    </form>
    
          
    
  );
}

export default Login;

*/