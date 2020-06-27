/***************************************************************
 * @purpose  : Define service 
 * @file     : user.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 2/6/2020
***************************************************************/

import axios from 'axios';
require('dotenv').config();
const baseUrl = process.env.REACT_APP_USERURL
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
    

    logOut(token){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+`/logout?access_token=${token}`)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }

}

