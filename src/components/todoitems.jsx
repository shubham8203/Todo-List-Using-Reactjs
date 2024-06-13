import {React,useState} from 'react'
import { useTodo } from '../context/todocontext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark, faFloppyDisk,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
 

 function Todoitems({todo}) {
            const [isTodoEditable,setisTodoEditable]=useState(false);
            const [todoMsg,settotdoMsg]=useState(todo.todo);

            const {updateTodo,deleteTodo,toggleComplete}=useTodo();

            const editTodo=()=>{
              updateTodo(todo.id,{...todo,todo:todoMsg});
              setisTodoEditable(false);
            }

            const toggleCompleted=()=>{
              toggleComplete(todo.id);
            }

  return (
         <div className={`flex w-1/2 h-full items-center border-black/10 rounded-lg px-1 py-1.5 gap-x-1 shadow-md shadow-white/20 text-black ${todo.completed?"bg-[#c6e9a7]":"bg-[#ccbed7]"} `}>

             <input
             type="checkbox"
             checked={todo.completed}
             onChange={toggleCompleted}
             className="h-full"
             title={todo.completed?"completed":"Not completed"}
             />
             <input
             type="text"
             value={todoMsg}
             onChange={(e)=>{
settotdoMsg(e.target.value);
             }}
             readOnly={!isTodoEditable}
             className='w-[80%] h-full outline-1 rounded-md px-1 py-1 shadow-sm shadow-slate-500'
             >
             </input>
             <button className={`${isTodoEditable?" bg-red-400":"bg-blue-300"} rounded-lg h-full shadow-lg border-black/10 border-2 w-[10%]`}
                  onClick={()=>{
               if(todo.completed)return;
               if(isTodoEditable){
                editTodo();
               }
               else{
                setisTodoEditable((prev)=> !prev);
               }
             }}
             disabled={todo.completed}>
              {isTodoEditable?<FontAwesomeIcon className="h-full w-full"  icon={faFloppyDisk} />:<FontAwesomeIcon className="h-full w-full" icon={faPenToSquare} />}
             </button>
             <button className="  bg-gray-50 flex justify-center  w-[10%] h-full p-1 rounded-lg border-black/10 shadow-lg  border-2" onClick={()=>deleteTodo(todo.id)}>
             <FontAwesomeIcon className="h-full w-full" icon={faCircleXmark} style={{color: "#d80e0e",}} />
             </button>
         </div>
   
  )
}

export default Todoitems

