import { createContext, ReactNode, useReducer } from "react";
import { TJoke } from "../components/joke";

const AppContext = createContext({});

type TAppProvider = {
  children: ReactNode;
};

type TContextValue = {
  likes?: TJoke[]
  dislikes?: TJoke[]
}

const ACTION_TYPES = {
  LIKES: 'LIKES',
  DISLIKES: 'DISLIKES',
}

const initialState: TContextValue = {
  likes: [],
  dislikes: []
};
 
const reducer = (state, action) => {
  switch(action.type) {
    case ACTION_TYPES.LIKES: 
     
      return {
        ...state, 
        likes: [
          ...state.likes,
          ...action.payload,
        ]
      }
    case ACTION_TYPES.DISLIKES: 

      return {
        ...state, 
        likes: [
          ...state.likes,
          ...action.payload,
        ]
      }
  }
};

const AppProvider = ({ children  }: TAppProvider) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{
      state,
      dispatch: {
        like: (payload) => dispatch({ type: ACTION_TYPES.LIKES,  payload }),
        dislike: (payload) => dispatch({ type: ACTION_TYPES.LIKES,  payload })
      }}} >
      {children}
    </AppContext.Provider>
  )
}

export default {
  AppContext,
  AppProvider
};