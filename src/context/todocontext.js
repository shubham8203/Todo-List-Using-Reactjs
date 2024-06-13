import {createContext,useContext} from 'react'

export const todoContext=createContext({
    todos:[
        {
            id:1,
            todo:"",
            complete:false
        }
    ],
    addTodo:(todo)=>{
    },
    deleteTodo:(id)=>{

    },
    updateTodo:(id,todo)=>{

    },
    toggleComplete:(id)=>{

    }
});

export const TodoProvider=todoContext.Provider;

export const useTodo=()=>{
    return useContext(todoContext);
}


