import './App.css'
import Header from './components/Header'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import RouteLayout from './webPageLayout/RouteLayout'
import Reservations from './pages/Reservations'
import About from './pages/About'
import OrderOnline from './pages/OrderOnline'
import Login from './pages/Login'


// creating the layout of the webpage
const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<RouteLayout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='menu' element={<Menu />} />
      <Route path='reservations' element={<Reservations/>}/>
      <Route path='order-online' element={<OrderOnline />}/>
      <Route path='login' element={<Login/>} />
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
