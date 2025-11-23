// import './App.css';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute';
// import AdminRoute from './components/AdminRoute';

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Loader from './components/Loader';

// import Navbar from './components/Navbar';
// import Home from "./pages/homepage/Home";
// import Footer from './components/Footer';
// import Login from './pages/Authentications/Login';
// import Signup from './pages/Authentications/Signup';
// import About from './pages/About/About';
// import Blog from './pages/Blog/Blog';
// import Contact from './pages/Contact/Contact';
// import Shop from './pages/Shop/Shop';
// import Cart from './pages/Cart/Cart';
// import Checkout from './pages/CheckOut/Checkout';
// import MyOrders from './pages/MyOrders/MyOrders';
// import SingleFood from './pages/SingleItem/singleItem';
// import AdminDashBoard from './pages/DashBoard/AdminDashBoard';

// import FloatingCart from './components/FloatingCart';

// function App() {
//   const location = useLocation();

//   //  const isAdmin

//   // Ye paths par navbar/footer hide hoga 👇
//   const hideLayout = location.pathname === "/login" || location.pathname === "/signup"
//     || location.pathname === "/cart" || location.pathname === "/dashboard" || location.pathname === "/myorders"
//     || location.pathname === "/checkout" || location.pathname === "/shop" ;

//   const HideNavbar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/dashboard"
//    || location.pathname === "/shop";

//   return (
//     <>
//       {/* Navbar hide hoga jab login/signup page ho */}
//       {!HideNavbar && <Navbar />}
//       {/* <  Navbar /> */}

//        <  FloatingCart /> 

//       <Routes>
//         {/* <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} /> */}
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
//         <Route path='/blog' element={<ProtectedRoute><Blog /></ProtectedRoute>} />
//         <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
//         <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
//         <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
//         <Route path='/myorders' element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
//         <Route path='/shop' element={<ProtectedRoute><Shop /></ProtectedRoute>} />
//         <Route path='/single/:id' element={<ProtectedRoute><SingleFood /></ProtectedRoute>} />
//         <Route path='/dashboard' element={<AdminRoute><AdminDashBoard /></AdminRoute>} />

//       </Routes>

//       {/* Footer bhi hide hoga login/signup pe */}
//       {!hideLayout && <Footer />}


//       <ToastContainer
//         position="top-center"
//         autoClose={3000}       // 3 sec baad close ho jaye
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick
//         pauseOnHover
//         draggable
//       />

//     </>
//   );
// }

// export default App;












// import './App.css';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute';
// import AdminRoute from './components/AdminRoute';

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Loader from './components/Loader';

// import Navbar from './components/Navbar';
// import Home from "./pages/homepage/Home";
// import Footer from './components/Footer';
// import Login from './pages/Authentications/Login';
// import Signup from './pages/Authentications/Signup';
// import About from './pages/About/About';
// import Blog from './pages/Blog/Blog';
// import Contact from './pages/Contact/Contact';
// import Shop from './pages/Shop/Shop';
// import Cart from './pages/Cart/Cart';
// import Checkout from './pages/CheckOut/Checkout';
// import MyOrders from './pages/MyOrders/MyOrders';
// import SingleFood from './pages/SingleItem/singleItem';
// import AdminDashBoard from './pages/DashBoard/AdminDashBoard';

// import FloatingCart from './components/FloatingCart';

// import { useEffect, useState } from 'react';

// function App() {
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <Loader />;

//   const hideLayout = location.pathname === "/login" || location.pathname === "/signup"
//     || location.pathname === "/cart" || location.pathname === "/dashboard" || location.pathname === "/myorders"
//     || location.pathname === "/checkout" || location.pathname === "/shop";

//   const HideNavbar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/dashboard"
//    || location.pathname === "/shop";

//   return (
//     <>
//       {!HideNavbar && <Navbar />}
//       <FloatingCart />

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
//         <Route path='/blog' element={<ProtectedRoute><Blog /></ProtectedRoute>} />
//         <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
//         <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
//         <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
//         <Route path='/myorders' element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
//         <Route path='/shop' element={<ProtectedRoute><Shop /></ProtectedRoute>} />
//         <Route path='/single/:id' element={<ProtectedRoute><SingleFood /></ProtectedRoute>} />
//         <Route path='/dashboard' element={<AdminRoute><AdminDashBoard /></AdminRoute>} />
//       </Routes>

//       {!hideLayout && <Footer />}

//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick
//         pauseOnHover
//         draggable
//       />
//     </>
//   );
// }

// export default App;








import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from './components/Loader';

import Navbar from './components/Navbar';
import Home from "./pages/homepage/Home";
import Footer from './components/Footer';
import Login from './pages/Authentications/Login';
import Signup from './pages/Authentications/Signup';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/CheckOut/Checkout';
import MyOrders from './pages/MyOrders/MyOrders';
import SingleFood from './pages/SingleItem/singleItem';
import AdminDashBoard from './pages/DashBoard/AdminDashBoard';

import FloatingCart from './components/FloatingCart';

import { useEffect, useState } from 'react';

// Dark Mode
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from './redux/slices/darkMode.Slice';

function App() {

  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  // On page load, check localStorage
  useEffect(() => {
     const storeMode = localStorage.getItem("darkMode") === true;
     dispatch(setDarkMode(storeMode));
  }, [dispatch])
  
  // Apply dark class to HTML
  useEffect(() => {
    if (darkMode) {
       document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])
  

  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const hideLayout = location.pathname === "/login" || location.pathname === "/signup"
    || location.pathname === "/cart" || location.pathname === "/dashboard" || location.pathname === "/myorders"
    || location.pathname === "/checkout" || location.pathname === "/shop";

  const HideNavbar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/dashboard";

  return (
    <>
      {!HideNavbar && <Navbar />}
      <FloatingCart />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path='/blog' element={<ProtectedRoute><Blog /></ProtectedRoute>} />
        <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path='/myorders' element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
        <Route path='/shop' element={<ProtectedRoute><Shop /></ProtectedRoute>} />
        <Route path='/single/:id' element={<ProtectedRoute><SingleFood /></ProtectedRoute>} />
        <Route path='/dashboard' element={<AdminRoute><AdminDashBoard /></AdminRoute>} />
      </Routes>

      {!hideLayout && <Footer />}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
