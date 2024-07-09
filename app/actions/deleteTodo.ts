"use server";

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache';

async function deleteTodo(todoId: number) {
  
  // Use a try/catch block to handle possible errors
  try {
    // Delete the todo from the database.
    const todo = await db.todo.delete({
      where: {
        id: todoId,
      },
    });

    // Revalidate the cache for the updated todo in object literal format
    revalidatePath('/');
  } catch (error) {

    // If there was an error in the try block, return an error message object
    return { error: "Error occurred while destroying this todo." };
  }
}

export default deleteTodo;