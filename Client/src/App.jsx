import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from "./pages/Home"
// import PopularFood from './pages/PopularFood'

function App() {

  return (
    <>
   <div>
      <Navbar />
      <h1 className='text-5xl'>Hello</h1>
      <Routes>
        <Route  path='/'  element={<Home/>} />
        {/* <Route  path='/popular'  element={<PopularFood/>} /> */}
      </Routes>

   </div>
    </>
  )
}

export default App
