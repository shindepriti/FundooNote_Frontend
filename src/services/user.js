/***************************************************************
 * @purpose  : Define service 
 * @file     : user.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 2/6/2020
***************************************************************/

import axios from 'axios';

export default class user{

     login(loginData){
        return new Promise((resolve, reject) => {
           axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',loginData)
           .then((response) => {
               resolve(response)
           })
           .catch((error) => {
               reject(error)
           })
     })
     }
        
     
     
     register(registerData){
           return new Promise((resolve, reject) => {
              axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",registerData)
              .then((response) => {
                  resolve(response)
              })
              .catch((error) => {
                  reject(error)
              })
        })
     }
     
     forgotPassword(user){
        
        return new Promise((resolve, reject) => {
           axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/reset",user)
           .then((response) => {
               resolve(response)
           })
           .catch((error) => {
               reject(error)
           })
     })
     }
     
    resetPassword(user,token){
        // var response =  axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=${token}`,user)
        // return response
     
        return new Promise((resolve, reject) => {
           axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=${token}`,user)
           .then((response) => {
               resolve(response)
           })
           .catch((error) => {
               reject(error)
           })
        })

    }

    logOut(){
        return new Promise((resolve,reject) =>{
            var AuthStr =localStorage.getItem('token');
            axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/logout`,{ headers: { Authorization: AuthStr } })
            .then((response)=>{
                resolve(response)
            
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }

}

