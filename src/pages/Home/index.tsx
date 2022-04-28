import { useContext } from 'react';
import Joke from '../../components/joke';
import  { AppContext, AppProvider } from '../../context';

function Home() {
  const { state: { joke } } = useContext(AppContext);

  console.log(joke)
  
  return (
    <AppProvider>
      <div className="homeContainer">
        <Joke />
      </div>
    </AppProvider>
  );
}

export default Home;
