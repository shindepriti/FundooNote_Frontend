/***************************************************************
 * @purpose  : Define service 
 * @file     : user.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 2/6/2020
***************************************************************/

import axios from 'axios';

export function login(event){
    
    axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',event.user)
    .then(res=>{
        console.log(res)
        console.log(res.user)
    })
    .catch(error=>{
        console.log(error)

    }) 
}
