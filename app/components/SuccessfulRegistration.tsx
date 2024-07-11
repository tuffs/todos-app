const SuccessfulRegistration = () => {
  return ( 
    <>
      <div className="container mt-4 pt-4">
        <div className="alert alert-success mt-4">
          <h2 className="success">Registration Complete!</h2>
          <p className="success">You have been signed up for Todo App, thank you.</p>
          <div className="mt-3 p-3 w-100 text-center">
            <a href="/login" className="btn btn-lg btn-success">Click Here To Login!</a>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default SuccessfulRegistration;