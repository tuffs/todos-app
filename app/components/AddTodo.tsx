"use client"

import { useRef } from 'react';
import addTodo from '@/app/actions/addTodo';

const AddTodo = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async(formData: FormData) => {
    const { data, error } = await addTodo(formData);
    
    if (error) {
      alert(error);
    } else {
      formRef.current?.reset();
    }
  }

  return ( 
    <>
      <div className="mt-4">
        <form ref={formRef} action={clientAction}>
          <div className="w-100">
            <input type="text" name="title" id="title" className="w-100 mb-1"/>
          </div>
          <div className="w-100">
            <center>
              <input type="submit" value="ADD TO LIST" className="w-100 btn btn-primary"/>
            </center>
          </div>
        </form>
      </div>
    </>
   );
}
 
export default AddTodo;