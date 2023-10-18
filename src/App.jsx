import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'

function App() {
 

  return (
    <>
     
      <Home></Home>
      <Outlet></Outlet>
    </>
  )
}

export default App
