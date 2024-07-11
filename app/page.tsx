import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import Title from '@/app/components/Title';
import Todos from '@/app/components/Todos';
import AddTodo from '@/app/components/AddTodo';
import Footer from '@/app/components/Footer';

const Home = async () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4">&nbsp;</div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-2">
            <Title
              title="Todo App"
              showInspiringPrompt={true}
            />
            <Todos />
            <AddTodo />
          </div>
          <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4">&nbsp;</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;