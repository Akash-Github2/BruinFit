import React, { Component } from "react";
import Friends from './Friends'

const API_BASE = "http://rest.learncode.academy/api/efa/friends";

//creating a friendslist
class FriendsList extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {friends: []};
    }



mountingData()
{
    fetch(API_BASE)
    .then(res =>res.json())
    .then(response => {
        console.log(response)
        this.ListeningStateChangedEvent({friends: response})
    })

}

deleteFriend = (e, friend) => 
{
    fetch('${API_BASE}/${friend.id}', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res=>
    {
        let tempFriends = this.state.friends.filter(fr => fr !==friend)
        this.setState({friends: tempFriends})

    })
}

handleSubmit = event => 
{
    event.preventDefault();
    var name = this.refs.name.value;
    var age = this.refs.age.value;
    var friendsTemp = this.state.friends;

    fetch(API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, age: age })
      })
        .then(res => res.json())
        .then(response => {
          console.log(response)
          friendsTemp.push(response)
          this.setState({ friends: friendsTemp })
          this.refs.name.value = ""
          this.refs.age.value = ""
        })      
}

render() {
  return (
    <div className="main">
      <div className="mainDiv">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h3>Friends</h3>
          <fieldset className="form-group">
            <label>Friend's Email:</label>
            <input
              type="text"
              ref="name"
              name="name"
              className="form-control"
            />
          </fieldset>
          <button className="btn btn-success" type="submit">
            Add Friend
          </button>
        </form>
      </div>
    </div>
  );
}
}


export default FriendsList;
