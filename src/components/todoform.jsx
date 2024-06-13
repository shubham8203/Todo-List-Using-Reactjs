import { useState } from "react";
import React from 'react'
import { useTodo } from '../context/todocontext';
function Todoform() {
      const [Todo,setTodo]=useState("")
      const {addTodo}=useTodo()
      const add=(e)=>{
       e.preventDefault();
       if(!Todo)return;
       addTodo({todo:Todo,completed:false});
       setTodo("");

      }

  return (
   <div className="flex justify-center items-center w-1/2 min-h-[10%]">
    <form onSubmit={add}
    className="w-full h-full border-gray-700 border-4 rounded-lg outline-gray-800 p-0 bg-blue-500 ">
        <input 
        type="text"
        value={Todo}
        onChange={(e)=>{
            setTodo(e.target.value);
        }}
        placeholder="Write Todo...."
        className=" border-2 rounded-lg border-gray-700 outline-none  bg-slate-300 h-full w-[90%]"
        >
        </input>
         <button type="submit" className="h-full bg-blue-500 w-[10%]" >
          Add
         </button>
    </form>
   </div>
  )
}

export default Todoform
