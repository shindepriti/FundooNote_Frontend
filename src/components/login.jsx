import React from 'react'
import "../css/loginstyle.css"

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

    render(){
        return (
            <div className="container">            
                <Card className="loginCard">
                    <div className="login-header">
                      Fundoo Login      
                    </div>
                    <div className="input-container">
                        
                        <TextField name="email" type="text"  label="Email" value={this.state.email} onChange={this.handleChange} required />
                        <TextField name="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange} required />
                    </div>
                    <div className="flex-container-row full-width">
                        <div className="div-display">
                            <Link component="button" variant="body2"> Forgot password ?</Link>
                        </div>
                        <div className="div-display">                        
                            <Button variant="outlined" color="primary">Login</Button>
                        </div>
                    </div >                    
                    <Divider className="divider-margin full-width"  variant="middle" />
                    <div>
                        <Button variant="outlined" size="small" color="secondary">Create New User</Button>
                    </div>

                </Card> 
            </div>          
          );
    }

}

export default Login
