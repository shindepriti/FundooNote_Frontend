import React from 'react'
import "../css/loginstyle.css"

class Login extends React.Component{
    constructor(props){
        super(props)
            this.state={
                email:'',
                password:''
            }
    }
    
    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const { email, password } = this.state;
    }

    render(){
        return (
            <div class="login">
                
                <form onSubmit={this.handleSubmit} class="login">
                    <input
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    />
      
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <button type="submit">Login</button>
              
              </form>
            </div>
                  
          );
    }

}

export default Login