import './App.scss';
import AddTodo from './componets/add-todo/addTodo';
import TodoList from './componets/list/todoList';
import { TodoContext } from './context/todoContext';

function App() {
  return (
    <TodoContext>
      <div className="container">
        <h1 className='text-center mt-5'>ToDo APp</h1>
        <div className='row'>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </TodoContext>
  );
}

export default App;
