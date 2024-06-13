import { useEffect, useState, React } from "react";
import { Todoform, Todoitems } from "./components/index";
import { useTodo, TodoProvider, todoContext } from "./context/todocontext";

function App() {
  const [todos, settodo] = useState([]);

  const addTodo = (todo) => {
    settodo((prev) => [
      {
        id: Date.now(),
        ...todo,
      },
      ...prev,
    ]);
  };

  const updateTodo = (id, todo) => {
    settodo((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };
  const deleteTodo = (id) => {
    settodo((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    settodo((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      settodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-full  pt-20">

      <TodoProvider
        value={{ addTodo, deleteTodo, updateTodo, toggleComplete, todos }}
      >
        <div className="flex items-center flex-col   gap-y-3  w-full h-screen ">
          <h1 className=" text-4xl font-bold text-white font-serif">Todo List</h1>
          <Todoform />
          {todos.map((todo) => (
            <div key={todo.id} className=" w-full h-[8%] flex justify-center">
              <Todoitems todo={todo} />
            </div>
          ))}
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
