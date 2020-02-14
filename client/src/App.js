import React from 'react';
import logo from './logo.svg';
import './App.css';
import Maker from './Maker'
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar></Navbar>
        <Maker></Maker>
      </header>
    </div>
  );
}

export default App;
