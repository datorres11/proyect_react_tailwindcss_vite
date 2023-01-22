import Header from './components/Header';
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from 'react';

const initializeStateTodos = [
  {
    id:1,
    title:"Todo 1",
    completed: true
  },
  {
    id:2,
    title:"Todo 2",
    completed: false
  },
  {
    id:3,
    title:"Todo 3",
    completed: false
  },
  {
    id:4,
    title:"Todo 4",
    completed: false
  }
]

const App = () =>{
  const [todos, setTodos]= useState(initializeStateTodos);
  const createTodo = (title)=>{
    const newTodo={
      id: Date.now(),
      title,
      completed:false
    }
    setTodos([...todos,newTodo]);
  }

  const removeTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  }

  const updateTodo=(id)=>{
    setTodos(todos.map(todo=>todo.id ===id ?({...todo,completed: !todo.completed}):todo));
   }

  const computedTodo=todos.filter((todo)=>!todo.completed).length;

  const clearCompleted=()=>{
    setTodos(todos.filter((todo)=>!todo.completed))
  }

  const [filter,setFilter]=useState("all");

  const changeFilter=(filter)=>(setFilter(filter))

  const filteredTodos= ()=>{
    switch (filter){
      case "all":
          return todos;
      case "active":
          return todos.filter((todo) => !todo.completed);
      case "completed":
          return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
  return(
    <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] 
                    bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      <Header/>
      <main className="px-4 containter mx-auto mt-8">
        <TodoCreate createTodo={createTodo}/>
        <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
        <TodoComputed computedTodo={computedTodo} clearCompleted={clearCompleted}/>
        <TodoFilter changeFilter={changeFilter}/>
      </main>
      <footer className="mt-8 text-center">Drag and dorp to reorder list</footer>
    </div>
    )
}
export default App;