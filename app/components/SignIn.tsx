"use client";

import { useRef, useState } from 'react';
import getSession from '@/app/actions/getSession';
// import signIn from '@/app/actions/signIn';
import Title from '@/app/components/Title';

interface SignInData {
  email: string;
  password: string;
}

export default function SignIn() {
  
  const loggedInEmail = localStorage.getItem('dktda_userEmail');
  const loggedInAuthToken = localStorage.getItem('dktda_userAuthToken');

  let [ isSignedIn, setIsSignedIn ] = useState(false);

  console.log(loggedInEmail);
  console.log(loggedInAuthToken);

  // const checkSession = async() => {
  //   const { data, error } = await getSession();

  //   if (data) {
  //     setIsSignedIn(true);
  //   } else {
  //     setIsSignedIn(false);
  //   }
  // }

  // const formRef = useRef<HTMLFormElement>(null);

  // const clientAction = async(formData: FormData) => {
  //   const { data, error } = await signIn(formData);
    
  //   if (error) {
  //     alert(error);
  //   } else {
  //     // User has been successfully registered
  //     setIsSignedIn(true);
  //   }
  // }

  if (isSignedIn) {
    // Redirect to User's Todo List
    console.log(`Logged in..`);
    return (<><h1>Logged In</h1></>);
  } else {
    return (
      <>
        <div className="sign_up_form">
          <Title
            title="User Registration"
            showInspiringPrompt={false}
            classes="mb-4 pb-3"
          />
          {/* <form ref={formRef} action={clientAction}> */}
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" className="w-100 form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className="w-100 form-control" required />
            </div>
            
            <div className="mb-3">
              <button type="submit" className="btn btn-lg btn-primary w-100">
                Login
              </button>
            </div>
          {/* </form> */}
        </div>
      </>
    )}
}