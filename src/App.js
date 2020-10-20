import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login"

function App() {
  return (
    <div className="App">
      <p>Hola</p>

          <Login />

      
    </div>
  );
}

export default App;
