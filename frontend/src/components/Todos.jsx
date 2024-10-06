import { useState } from "react";

export function Todos({todos}) {
  console.log(todos);
  const todoFunc = function (todo) { 
    const [done, setDone] = useState("Mark as completed") 
    return <div>
      <h1>{todo.title}</h1>
        <h3>{todo.description}</h3>
        <button onClick={() => {
          setDone("Completed")
        }}>
          {done}
        </button>
    </div>
  }
  return <div>
    {todos.map((todo)=>todoFunc(todo))}
  </div>
}
