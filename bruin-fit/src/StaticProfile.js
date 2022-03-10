import Group from "./Group";

//added this import statement down below to get it to compile
import React from "react";

export default function StaticProfile({ stored }) {
  console.log();

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
    </div>
  );
}
