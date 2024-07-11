"use client";

import { useRef } from 'react';
import registerUser from '@/app/actions/registerUser';
import Title from '@/app/components/Title';
import Footer from '@/app/components/Footer';

const RegisterUser = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async(formData: FormData) => {
    const { data, error } = await registerUser(formData);
    
    if (error) {
      alert(error);
    } else {

      // Clear the form after successful registration
      formRef.current?.reset();

      // Allow the user to access the Todo List
    }
  }

  return ( 
    <>
      <div className="sign_up_form">
        <Title
          title="User Registration"
          showInspiringPrompt={false}
          classes="mb-4 pb-3"
        />
        <form ref={formRef} action={clientAction}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="w-100 form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" className="w-100 form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" className="w-100 form-control" required />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
 
export default RegisterUser;