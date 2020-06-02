import React from 'react'
import "../css/registration.css"

import Button from '@material-ui/core/Button';
import { Card, TextField } from '@material-ui/core';

class Registration extends React.Component{
    constructor(){
        super()
            this.state={
                firstName:'',
                lastName:'',
                email:'',
                password:''
            }
    }
    
    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return (
            <div className="container">            
                <Card className="registerCard">
                    <div className="register-header">
                      Fundoo Registration      
                    </div>
                    <div className="input-container">
                        <TextField name="firstName" type="text"  label="First Name" value={this.state.firstName}  onChange={this.handleChange} required />
                        <TextField name="lastName" type="text"  label="Last Name" value={this.state.lastName}  onChange={this.handleChange} required />
                        <TextField name="email" type="text"  label="Email" value={this.state.email}  onChange={this.handleChange} required />
                        <TextField name="password" type="password" label="Password" value={this.state.password}  onChange={this.handleChange} required />
                    </div>
        
                    <div>
                        <Button variant="outlined" size="small" color="primary">Register</Button>
                    </div>

                </Card> 
            </div>          
          );
    }

}

export default Registration


