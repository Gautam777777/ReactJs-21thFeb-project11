import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layouts from './Components/Ui/Layouts'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Layouts /> }>
                <Route index element={ <Home/> }></Route>
                <Route path='login' element={ <Login/> }></Route>
                <Route path='register' element={ <Register/> }></Route>
                <Route path='*' element={ <NotFound/> }></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

