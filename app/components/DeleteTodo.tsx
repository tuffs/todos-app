"use client";

import { Todo } from '@/types/Todo';
import deleteTodo from '@/app/actions/deleteTodo';

const DeleteTodo = async({ todo } : { todo: Todo }) => {
  const handleDeleteTodo = async() => await deleteTodo(todo.id);

  return ( 
    <>
      <small><small><small><a href="#!" className="delete" style={{color: "#b28fef9e"}} onClick={handleDeleteTodo}>[x]</a></small></small></small>
    </>
   );
}
 
export default DeleteTodo;

