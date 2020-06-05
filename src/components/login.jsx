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
import { Divider ,Snackbar,IconButton } from '@material-ui/core';

class Login extends React.Component{
    constructor(props){
        super(props)
            this.state={
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

    handleClick = (event)=>{
        var user={
            email:this.state.email,
            password:this.state.password  
        }
        console.log(user)
       
        login(user)
            .then((response)=>{
                console.log(response)
                this.setState({snackbaropen:true,snackbarmsg:"Login Successfull"})
               
            })
            .catch(error=>{
                console.log(error)
                this.setState({snackbaropen:true,snackbarmsg:error.message})
            }) 
    }

    handleRegister=()=>{
        this.props.history.push('/register')
    }

    handleForgotPassword=()=>{
        this.props.history.push('/forgotpassword')
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
                <Card className="loginCard">
                    <div className="login-header">
                       Fundoo Login      
                    </div>
                    <div className="input-container">
                        
                        <TextField name="email" type="text" label="Email" value={this.state.email} onChange={this.handleChange} />
                        <TextField name="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="flex-container-row full-width">
                        <div className="div-display">
                            <Link component="button" variant="body2" onClick={this.handleForgotPassword}> Forgot password ?</Link>
                        </div>
                        <div className="div-display">                        
                            <Button variant="outlined" color="primary" onClick={this.handleClick}>Login</Button>
                        </div>
                    </div >                    
                    <Divider className="divider-margin full-width"  variant="middle" />
                    <div>
                        <Button variant="outlined" size="small" color="secondary" onClick={this.handleRegister} >Create New Account</Button>
                    </div>

                </Card> 
            </div>          
          );
    }

}

export default Login
