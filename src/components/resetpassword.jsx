/***************************************************************
 * @purpose  : Define reset password file 
 * @file     : resetpassword.jsx             
 * @overview : Componet To Handel When User Reset Password  
 * @author   : priti shinde
 * @since    : 3/6/2020
***************************************************************/
import React from 'react'
import '../css/forgotstyle.css'
import {resetPassword} from '../services/user'

import {Card, TextField, Button } from '@material-ui/core'

class Resetpassword extends React.Component{
    constructor(){
        super()
            this.state={
                newPassword:""
            }
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=(event)=>{
        var user ={
            newPassword:this.state.newPassword
        }

        var token = this.props.match.params.token
        resetPassword(user,token)
            .then((response)=>{
                console.log(response)               
            })
            .catch(error=>{
                console.log(error)
        
            }) 

    }

   render(){
       return(
           <div className="container">
                <Card className="forgotCard">
                    <div className="forgot-header">
                        Reset Password
                    </div>
                    <div className="input-container">
                        <TextField name="newPassword" type="text" label="New Password" variant="outlined" value={this.state.newPassword} onChange={this.handleChange}></TextField>
                    </div>
                    <div>
                        <Button variant="outlined" color="primary" onClick={this.handleSubmit}>submit</Button>
                    </div>

                </Card>
           </div>       
           
       )
   }

}
export default Resetpassword