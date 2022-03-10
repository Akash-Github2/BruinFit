import { useState } from 'react';
import Group from './Group';
import './Profile.css';

//added this import statement down below to get it to compile
import React from 'react'
import Profile from './Profile';

export default function DynamicProfile({
    stored,
    changeFullCall
}) {

    console.log("Edit User Profile");

    const [name, setName] = useState(stored.name);
    const [email, setEmail] = useState(stored.email);

    const [age, setAge] = useState(stored.age);
    const [weight, setWeight] = useState(stored.weight);
    const [height, setHeight] = useState(stored.height);
    const [aboutMe, setaboutMe] = useState(stored.aboutMe);
    const [bio, setBio] = useState(stored.bio);

    function clickCancel() {
        changeFullCall(null);
    }

    function clickSave() {
        console.log("Saved");
        changeFullCall({name, email, age, weight, height, aboutMe, bio});
    }

    const buttonStyle = 
    {
    };

    return <>
        <Group>           
            <h2>Name:</h2>
            <input 
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />            
        </Group>

        <Group>           
            <h2>Email:</h2>
            <input
                type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />            
        </Group>

        <Group>            
            <h2>Age:</h2>
            <input
                type='number'
                value={age}
                onChange={e => setAge(e.target.value)}
            />
        </Group>

        <Group>         
            <h2>Weight (Ibs):</h2>
            <input
                type='number'
                value={weight}
                onChange={e => setWeight(e.target.value)}
            />
        </Group>

        <Group>          
            <h2>Height (Inches):</h2>
            <input
                type='number'
                value={height}
                onChange={e => setHeight(e.target.value)}
            />
        </Group>

        <Group>           
            
            <h2>Calorie Goal:</h2>
            <input
                type='number'
                value={aboutMe}
                onChange={e => setaboutMe(e.target.value)}
            />  
        </Group>

        <Group>           
            <h2>Bio:</h2>
            <input
                type='text'
                size="70"
                height="30"
                value={bio}
                onChange={e => setBio(e.target.value)}
            />            
        </Group>

        <Group>
            <br/>
            <editButton style={buttonStyle} onClick={clickSave}>Save</editButton>
            <editButton style={buttonStyle} onClick={clickCancel}>Cancel</editButton>
        </Group>
    </>
}