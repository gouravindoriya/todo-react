import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import AddTodo from './component/Addtodo'
import Todos from './component/Todos'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <div className="center w-full">React Redux</div>
     <AddTodo />
     <Todos />

    </>
  )
}

export default App
