import logo from './logo.svg';
import './App.css';
import TodoList from './component/todoList';



function App(){
  return (
    <div className="App">
      {/* Rendering our newly imported component */}
      <TodoList />
    </div>
  )
} 

export default App;