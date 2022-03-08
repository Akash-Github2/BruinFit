import { useState } from 'react';
import './App.css';
import EditableUserProfile from './DynamicProfile';
import Username from './StaticProfile';

const animals = [
    "Aardvark",
    "Albatross",
    "Alpaca",
    "Alligator",
    "Anchovie",
    "Angelfish",
    "Ant",
    "Antelope",
    "Armadillo",
    "Aurochs",
    "Axolotl"
]

/*
function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}
*/

function defaultName() {
    "Edit Name"; 
}


function Profile() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime());

    const [editMode, setEditMode] = useState(false);

    const [name, setName] = useState(defaultName());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());
    //const [color, setColor] = useState(randomColor());

    const stored = {name, month, day/*, color*/};
    
    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.name);
            setMonth(result.month);
            setDay(result.day);
            //setColor(result.color);
        }        
        setEditMode(false);
    }

    return (
        <div className="container">
            <div className="Profile">                 
                {
                    editMode
                        ? <>
                            <h1>My Profile</h1>
                            <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                            <h1>My Profile</h1>
                            
                            <Username
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        </div>
    );
}

export default Profile;