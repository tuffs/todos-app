import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.scss";
import RegisterUser from '@/app/components/RegisterUser';

const Registration = async () => {
  return (
    <>
      <RegisterUser />
    </>
  );
};

export default Registration;