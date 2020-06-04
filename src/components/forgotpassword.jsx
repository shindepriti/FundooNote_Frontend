/***************************************************************
 * @purpose  : Define forgot password file 
 * @file     : forgotpassword.jsx             
 * @overview : Componet To Handel When User Forgot Password  
 * @author   : priti shinde
 * @since    : 3/6/2020
***************************************************************/
import React from 'react'
import {forgotPassword} from "../services/user";
import "../css/forgotstyle.css"

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Card, TextField } from '@material-ui/core';

class Forgotpassword extends  React.Component{
    constructor(){
        super()
        this.state={
            email:""
        }
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleRegister=(event)=>{
        this.props.history.push("/register")
    }

    handleForgot=(event)=>{
        var user={
            email:this.state.email
        }
        console.log(user)
        forgotPassword(user)
            .then((response)=>{
                console.log(response)               
            })
            .catch(error=>{
                console.log(error)
        
            }) 
    }

    render(){
        return (
            <div className="container">            
                <Card className="forgotCard">
                    <div className="forgot-header">
                       Forgot Password      
                    </div>
                    <div className="input-container">
                        <TextField name="email" type="text" variant="outlined" label="Email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="flex-container-row full-width">
                        <div className="div-display">
                            <Link component="button"onClick={this.handleRegister} variant="body2"> Create New Account</Link>
                        </div>
                        <div className="div-display">                        
                            <Button variant="outlined" color="primary" onClick={this.handleForgot}>Submit</Button>
                        </div>
                    </div > 
                </Card> 
            </div>          
          );
    }

} 

export default Forgotpassword