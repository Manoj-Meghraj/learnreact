import {useState} from 'react';
export default function App(){
  const [tasks,setTasks] =useState('');
  const [todos,setTodos] = useState([]);
  function handleSubmit(){
    if (tasks ==="") return;
    setTodos([...todos,tasks]);
    setTasks("");
  }
  function handleDelete(index){
   const newTodos=todos.filter((_,i) => i!==index);
   setTodos(newTodos);
  }
 
  return (
    <div>
      <h1>Todo App</h1>
      <h3> Enter the todos list</h3>
      <input value={tasks} onChange={(e)=> setTasks(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>{todo} <button onClick={()=>handleDelete(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  )
}