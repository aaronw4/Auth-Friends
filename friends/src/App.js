import React from 'react';
import Login from './Components/Login';
import Friends from './Components/Friends';
import PrivateRoute from './Components/PrivateRoute';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={Friends} />
        <Route exact path='/' component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
