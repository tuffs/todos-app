"use server"

import { db } from '@/lib/db';

async function signIn(formData: FormData): Promise<{isSignedIn?: boolean; error?: string;}> {
  // Instantiate a signInErrorString so as not to reveal unneeded information to attack vectors
    // This is a security measure to prevent attackers from knowing if the email is correct,
    // OR the password is correct. This will not allow an attacker to know if a user even exists
    // in the database.
  
  // Safety first when Rolling-Your-Own Authentication!
  const signInErrorString:string = "Email or Password Invalid. Try again.";

  // Assign and type check the email and password supplied from formData
  let emailValue = formData.get('email') as string;
  let passwordValue = formData.get('password') as string;

  // Be kind to copy/pasters and trim the input values
  const constEmailValue = emailValue.trim();
  const constPasswordValue = passwordValue.trim();

  // Check for non-empty input values
  if (!constEmailValue || constEmailValue === "" || !constPasswordValue || constPasswordValue === "") {
    return { error: signInErrorString }
  }

  // Check if email and password are strings
  if (typeof(constEmailValue) !== "string" || typeof(constPasswordValue) !== "string") {
    return { error: signInErrorString }
  }

  try {
    
    
    // Check if credentials are correct with getSession()

    // If credentials are correct, create a User Auth Token

    // Assign the User Auth Token to localStorage

    // Set isSignedIn to true
    const isSignedIn = true;
    return { isSignedIn };
  } catch (error) {
    return { error: "Todos not received from the database." }
  }
}

export default signIn;