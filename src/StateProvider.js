import React ,{createContext,useContext,useReducer, Children} from 'react'
//this is data layer
export const StateContext =createContext();

//build a provider
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = ()=>useContext(StateContext)