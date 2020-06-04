import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/login';
import Registration from './components/registration';
import Forgotpassword from './components/forgotpassword';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/forgotpassword" component={Forgotpassword} />
        </div>
      </Router>
    </div>
  );
}

export default App;
