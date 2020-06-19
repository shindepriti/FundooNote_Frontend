/***************************************************************
 * @purpose  : Define service 
 * @file     : note.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 10/6/2020
***************************************************************/
import axios from 'axios';
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/notes'
export default class note{

    addNote(note){
       
            
        return new Promise((resolve, reject) => {
            var authStr =localStorage.getItem('token');
           axios.post(baseUrl+'/addNotes',note, { headers: { Authorization: authStr } })
           .then((response) => {
               resolve(response)
           })
           .catch((error) => {
               reject(error)
           })
     })
     }

     
     getNote(token){
                   
        return new Promise((resolve, reject) => {
           axios.get(baseUrl+`/getNotesList?access_token=${token}`,)
           .then((response) => {
               resolve(response)
           })
           .catch((error) => {
               reject(error)
           })
     })
     }

     changeColor(token,colorData){
         return new Promise((resolve,reject) =>{
             axios.post(baseUrl+`/changesColorNotes?access_token=${token}`,colorData)
             .then((response)=>{
                 resolve(response)
             })
             .catch((error)=>{
                 reject(error)
             })
         })
     }
       archiveNote(token,noteData){
            return new Promise((resolve,reject) =>{
            axios.post(baseUrl+`/archiveNotes?access_token=${token}`,noteData)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }

    getArchiveNotes(token){
        return new Promise((resolve,reject)=>{
            axios.get(baseUrl+`/getArchiveNotesList?access_token=${token}`)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }

    pinUnpinNote(pinData,token){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+`/pinUnpinNotes?access_token=${token}`,pinData)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }

       

}
