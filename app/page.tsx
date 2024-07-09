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
              <Title />
              <Todos />
              <AddTodo />
            </div>
            <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4">&nbsp;</div>
          </div>
        </div>
        <div className="container-fluid mt-4 pt-4">
        <div className="row">
          <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4">&nbsp;</div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-2">
            <Footer />
          </div>
          <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4">&nbsp;</div>
        </div>
      </div>
    </>
  );
};

export default Home;