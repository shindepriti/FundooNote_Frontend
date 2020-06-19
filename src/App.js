import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/pages/login';
import Registration from './components/pages/registration';
import Forgotpassword from './components/pages/forgotpassword';
import Resetpassword from './components/pages/resetpassword';
import Home from './components/dashboard/home';
import note from './components/note/displaynote'
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
          <Route path="/note" component={note} />
          
        </div>
      </Router>
    </div>
  );
}

export default App;
