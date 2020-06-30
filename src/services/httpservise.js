import axios from 'axios';

export default {
    get(baseUrl){
        return axios.get(baseUrl)
        .then(response => response.data)
        .catch((error)=>{
            return error;
        })
    },

    post(baseUrl,subUrl,data){
        return axios.post(baseUrl+subUrl,data)
        .then(response => response.data)
        .catch((error)=>{
            return error;
        })
    },

    postAuth(baseUrl,subUrl,data,authToken){
        return axios.post(baseUrl+subUrl,data,authToken)
        .then(response => response.data)
        .catch((error)=>{
            return error;
        })
    }
           
}