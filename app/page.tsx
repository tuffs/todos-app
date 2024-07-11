import Title from '@/app/components/Title';
import Todos from '@/app/components/Todos';
import AddTodo from '@/app/components/AddTodo';
import Footer from '@/app/components/Footer';

const Home = async () => {
  return (
    <>
      <div className="todo_app">
        <Title
          title="Todo App"
          showInspiringPrompt={true}
        />
        <Todos />
        <AddTodo />
      </div>
    </>
  );
};

export default Home;