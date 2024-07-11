"use server";

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache';

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
}

interface RegisterUserResult {
  data?: RegisterUserData;
  error?: string;
}

async function registerUser(formData: FormData):Promise<RegisterUserResult> {
  const nameValue = formData.get('name') as string;
  const emailValue = formData.get('email') as string;
  const passwordValue = formData.get('password') as string;

  // Check for non-empty input values
  if ( !nameValue || nameValue === "" || !emailValue || emailValue === "" || !passwordValue || passwordValue === "") {
    return { error: "There was a problem with the data provided." }
  }

  // Check for valid input types
  if (typeof(nameValue) !== "string" || typeof(emailValue) !== "string" || typeof(passwordValue) !== "string") {
    return { error: "There was a problem with the data provided." }
  }

  // Ensure that name, email, and password are strings
  const name: string = nameValue.toString();
  const email: string = emailValue.toString();
  const password: string = passwordValue.toString();
  
  try {
    const registerUserData: RegisterUserData = await db.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    
    revalidatePath('/');

    return { data: registerUserData };
  } catch (error) {
    return { error: "User was not registered." }
  }
}

export default registerUser;