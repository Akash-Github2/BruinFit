import Group from "./Group";

//added this import statement down below to get it to compile
import React from "react";

export default function StaticProfile({ stored, changeFullCall }) {
  console.log();

  const buttonStyle = {};

  return (
    <div>
      <Group>
        <h2>Name:</h2> {stored.name}
      </Group>

      <Group>
        <h2>Email:</h2> {stored.email}
      </Group>

      <Group>
        <h2>Age:</h2> {stored.age}
      </Group>

      <Group>
        <h2>Weight (lbs):</h2> {stored.weight}
      </Group>

      <Group>
        <h2>Height (in):</h2> {stored.height}
      </Group>

      <Group>
        <h2> Calorie Goal:</h2> {stored.calorieGoal}
      </Group>

      <Group>
        <h2>Bio:</h2> {stored.bio}
      </Group>

      <Group>
        <br />
        <editButton style={buttonStyle} onClick={changeFullCall}>
          Edit Profile
        </editButton>

        <br/>  
            <br/>  
            <br/>  
            <br/>

            <h2> Search For Other Friends' Profiles!: </h2>

            <br/>
            <br/>
            
            <textarea 
                type = "text" 
                name = "date" 
                rows="4" cols="50"
                placeholder = "Search For Friends!"
                font-size = "18px"
            />   
            <br/>
            <br/>
            <searchButton type= "submit">Search</searchButton>

      </Group>
    </div>
  );
}
