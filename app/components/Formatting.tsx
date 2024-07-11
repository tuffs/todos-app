import Footer from '@/app/components/Footer';

type FormattingProps = {
  children: React.ReactNode;
};

const Formatting: React.FC<FormattingProps> = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4" />
          <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4">
            {children}
          </div>
          <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Formatting;