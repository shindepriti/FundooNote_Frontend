/***************************************************************
 * @purpose  : Define service 
 * @file     : user.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 2/6/2020
***************************************************************/

import axios from 'axios';

export function login(user){
    
   return axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",user)
   
}

export function register(user){
   return axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",user)
   
}
