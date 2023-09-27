import './App.css'
import Header from './components/Header'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import RouteLayout from './webPageLayout/RouteLayout'


// creating the layout of the webpage
const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<RouteLayout />} >
      <Route index element={<Home />} />
      <Route path='menu' element={<Menu />} />
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
