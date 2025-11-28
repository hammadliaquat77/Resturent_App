// Without DarkMode

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {useSelector} from "react-redux";

// import { toast } from "react-toastify";

// function MyReservations() {

//   const darkMode = useSelector((state) => state.darkMode.darkMode);

//   const token = localStorage.getItem("token");
//   const [reservations, setReservations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch user's reservations
//   const fetchReservations = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:8000/api/reservation/myreservation", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log(res.data.myReservation || []);
      
//       setReservations(res.data.myReservation || []);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       setLoading(false);
//       // alert("Failed to fetch reservations");
//       toast.error("Failed to fetch reservations");

//     }
//   };

//   useEffect(() => {
//     fetchReservations();
//   }, []);

//   // Cancel reservation
//   const cancelReservation = async (id) => {
//     try {
//       const res = await axios.delete(
//         `http://localhost:8000/api/reservation/cancel/${id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert(res.data.message);
//       fetchReservations(); // Refresh list
//     } catch (err) {
//       // alert(err.response?.data?.message || "Cancellation failed");
//       toast.error(err.response?.data?.message || "Cancellation failed");
//     }
//   };

//   if (loading) return <p className="text-center py-20">Loading...</p>;

//   if (reservations.length === 0)
//     return <p className="text-center py-20 text-gray-500">No reservations found.</p>;

//   return (
//     <div className="max-w-5xl mx-auto p-6 pt-24">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">My Reservations</h2>

//       <div className="space-y-4">
//         {reservations.map((resv) => (
//           <div
//             key={resv._id}
//             className="bg-white shadow-md rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
//           >
//             <div>
//               <p>
//                 <span className="font-semibold">Date:</span>{" "}
//                 {new Date(resv.date).toLocaleDateString()}
//               </p>
//               <p>
//                 <span className="font-semibold">Time:</span> {resv.time}
//               </p>
//               <p>
//                 <span className="font-semibold">Persons:</span> {resv.personCount}
//               </p>
//               <p>
//                 <span className="font-semibold">Contact:</span> {resv.number}
//               </p>
//               <p>
//                 <span className="font-semibold">Special Requests:</span>{" "}
//                 {resv.specialRequest || "None"}
//               </p>
//               <p>
//                 <span className="font-semibold">Status:</span>{" "}
//                 <span
//                   className={`px-2 py-1 rounded ${
//                     resv.status === "approved"
//                       ? "bg-green-100 text-green-800"
//                       : resv.status === "cancelled"
//                       ? "bg-red-100 text-red-800"
//                       : "bg-yellow-100 text-yellow-800"
//                   }`}
//                 >
//                   {resv.status}
//                 </span>
//               </p>
//             </div>

//             {resv.status !== "approved" && resv.status !== "cancelled" && (
//               <button
//                 onClick={() => cancelReservation(resv._id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyReservations;













// With DarkMode Adding

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FiCalendar, FiClock, FiUsers, FiPhone, FiMessageSquare, FiXCircle, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

function MyReservations() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const token = localStorage.getItem("token");
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's reservations
  const fetchReservations = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8000/api/reservation/myreservation", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReservations(res.data.myReservation || []);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Failed to fetch reservations");
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // Cancel reservation
  const cancelReservation = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/reservation/cancel/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(res.data.message);
      fetchReservations(); // Refresh list
    } catch (err) {
      toast.error(err.response?.data?.message || "Cancellation failed");
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <FiCheckCircle className="text-green-500" />;
      case "cancelled":
        return <FiXCircle className="text-red-500" />;
      default:
        return <FiAlertCircle className="text-yellow-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-800";
      case "cancelled":
        return darkMode ? "bg-red-900 text-red-300" : "bg-red-100 text-red-800";
      default:
        return darkMode ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-800";
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
      }`}>
        <div className="text-center">
          <div className={`animate-spin rounded-full h-16 w-16 border-b-4 mx-auto mb-4 ${
            darkMode ? 'border-yellow-400' : 'border-yellow-600'
          }`}></div>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Loading your reservations...
          </p>
        </div>
      </div>
    );
  }

  if (reservations.length === 0) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
      }`}>
        <div className="text-center">
          <FiCalendar className={`text-6xl mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            No reservations found.
          </p>
          <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Book a table to see your reservations here!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-16 px-4 md:px-20 pt-24 transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            My Reservations
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Manage your table bookings
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {reservations.map((resv) => (
            <div
              key={resv._id}
              className={`rounded-2xl shadow-xl p-6 transition-all duration-300 transform hover:scale-102 ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(resv.status)}
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(resv.status)}`}>
                    {resv.status.charAt(0).toUpperCase() + resv.status.slice(1)}
                  </span>
                </div>
                {resv.status !== "approved" && resv.status !== "cancelled" && (
                  <button
                    onClick={() => cancelReservation(resv._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <FiXCircle />
                    Cancel
                  </button>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiCalendar className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Date:
                  </span>
                  <span>{new Date(resv.date).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FiClock className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Time:
                  </span>
                  <span>{resv.time}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FiUsers className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Persons:
                  </span>
                  <span>{resv.personCount}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FiPhone className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Contact:
                  </span>
                  <span>{resv.number}</span>
                </div>

                <div className="flex items-start gap-3">
                  <FiMessageSquare className={`text-xl mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <div>
                    <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Special Requests:
                    </span>
                    <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {resv.specialRequest || "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyReservations;
