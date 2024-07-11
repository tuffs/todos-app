"use client";

import { useRef } from 'react';
import registerUser from '@/app/actions/registerUser';

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4" />
          <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4">
            <div className="sign_up_form">
              <form ref={formRef} action={clientAction}>
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="w-100 form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" name="email" className="w-100 form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="text" id="password" name="password" className="w-100 form-control" />
                </div>

                <div className="mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4" />
          </div>
        </div>
      </div>
    </>
   );
}
 
export default RegisterUser;