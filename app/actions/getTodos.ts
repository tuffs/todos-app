"use server"

import { db } from '@/lib/db';
import { Todo } from '@/types/Todo';

async function getTodos(): Promise<{todos?: Todo[]; error?: string;}> {
  try {
    const todos = await db.todo.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return { todos };  
  } catch (error) {
    return { error: "Todos not received from the database." }
  }
}

export default getTodos;