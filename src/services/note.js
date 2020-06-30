/***************************************************************
 * @purpose  : Define service 
 * @file     : note.js              
 * @overview : service To integration With Backend Api 
 * @author   : priti shinde
 * @since    : 10/6/2020
***************************************************************/
import axios from 'axios';
import service from './httpservise'
require('dotenv').config();
const baseUrl = process.env.REACT_APP_NOTEURL
export default class note{

    addNote=(note)=>{
      var authStr =localStorage.getItem('token');
      return axios.post(baseUrl+'/addNotes',note, { headers: { Authorization: authStr } })
          
     }

     getNote(token){       
        return axios.get(baseUrl+`/getNotesList?access_token=${token}`)  
     }

     changeColor(token,colorData){
        return service.post(baseUrl,`/changesColorNotes?access_token=${token}`,colorData)
             
     }
       archiveNote(token,noteData){
        return service.post(baseUrl,`/archiveNotes?access_token=${token}`,noteData)
            
    }

    getArchiveNotes(token){
        return service.get(baseUrl,`/getArchiveNotesList?access_token=${token}`)
            
    }

    pinUnpinNote(token,pinData){
        return service.post(baseUrl,`/pinUnpinNotes?access_token=${token}`,pinData)

    }

    deleteNote(token,deleteData){
        return service.post(baseUrl,`/trashNotes?access_token=${token}`,deleteData)

    }

    deleteForever(token,deleteData){
        return service.post(baseUrl,`/deleteForeverNotes?access_token=${token}`,deleteData)

    }

    updateNote(token,data){
        return service.post(baseUrl,`/updateNotes?access_token=${token}`,data)
    }

    reminderNote(token,data){
       return service.post(baseUrl,`/addUpdateReminderNotes?access_token=${token}`,data)
    }

    removeReminder(token,data){
      return  service.post(baseUrl,`/removeReminderNotes?access_token=${token}`,data)
    }

    addCollaborator(id,data){
        var authStr =localStorage.getItem('token');  
        return  service.postAuth(baseUrl,`/${id}/AddcollaboratorsNotes`,data,{ headers: { Authorization: authStr } })
  
    }

    removeCollaborator(id,userId){
        var authStr =localStorage.getItem('token');
        return service.delete(baseUrl,`/${userId}/removeCollaboratorsNotes/${id}`,{ headers: { Authorization: authStr } })
        
    }

    searchUserList(token,data){
        return service.post(process.env.REACT_APP_USERURL,`/searchUserList?access_token=${token}`,data)
  
    }     
     
     getNotesListByLabel(labelName){
        var authStr =localStorage.getItem('token');
        return service.postAuth(baseUrl,`/getNotesListByLabel/${labelName}`,{},{ headers: { Authorization: authStr } })
           
     }

     addLabelToNote(id,userId){
        var authStr =localStorage.getItem('token');
        return service.postAuth(baseUrl,`/${id}/addLabelToNotes/${userId}/add`,{},{ headers: { Authorization: authStr } })
           
           
     }

     removeLabelToNote(id,userId){
        var authStr =localStorage.getItem('token');
        return service.postAuth(baseUrl,`/${id}/addLabelToNotes/${userId}/remove`,{},{ headers: { Authorization: authStr } })
            
     }         
}
