/***************************************************************
 * @purpose  : Define service 
 * @file     : user.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 2/6/2020
***************************************************************/

import axios from 'axios';

const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user'
export default class user{

     login(loginData){
        return new Promise((resolve, reject) => {
           axios.post(baseUrl+'/login',loginData)
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
              axios.post(baseUrl+"/userSignUp",registerData)
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
           axios.post(baseUrl+"/reset",user)
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
           axios.post(baseUrl+`/reset-password?access_token=${token}`,user)
           .then((response) => {
               resolve(response)
           })
           .catch((error) => {
               reject(error)
           })
        })

    }

    logOut(token){
          var response =  axios.post(baseUrl+`/logout?access_token=${token}`)
         return response
    //     return new Promise((resolve,reject) =>{
    //         //var AuthStr =localStorage.getItem('token');
    //         //{headers: { token: sessionStorage.getItem("token") }
    //         axios.post(baseUrl+`/logout?access_token=${token}`)
    //         .then((response)=>{
    //             resolve(response)
            
    //         })
    //         .catch((error)=>{
    //             reject(error)
    //         })
    //     })
    // }

}

}