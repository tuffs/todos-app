"use server";

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache';

interface TodoData {
  title: string,
  status: boolean,
}

interface TodoResult {
  data?: TodoData;
  error?: string;
}

async function addTodo(formData: FormData):Promise<TodoResult> {
  const textValue = formData.get('title') as string;

  // Check for valid input values
  if ( !textValue || textValue === "") {
    return { error: "Issue with the text value." }
  }

  // Ensure that title is a string
  const title: string = textValue.toString();

  try {
    const todoData: TodoData = await db.todo.create({
      data: {
        title: title,
        status: false,
      },
    });
    
    revalidatePath('/');

    return { data: todoData };
  } catch (error) {
    return { error: "Todo not added to database." }
  }
}

export default addTodo;