import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Login from './components/login';
import Registration from './components/registration';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
        </div>
      </Router>
    </div>
  );
}

export default App;
