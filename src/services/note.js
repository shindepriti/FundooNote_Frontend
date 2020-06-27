/***************************************************************
 * @purpose  : Define service 
 * @file     : note.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 10/6/2020
***************************************************************/
import axios from 'axios';
require('dotenv').config();
const baseUrl = process.env.REACT_APP_NOTEURL
export default class note{

    addNote=(note)=>{
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

    pinUnpinNote(token,pinData){
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

    deleteNote(token,deleteData){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+`/trashNotes?access_token=${token}`,deleteData)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }

    deleteForever(token,deleteData){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+`/deleteForeverNotes?access_token=${token}`,deleteData)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }

    updateNote(token,data){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+`/updateNotes?access_token=${token}`,data)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }

    reminderNote(token,data){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+`/addUpdateReminderNotes?access_token=${token}`,data)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }

    removeReminder(token,data){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+`/removeReminderNotes?access_token=${token}`,data)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }

    addCollaborator(id,data){
       
        return new Promise((resolve,reject)=>{
            var authStr =localStorage.getItem('token');
            axios.post(baseUrl+`/${id}/AddcollaboratorsNotes`,data,{ headers: { Authorization: authStr } })
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }

    searchUserList(token,data){
        return new Promise((resolve,reject)=>{
            axios.post(process.env.REACT_APP_USERURL+`/searchUserList?access_token=${token}`,data)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }


    getNoteLabelList(token){           
        return new Promise((resolve, reject) => {
           axios.get(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/getNoteLabelList?access_token=${token}`)
           .then((response) => {
               resolve(response)
           })
           .catch((error) => {
               reject(error)
           })
     })
     }

     
     
     getNotesListByLabel(labelName){
        return new Promise((resolve,reject)=>{
            var authStr =localStorage.getItem('token');
            axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesListByLabel/${labelName}`,{},{ headers: { Authorization: authStr } })
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })
     }

     addNoteLabel(labelData){
        return new Promise((resolve,reject)=>{
            var authStr =localStorage.getItem('token');
            axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels`,labelData,{ headers: { Authorization: authStr } })
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })
     }

     updateNoteLabel(id,labelName){
        return new Promise((resolve,reject)=>{
            var authStr =localStorage.getItem('token');
            axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/${id}/updateNoteLabel`,{label:labelName},{ headers: { Authorization: authStr } })
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })
     }
     deleteNoteLabel(id){
        return new Promise((resolve,reject)=>{
            var authStr =localStorage.getItem('token');
            axios.delete(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/${id}/deleteNoteLabel`,{ headers: { Authorization: authStr } })
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })
     }
}
