"use client";

import { Todo } from '@/types/Todo';
import DeleteTodo from '@/app/components/DeleteTodo';
import TodoCheckbox from '@/app/components/TodoCheckbox';

export default function TodoItem({ todo }: { todo: Todo }) {
  return ( 
    <>
      <div className="todo_list_item d-flex justify-content-between" key={todo.id}>
        <span>
          {todo.status === true ? (<s>{todo.title}</s>) : todo.title}
          &nbsp;&nbsp;<DeleteTodo todo={todo} />
        </span>
        <TodoCheckbox todo={todo} />
      </div>
    </>
  );
}