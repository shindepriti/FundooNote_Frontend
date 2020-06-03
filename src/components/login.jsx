/***************************************************************
 * @purpose  : Define Login  Function 
 * @file     : login.jsx              
 * @overview : Component To User Login 
 * @author   : priti shinde
 * @since    : 1/6/2020
***************************************************************/

import React from 'react'
import "../css/loginstyle.css"

import {login} from '../services/user'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Card, TextField } from '@material-ui/core';
import { Divider } from '@material-ui/core';

class Login extends React.Component{
    constructor(){
        super()
            this.state={
                email:'',
                password:''
            }
    }
    
    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleClick = (event)=>{
        var user={
            email:this.state.email,
            password:this.state.password  
        }
        console.log(user)
        login(user)
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
                <Card className="loginCard">
                    <div className="login-header">
                      Fundoo Login      
                    </div>
                    <div className="input-container">
                        
                        <TextField name="email" type="text"  label="Email" value={this.state.email} onChange={this.handleChange} />
                        <TextField name="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="flex-container-row full-width">
                        <div className="div-display">
                            <Link component="button" variant="body2"> Forgot password ?</Link>
                        </div>
                        <div className="div-display">                        
                            <Button variant="outlined" color="primary" onClick={this.handleClick}>Login</Button>
                        </div>
                    </div >                    
                    <Divider className="divider-margin full-width"  variant="middle" />
                    <div>
                        <Button variant="outlined" size="small" color="secondary" >Create New User</Button>
                    </div>

                </Card> 
            </div>          
          );
    }

}

export default Login
