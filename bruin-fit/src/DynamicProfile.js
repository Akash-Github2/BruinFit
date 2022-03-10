import { useState } from "react";
import Group from "./Group";
import "./Profile.css";

//added this import statement down below to get it to compile
import React from "react";
import Profile from "./Profile";

export default function DynamicProfile({ stored, changeFullCall }) {
  console.log("Edit User Profile");

  const [name, setName] = useState(stored.name);
  const [email, setEmail] = useState(stored.email);

  const [age, setAge] = useState(stored.age);
  const [weight, setWeight] = useState(stored.weight);
  const [height, setHeight] = useState(stored.height);
  const [calorieGoal, setCalorieGoal] = useState(stored.calorieGoal);
  const [bio, setBio] = useState(stored.bio);

  function clickCancel() {
    changeFullCall(null);
  }

  function clickSave() {
    console.log("Saved");
    changeFullCall({ name, email, age, weight, height, calorieGoal, bio });
  }

  const buttonStyle = {};

  return (
    <>
      <Group>
        <h2>Name:</h2> {stored.name}
      </Group>

      <Group>
        <h2>Email:</h2> {stored.email}
      </Group>

      <Group>
        <h2>Age:</h2>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Group>

      <Group>
        <h2>Weight (lbs):</h2>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </Group>

      <Group>
        <h2>Height (in):</h2>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </Group>

      <Group>
        <h2>Calorie Goal:</h2>
        <input
          type="number"
          value={calorieGoal}
          onChange={(e) => setCalorieGoal(e.target.value)}
        />
      </Group>

      <Group>
        <h2>Bio:</h2>
        <input
          type="text"
          size="70"
          height="30"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </Group>

      <Group>
        <br />
        <editButton style={buttonStyle} onClick={clickSave}>
          Save
        </editButton>
        <editButton style={buttonStyle} onClick={clickCancel}>
          Cancel
        </editButton>
      </Group>
    </>
  );
}
