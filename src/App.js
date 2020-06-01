import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
