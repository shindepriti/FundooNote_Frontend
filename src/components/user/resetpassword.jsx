/***************************************************************
 * @purpose  : Define reset password file 
 * @file     : resetpassword.jsx             
 * @overview : Componet To Handel When User Reset Password  
 * @author   : priti shinde
 * @since    : 3/6/2020
***************************************************************/
import React from 'react'
import '../../scss/forgotstyle.scss'
import {resetPassword} from '../../services/user'

import {Card, TextField, Button,Snackbar,IconButton,Link} from '@material-ui/core'

class Resetpassword extends React.Component{
    constructor(){
        super()
            this.state={
                newPassword:"",
                confirmPassword:""
            }
            this.state={
                snackbaropen:false,
                snackbarmsg:""
            }
    }

    snackbarClose=(event)=>{
        this.setState({snackbaropen:false})
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }
    handleLogin=(event)=>{
        this.props.history.push("/login")
    }

    handleSubmit=(event)=>{
        var user ={
            newPassword:this.state.newPassword,
            confirmPassword:this.state.confirmPassword
        }

        var token = this.props.match.params.token
        resetPassword(user,token)
            .then((response)=>{
                console.log(response) 
                this.setState({snackbaropen:true,snackbarmsg:"Password Reset Successfully,Open Your Account"})              
            })
            .catch(error=>{
                console.log(error)
                this.setState({snackbaropen:true,snackbarmsg:error.message})
        
            }) 

    }

   render(){
       return(
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
                            Reset Password
                        </div>
                        <div className="input-container">
                            <TextField name="newPassword" type="password"  label="new Password" variant="outlined" value={this.state.newPassword}  onChange={this.handleChange} required />
                            <TextField name="confirmPassword" type="password" label="Confirm Password" variant="outlined" value={this.state.confirmPassword} onChange={this.handleChange} required/>
                        </div >
                        <div className="flex-container-row full-width">
                            <div className="div-display">
                            <Link component="button" variant="body2" onClick={this.handleLogin} className="div-display">Login</Link>
                            </div>
                            <div className="div-display">                        
                                <Button variant="outlined" color="primary" onClick={this.handleClick}>Submit</Button>
                            </div>
                        </div > 


                    </Card>
           </div>       
           
       )
   }

}
export default Resetpassword