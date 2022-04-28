import { useContext, memo, useCallback } from "react";
import { AppContext } from "../../context";

const Joke = () => {
  const { state, dispatch } = useContext(AppContext);
  const { id = -1, setup, delivery, joke, type = 'single' } = state.joke;

  const onLikesClickBth = useCallback(() => {
    dispatch.like(state.joke);
  }, []);


  const onDisLikesClickBth = useCallback(() => {
    dispatch.like(state.joke);
  }, []);
  
  if (!joke && !delivery) {
    return null;
  }

  return (
    <div>
      {(type === 'single') ? (
        <div>{joke!.split?.('\n').map(value => (<p key={`${value}`}>{value}</p>))}</div>
      ) : (
        <>
        <div>{setup}</div>
        <div>{delivery}</div>
        </>
      )}
      <button onClick={onLikesClickBth}>Like</button>
      <button onClick={onDisLikesClickBth}>DisLike</button>
    </div>
  );
};

export default memo(Joke);