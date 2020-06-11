/***************************************************************
 * @purpose  : Define service 
 * @file     : note.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 10/6/2020
***************************************************************/
import axios from 'axios';
export default class note{

    addNote(noteData){
        return new Promise((resolve, reject) => {
            var AuthStr =localStorage.getItem('token');
           axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',noteData, { headers: { Authorization: AuthStr } })
           .then((response) => {
               resolve(response)
           })
           .catch((error) => {
               reject(error)
           })
     })
     }
        

}
