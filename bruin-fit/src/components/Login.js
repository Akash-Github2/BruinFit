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

  return(
    <div className='center'>
      <div className='auth'>
        <h1>Log in to BruinFit!</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form name='login_form' onSubmit={(e) => {
            e.preventDefault();
            logInWithEmailAndPassword(email, password)
          }
        }>
          <input 
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <button type='submit'>Login</button>
        </form>
        <p>
          Don't have an account? 
          <Link to='/sign-up'>Create one here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;