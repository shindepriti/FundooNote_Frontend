import axios from 'axios';
import service from './httpservise'
export default class label{

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


 addNoteLabel(labelData){
     var authStr =localStorage.getItem('token');
      return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels`,labelData,{ headers: { Authorization: authStr } })
        
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