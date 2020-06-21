/***************************************************************
 * @purpose  : Define forgot password file 
 * @file     : forgotpassword.jsx             
 * @overview : Componet To Handel When User Forgot Password  
 * @author   : priti shinde
 * @since    : 3/6/2020
***************************************************************/
import React from 'react'
import "../../scss/forgotstyle.scss"
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Card, TextField,Snackbar,IconButton } from '@material-ui/core';
import users from '../../services/user'
const service = new users()
class Forgotpassword extends  React.Component{
    constructor(){
        super()
        this.state={
            email:""
        }
        this.state={
            snackbaropen:false,snackbarmsg:""
        }
    }


    snackbarClose = ()=>{
        this.setState({snackbaropen:false})
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
        service.forgotPassword(user)
            .then((response)=>{
                console.log(response)  
                this.setState({snackbaropen:true, snackbarmsg:"Password Reset Link Send ,Check Your Email"})             
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
                    <Card className="forgotCard">
                        <div className="forgot-header">
                        Forgot Password      
                        </div>
                        <div className="input-container">
                            <TextField name="email" id="email" type="text" variant="outlined" label="Email" value={this.state.email} onChange={this.handleChange} required/>
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