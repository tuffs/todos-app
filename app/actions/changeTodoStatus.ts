"use server";

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache';

async function changeTodoStatus(todoId: number): Promise<{ updatedTodo?: Boolean | null; error?: string; }> {
  
  // Use a try/catch block to handle possible errors
  try {
    // Obtain the todo from the database.
    const todo = await db.todo.findUnique({
      where: {
        id: todoId,
      },
    });

    // Check if the todo exists in the database
    if (!todo) {
      throw new Error('Todo not found in the database.');
    }

    // Update the todo status in the database using ! for the opposite value.
    const updatedTodo = await db.todo.update({
      where: {
        id: todoId,
      },
      data: {
        status: !todo.status,
      },
    });

    // Revalidate the cache for the updated todo in object literal format
    revalidatePath('/');

    // Return the updates todo status, type: Boolean
    return { updatedTodo: updatedTodo.status };
  } catch (error) {

    // If there was an error in the try block, return an error message object
    return { error: "Error changing the status of this todo." };
  }
}

export default changeTodoStatus;