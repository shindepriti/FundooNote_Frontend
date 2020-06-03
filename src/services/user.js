/***************************************************************
 * @purpose  : Define service 
 * @file     : user.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 2/6/2020
***************************************************************/

import axios from 'axios';

export function login(user){
    
    axios.post('http://fundoonotes.incubation.bridgelabz.com/explorer/',user)
    .then(res=>{
        console.log(res)
        console.log(res.user)
    })
    .catch(error=>{
        console.log(error)

    }) 
}

export function register(user){
    axios.post("http://fundoonotes.incubation.bridgelabz.com/explorer/",user)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })
}
