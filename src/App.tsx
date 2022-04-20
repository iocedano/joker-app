import React, { useEffect, useState } from 'react';
import './App.css';
import Joke, { TJoke } from './components/joke';
import axios from 'axios';
import { API_URL } from './constant';

function App() {
  const [joke, setJoke] = useState<TJoke>();
  console.log('App');

  useEffect(() => {
    console.log('useEffect');
    // axios.get<TJoke>(API_URL).then(({ data }) => {
    //   console.log(data);
    //   setJoke(data);
    // });
  }, []);
  
  return (
    <div className="App">
      <Joke setup={joke?.setup} delivery={joke?.delivery} />
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
