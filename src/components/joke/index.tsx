
export type TJoke = {
  setup?: string;
  delivery?: string;
  joke?: string;
};

const Joke = ({ setup, delivery, joke }: TJoke) => {
  let displayJoke: string[] = [];

  if (joke) {
    displayJoke = joke.split('\n');
  }

  return (
    <div>
      {joke ? (
        <div>{displayJoke.map(value => (<p key={`${value}`}>{value}</p>))}</div>
      ) : (
        <>
        <div>{setup}</div>
        <div>{delivery}</div>
        </>
      )}
    </div>
  );
};

Joke.displayName = 'Joke';

export default Joke;