import React, {Component} from 'react'
import db from "./../firebase";

//TODO: Make this the register class similar to login class (make sure login class is a bit different than the one online)

class SignUp extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            logInMode: true
        }

        // This binding is necessary to make `this` work in the callback
        // this.handleToggle = this.handleToggle.bind(this);
    }
    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleToggle() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            logInMode: !this.state.logInMode
        });
        console.log(this.state.logInMode)
    }

    logIn = e => {
        e.preventDefault();
        console.log("Log in pressed.");
    }

    signUp = e => {
        e.preventDefault();
        console.log("Sign Up pressed.");
        db.collection("users").doc(this.state.email).set({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        });
    }

    render() {
        return(
            <div>
                <button onClick={()=>this.handleToggle()}>
                    {this.state.logInMode ? "Login Mode" : "Sign Up Mode"}
                </button>
                <form onSubmit={this.state.logInMode ? this.logIn : this.signUp}>
                    {!this.state.logInMode &&
                    <div>
                        <div>
                            <label>First Name</label>
                            <input 
                                type="text" 
                                value={this.state.firstName}
                                onChange={this.handleFirstNameChange}
                            />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input 
                                type="text" 
                                value={this.state.lastName}
                                onChange={this.handleLastNameChange}
                            />
                        </div>
                    </div>
                    }
                    <div>
                        <label>Email</label>
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;