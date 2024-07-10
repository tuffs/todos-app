import getTodos from '@/app/actions/getTodos';
import TodoItem from '@/app/components/TodoItem';

export default async function Todos() {
  // Get todos from the database, if not, get the error message
  const { todos, error } = await getTodos();

  // Display an error message to the user if there is an issue fetching from the database.
  if (error) {
    return <div className="error">{error}</div>
  }

  // All is well, display the todos!
  return ( 
    <>
      <div className="todo_list">
        { todos && todos.map((todo:any) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}