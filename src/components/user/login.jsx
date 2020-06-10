/***************************************************************
 * @purpose  : Define Login  Function 
 * @file     : login.jsx              
 * @overview : Component To User Login 
 * @author   : priti shinde
 * @since    : 1/6/2020
***************************************************************/

import React from 'react'
import "../../scss/loginstyle.scss"

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Card, TextField, InputLabel, Input} from '@material-ui/core';
import { Divider ,Snackbar,IconButton,InputAdornment} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import users from '../../services/user'
const service = new users()

class Login extends React.Component{
    constructor(props){
        super(props)
            this.state={
                email:'',
                password:'',
                snackbaropen:false,
                snackbarmsg:"",
                showPassword:false
            }
    }

    snackbarClose = ()=>{
        this.setState({snackbaropen:false})
    }
    
    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleClickShowPassword = () => {
        this.setState({showPassword:!this.state.showPassword});
      };
    
    handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    handleClick = (event)=>{
        var user={
            email:this.state.email,
            password:this.state.password  
        }
        console.log(user)
       
        service.login(user)
            .then((response)=>{
                console.log(response)
                if(response.status === 200){
                    localStorage.setItem("token",response.data.id);
                        //this.setState({snackbaropen:true,snackbarmsg:"Login Successfull"})
                        this.props.history.push("/navbar")

                }               
            })
            .catch(error=>{
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
                    <div className="login-header" >
                       Fundoo Login      
                    </div>
                   
                    <div className="input-container">
                        
                        <TextField name="email" type="text" label="Email" value={this.state.email} onChange={this.handleChange} required />
                        <FormControl>
                            <InputLabel>Password</InputLabel>
                            <Input name="password" type={this.state.showPassword ? 'text' : 'password'} value={this.state.password} onChange={this.handleChange} required
                                endAdornment={ <InputAdornment position="end">
                                    <IconButton aria-label="password visibility"  onClick={this.handleClickShowPassword} onMouseDown={this.handleMouseDownPassword}>
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    <div className="flex-container-row full-width">
                        <div className="div-display">
                            <Link component="button" variant="body2" onClick={this.handleForgotPassword}> Forgot password ?</Link>
                        </div>
                        <div className="div-display">                        
                            <Button variant="outlined" color="primary" onClick={this.handleClick} >Login</Button>
                        </div>
                    </div >                    
                    <Divider className="divider-margin full-width"  variant="middle" />
                    <div>
                       
                        <Link component="button" variant="body2" color="secondary" onClick={this.handleRegister}>Create New Account</Link>
                    </div>

                </Card> 
            </div>          
          );
    }

}

export default Login
