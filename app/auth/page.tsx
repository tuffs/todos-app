import Title from '@/app/components/Title';
import SignIn from '../../app/components/SignIn';

const Home = async () => {
  return (
    <>
      <div className="todo_app">
        <Title
          title="Sign In"
          showInspiringPrompt={true}
        />
        <SignIn />
      </div>
    </>
  );
};

export default Home;