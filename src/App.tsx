import React, { useState } from 'react'
import InputField from './components/InputField'
import Todo from './model';

const App : React.FC = () => {
  const [todo, setTodo] = useState <string  >("");
  const [todos,setTodos] = useState<Todo[]>([]);  

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("")
    }
  }
console.log(todos)
  return (
    <>
    <div className="App">
    <span className='heading'>Task
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}   />

      </span>
      {todos.map((item)=>(
        <li>{item.todo}</li>
      ))}
      </div>
    </>
  )
}

export default App
