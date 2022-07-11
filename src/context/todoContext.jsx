import React, { createContext, useContext, useReducer } from "react";

import { todoReducer, initialState } from "./toastReducer";

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const useTodoState = () => {
    const context = useContext(TodoStateContext)
    return context;
}

export const useTodoDispatch = () => {
    const context = useContext(TodoDispatchContext);
    return context;
}

export const TodoContext = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch} >
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}