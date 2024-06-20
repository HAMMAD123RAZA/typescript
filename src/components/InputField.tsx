import React from 'react'

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}


const InputField:React.FC <Props> = ({todo ,setTodo,handleAdd}) => {
  return (
    <>
<form action="" className='input' onSubmit={handleAdd}>
    <input type="text" placeholder='enter anything' value={todo} onChange={(e)=>setTodo(e.target.value)} />
    <button type='submit' className='input__submit'>Go</button>
    </form>      
    </>
  )
}

export default InputField