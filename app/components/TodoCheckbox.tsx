import { Todo } from '@/types/Todo';
import changeTodoStatus from '@/app/actions/changeTodoStatus';

const TodoCheckbox = ({ todo } : { todo: Todo }) => {
  const updateStatus = async () => {
    await changeTodoStatus(todo.id);
  };

  return ( 
    <>
      <input type="checkbox" checked={todo.status} onChange={updateStatus} />
    </>
  );
}

export default TodoCheckbox;