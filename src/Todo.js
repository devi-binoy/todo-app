import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { MdDelete } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import {IoMdCheckmarkCircle} from 'react-icons/io'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div >
        {todo.text}
      </div>
      <div className='icons'>

      <IoMdCheckmarkCircle
           onClick={() => completeTodo(todo.id)}
          className = 'done-icon'
        />

        <MdDelete
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;