import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./pages/homepage/Home";
import Footer from './components/Footer';
import Login from './pages/Authentications/Login';
import Signup from './pages/Authentications/Signup';

function App() {
  const location = useLocation();

  // Ye paths par navbar/footer hide hoga 👇
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {/* Navbar hide hoga jab login/signup page ho */}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      {/* Footer bhi hide hoga login/signup pe */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;











// import './App.css'
// import { Routes, Route } from 'react-router-dom'

// import Navbar from './components/Navbar'
// import Home from "./pages/homepage/Home"
// import Footer from './components/Footer'
// import Login from './pages/Authentications/Login'
// import Signup from './pages/Authentications/Signup'
// // import PopularFood from './pages/PopularFood'

// function App() {

//   return (
//     <>
//    <div>
//       <Navbar />
//       <Routes>
//         <Route  path='/'  element={<Home/>} />
//         <Route  path='/login'  element={<Login/>} />
//         <Route  path='/signup'  element={<Signup/>} />
//       </Routes>
//       <Footer/>


//    </div>
//     </>
//   )
// }

// export default App
