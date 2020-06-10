import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/user/login';
import Registration from './components/user/registration';
import Forgotpassword from './components/user/forgotpassword';
import Resetpassword from './components/user/resetpassword';
import Home from './components/dashboard/home';
import card from './components/note/createnote'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/forgotpassword" component={Forgotpassword} />
          <Route path="/resetpassword/:token" component={Resetpassword}/>
          <Route path="/navbar" component={Home} />
          <Route path="/note" component={card} />
          
        </div>
      </Router>
    </div>
  );
}

export default App;
