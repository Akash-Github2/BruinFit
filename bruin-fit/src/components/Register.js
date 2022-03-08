import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "./../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Register.css";

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
    <div>
      <div>
        <form onSubmit={(e) => {
              e.preventDefault();
              registerWithEmailAndPassword(firstName, lastName, email, password, age, height, weight, weightGoal);
            }
          }>
          <div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>

          <div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>

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

          {/* const [age, setAge] = useState("");
  const [height, setHeight] = useState(""); //in inches
  const [weight, setWeight] = useState("");
  const [weightGoal, setWeightGoal] = useState(""); */}

          <div>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
          </div>

          <div>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Height"
            />
          </div>

          <div>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight"
            />
          </div>

          <div>
            <input
              type="text"
              value={weightGoal}
              onChange={(e) => setWeightGoal(e.target.value)}
              placeholder="Weight Goal"
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;