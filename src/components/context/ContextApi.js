import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

let initialValue = {
  basket: [],
};

export const ContextValue = createContext(initialValue);

const ContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(appReducer, initialValue);
  const addToBasket = (actions) => {
    dispatch({
      type: 'Add_To_Basket',
      payload: actions,
    });
  };
  return (
    <ContextValue.Provider value={{ basket: state.basket, addToBasket }}>
      {children}
    </ContextValue.Provider>
  );
};

export default ContextProvider;
