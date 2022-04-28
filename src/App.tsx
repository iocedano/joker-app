import React, { useEffect, useState } from 'react';
import './App.css';
import Joke from './components/joke';
import axios from 'axios';
import { API_URL } from './constant';

function App() {

  
  return (
    <div className="App">
      {/* <Joke setup={joke?.setup} delivery={joke?.delivery} /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
