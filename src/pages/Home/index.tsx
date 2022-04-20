import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Joke, { TJoke } from '../../components/joke';
import { API_URL } from '../../constant';

function Home() {
  const [joke, setJoke] = useState<TJoke>();

  useEffect(() => {
    if (!joke) {
      axios.get<TJoke>(API_URL).then(({ data }) => {
        console.log(data);
        setJoke(data);
      });
    }
  }, [joke]);
  
  return (
    <div className="homeContainer">
      <Joke setup={joke?.setup} delivery={joke?.delivery} joke={joke?.joke} />
    </div>
  );
}

export default Home;
