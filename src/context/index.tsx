import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { API_URL } from "../constant";
import { Action, IContext, TAppProvider, TContextValue, TJoke } from "../type";


const ACTION_TYPES = {
  LIKES: 'LIKES',
  DISLIKES: 'DISLIKES',
  UPDATE_JOKE: 'UPDATE_JOKE'
}

const initialState: TContextValue = {
  likes: [],
  dislikes: [],
  joke: {},
};

const initialContext = {
  state: initialState,
  dispatch: {
    like: () => null,
    dislike: () => null,
  }
}

export const AppContext = createContext<IContext>(initialContext);

const reducer = (state: TContextValue, action: Action) => {
  switch(action.type) {
    case ACTION_TYPES.LIKES:     
      return {
        ...state, 
        likes: [
          ...state?.likes || [],
          action.payload
        ]
      }

    case ACTION_TYPES.UPDATE_JOKE:
      return {
        ...state,
        joke: action.payload,
      }

    default:
      return {
        ...state, 
        dislikes: [
          ...state?.dislikes || [],
          action.payload,
        ]
      }
  }
};

export const AppProvider = ({ children  }: TAppProvider) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get<TJoke>(API_URL).then(({ data }) => {
      dispatch({ type: 'UPDATE_JOKE', payload: data });
    });
  }, [state.likes.length, state.dislikes.length]);

  return (
    <AppContext.Provider value={{
      state,
      dispatch: {
        like: (payload: TJoke) => dispatch({ type: ACTION_TYPES.LIKES,  payload }),
        dislike: (payload: TJoke) => dispatch({ type: ACTION_TYPES.LIKES,  payload })
      }}} >
      {children}
    </AppContext.Provider>
  )
}
