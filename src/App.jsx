import './App.css'
import Todos from './Todos'
import TodoForm from './TodoForm'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      title:"Learn Coding",
      completed:false
    },
    {
      id:2,
      title:"Sleeping",
      completed:true
    },
    {
      id:3,
      title:"Watching Movies",
      completed:false
    },
    

  ])
  const addTodo = (newTodo) => {
    setTodos(prevState => [...prevState,newTodo])
  }

  const toggleCompleted = (id) => {
    setTodos ((prevState) => {
      return prevState.map((todo) => {
        if (todo.id ===id){
          return {...todo, 
            completed: !todo.completed}
        }
        else{
          return todo;
        }
      })
    })
  }

  const removeTodo = (id) => {
    setTodos(prevState => prevState.filter(todo => todo.id!==id))
    
  }


  return (
   <div className='container'>
   <ToastContainer />
    <h1 className = 'main-list'>Todo List</h1>
    <TodoForm  addTodo = {addTodo}/>
    <Todos todoDetails = {todos} 
    toggleCompleted={toggleCompleted}
    removeTodo = {removeTodo}
    />
   </div>
  )
}

export default App
