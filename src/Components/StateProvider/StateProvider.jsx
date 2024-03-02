import React, { createContext, useContext, useReducer } from 'react'
// prepare the data layer ->> creating and exporting the context
export const StateContext = createContext()
// wrap the app and provide the Data layer
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// pull/push information from the data layer
export const useStateValue=()=>useContext(StateContext)