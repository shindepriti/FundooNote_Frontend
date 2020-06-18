/***************************************************************
 * @purpose  : Define service 
 * @file     : note.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 10/6/2020
***************************************************************/
import axios from 'axios';

export default class note{

    addNote(note){
       
            
        return new Promise((resolve, reject) => {
            var authStr =localStorage.getItem('token');
           axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',
           {
            title: note.title,
            description: note.description,
            id:note.id,
            isPined:note.isPined,
            color:note.color,
            label:note.label
        }, { headers: { Authorization: authStr } })
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
           axios.get(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=${token}`,)
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
             axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes?access_token=${token}`,
             {
                noteIdList:colorData.noteIdList,
                color:colorData.color  
             })
             .then((response)=>{
                 resolve(response)
             })
             .catch((error)=>{
                 reject(error)
             })
         })
     }
      
       

}
