/***************************************************************
 * @purpose  : Define service 
 * @file     : user.js              
 * @overview : service To  Validate User Input
 * @author   : priti shinde
 * @since    : 4/6/2020
***************************************************************/

export function emailValidate(email){
    if(email===undefined)
        return false;
    const emailRegex = /^([a-zA-Z]{3,}([._+-]?[a-zA-Z0-9])*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}[.]?[a-zA-Z]*)$/;
    if(email.match(emailRegex))
        return true
    return false    
 }

 export function passwordValiadate(password){
    if(password.length < 8 || password===undefined)
        return false
 }

 export function firstName(name){
     if(name===undefined || name.length < 3)
        return false

 }