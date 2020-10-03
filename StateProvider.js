import React, { createContext, useContext, useReducer } from "react";

// Prepares the data Layer

export const StateContext = createContext();

// wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, childern }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {childern}
  </StateContext.Provider>
);

// Pull information from Data layer

export const useStateValue = () => useContext(StateContext);
