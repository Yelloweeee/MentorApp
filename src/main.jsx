import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import HomePage from './Components/HomePage'
import SignupPage from './pages/Sign-Up/Sign-up.jsx'
import SigninPage from './pages/Sign-In/Sign-in.jsx'
import PersonalityTest from './pages/Quiz/Quiz'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
    {/* this is the nesting under path ''/'' */}
    <Route path='' element={<Home/>}/></Route>
    
    <Route path='/SignupPage' element={<SignupPage/>}></Route>

    
    <Route path='/LoginPage' element={<SigninPage/>}></Route>

    <Route path='/Quiz' element={<PersonalityTest/>}/>

    <Route path='/HomePage' element={<HomePage/>}></Route>
    
    
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
