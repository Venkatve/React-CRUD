import React from 'react'

const TodoFrom = ({handleSubmit,setTodo,editId,todo}) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
          <input placeholder='Enter task....'
          value={todo}
          onChange={(e)=>setTodo(e.target.value)} />
          <button type='submit'>{editId ? "Edit" : "Go"}</button>
        </form>
  )
}

export default TodoFrom