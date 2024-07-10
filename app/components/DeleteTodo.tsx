import { Todo } from '@/types/Todo';
import deleteTodo from '@/app/actions/deleteTodo';

export default function DeleteTodo({ todo } : { todo: Todo }) {
  const handleDeleteTodo = async() => await deleteTodo(todo.id);

  return ( 
    <>
      <small><small><small><a href="#!" className="delete" style={{color: "#b28fef9e"}} onClick={handleDeleteTodo}>[x]</a></small></small></small>
    </>
   );
}
