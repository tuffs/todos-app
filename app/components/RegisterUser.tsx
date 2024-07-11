"use client";

import { useRef, useState } from 'react';
import registerUser from '@/app/actions/registerUser';
import Title from '@/app/components/Title';
import SuccessfulRegistration from '@/app/components/SuccessfulRegistration';

const RegisterUser = () => {
  let [ isRegistered, setIsRegistered ] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async(formData: FormData) => {
    const { data, error } = await registerUser(formData);
    
    if (error) {
      alert(error);
    } else {
      // User has been successfully registered
      setIsRegistered(true);
    }
  }
  if (isRegistered) {
    return <SuccessfulRegistration />
  } else {
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
              <input type="password" id="password" name="password" className="w-100 form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password_confirmation">Password Confirmation</label>
              <input type="password" id="password_confirmation" name="password_confirmation" className="w-100 form-control" required />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-lg btn-primary w-100">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </>
    )}
}
 
export default RegisterUser;