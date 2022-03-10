import { useState } from 'react';
import './Profile.css';
import DynamicProfile from './DynamicProfile';
import StaticProfile from './StaticProfile';

//added the two import statements down below to get it to compile
import React from 'react'

function defaultName() {
    "Edit Name"; 
}

function defaultAge() {
    "Edit Age"; 
}

function defaultWeight() {
    "Edit Weight"; 
}

function defaultHeight() {
    "Edit Height"; 
}

function defaultAboutMe() {
    "Edit About Me"; 
}

function defaultEmail() { 
    "Edit Email"; 
}

function defaultBio() { 
    "Edit Bio"; 
}

function Profile() {
    const [editingMode, setEditingMode] = useState(false);

    const [name, setName] = useState(defaultName());

    const [age, setAge] = useState(defaultAge());
    const [email, setEmail] = useState(defaultEmail());
    const [weight, setWeight] = useState(defaultWeight());
    const [height, setHeight] = useState(defaultHeight());
    const [aboutMe, setAboutMe] = useState(defaultAboutMe());
    const [bio, setBio] = useState(defaultBio());

    const stored = {name, email, age, weight, height, aboutMe, bio};
    
    function finishEditing(result) {
        console.log("finishEditing", result);
        if (result != null) {
            setName(result.name);
            setEmail(result.email);
            setAge(result.age);
            setWeight(result.weight);
            setHeight(result.height);
            setAboutMe(result.aboutMe);
            setBio(result.bio);
        }        
        setEditingMode(false);
    }

    return (
<<<<<<< HEAD
        <div className="pcontainer">
=======

          
        <div className="container">
            
>>>>>>> 8adf476677f605ce8c84f75f3ae8ccebccd3e494
            <div className="Profile">                 
                {
                    editingMode
                        ? <>
                            <h1>MY PROFILE</h1>
                            <DynamicProfile
                                    stored={stored}
                                    changeFullCall={finishEditing}                            
                            />
                        </>
                        : <>
                            <h1>MY PROFILE</h1>
                            
                            <StaticProfile
                                    stored={stored}
                                    changeFullCall={() => setEditingMode(true)}
                            />
                        </>
                }            
            </div>
        </div>
    );
}

export default Profile;