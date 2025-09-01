import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import Success from './pages/Success'
import Fail from './pages/Fail'
import Todo from './pages/Todo'

function App() {

  return (
    <>
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      {/* <Route path='/success' element={<Success />} /> */}
      <Route path='/todo' element={<Todo />} />
      <Route path='/fail' element={<Fail />} />
     </Routes>
     </BrowserRouter>
     </div>
    </>
  )
}

export default App