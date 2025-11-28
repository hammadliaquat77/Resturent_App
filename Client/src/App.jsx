import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

// Protect Routes
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Loader Starter
import Loader from './components/Loader';

// Pages
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
import ReservationForm from './pages/Reservation/ReservationPage';
import MyReservations from './pages/Reservation/MyReservationsPage';
import AdminDashBoard from './pages/DashBoard/AdminDashBoard';

// Floating Cart
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

  const HideFooter = location.pathname === "/login" || location.pathname === "/signup"
    || location.pathname === "/cart" || location.pathname === "/dashboard" || location.pathname === "/myorders"
    || location.pathname === "/checkout" || location.pathname === "/shop" || location.pathname === "/reservation"
    || location.pathname === "/myreservation" || location.pathname.startsWith("/single/");

  const HideNavbar = location.pathname === "/login"  
  || location.pathname === "/signup" || location.pathname === "/dashboard";

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
        <Route path='/reservation'element={<ProtectedRoute><ReservationForm/></ProtectedRoute>} ></Route>
        <Route path='/myreservation'element={<ProtectedRoute><MyReservations/></ProtectedRoute>} ></Route>
        <Route path='/dashboard' element={<AdminRoute><AdminDashBoard /></AdminRoute>} />
      </Routes>

      {!HideFooter && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={2000}
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
