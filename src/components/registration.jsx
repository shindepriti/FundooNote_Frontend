/***************************************************************
 * @purpose  : Define Registration Function 
 * @file     : registration.jsx              
 * @overview : Component To User Registrtaion 
 * @author   : priti shinde
 * @since    : 1/6/2020
***************************************************************/

import React from 'react'
import "../css/registration.css"

import {register} from '../services/user'
import Button from '@material-ui/core/Button';
import { Card, TextField ,Snackbar,IconButton} from '@material-ui/core';

class Registration extends React.Component{
    constructor(){
        super()
            this.state={
                firstName:'',
                lastName:'',
                role:'',
                service:'',
                email:'',
                password:''
            }
            this.state={
                snackbaropen:false,snackbarmsg:""
            }
                        
    }
    
    snackbarClose = (event)=>{
        this.setState({snackbaropen:false})
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleClick=(event)=>{
        var user={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            role:this.state.role,
            service:this.state.service,
            email:this.state.email,
            password:this.state.password  
        }
        console.log("componet",user)
        register(user)
            .then((response)=>{
                console.log(response)
                this.setState({snackbaropen:true,snackbarmsg:"Registartion Successfull"})
               
            })
            .catch(error=>{
                console.log(error)
                this.setState({snackbaropen:true,snackbarmsg:error.message})
            }) 
    }
    

    render(){
        return (
            <div className="container"> 
            <Snackbar
                anchorOrigin={{vertical:'center',horizontal:'center'}}
                open={this.state.snackbaropen}
                autoHideDuration={4000}
                onClose={this.snackbarClose}

                message={<span id="message-id">{this.state.snackbarmsg}</span>}
                action={[<IconButton key="close" arial-label="close" color="inherit" onClick={this.snackbarClose}>
                    x
                </IconButton>]}
            />
                
                  
                <Card className="registerCard">
                    <div className="register-header">
                      Registration      
                    </div>
                    <div className="input-container">
                        <TextField name="firstName" type="text" label="First Name" value={this.state.firstName}  onChange={this.handleChange} required />
                        <TextField name="lastName" type="text"  label="Last Name" value={this.state.lastName}  onChange={this.handleChange} required />
                        <TextField name="role" type="text"  label="role" value={this.state.role}  onChange={this.handleChange} required />
                        <TextField name="service" type="text"  label="service" value={this.state.service}  onChange={this.handleChange} required />
                        <TextField name="email" type="text"  label="Email" value={this.state.email}  onChange={this.handleChange} required />
                        <TextField name="password" type="password"  label="password" value={this.state.password}  onChange={this.handleChange} required />
                       
                    </div>
        
                    <div>
                        <Button variant="outlined" size="small" variant="outlined" color="primary" onClick={this.handleClick}>Register</Button>
                    </div>

                </Card> 
            </div>          
          );
    }

}

export default Registration


