import axios from 'axios';

export function login(){
    
    const user = {
        email: this.state.name,
        password:this.state.password
      };
      
    axios.post('"http://fundoonotes.incubation.bridgelabz.com/api/user/login"', {user})
    .then(function(data){
        console.log("Data",data);
        alert("Login Successfull");
    }),
    error=>{
        console.log("Not Login.."+error);
    }
}