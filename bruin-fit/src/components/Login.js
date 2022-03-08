import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
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
    <div>
      <div>
        <form onSubmit={(e) => {
              e.preventDefault();
              logInWithEmailAndPassword(email, password)
            }
          }>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
          <div>
            Don't have an account? <Link to="/sign-up">Register</Link> now.
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;