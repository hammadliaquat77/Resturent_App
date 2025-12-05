// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";

// function AdminReservation() {

//   const darkMode = useSelector((state)=> state.darkMode.darkMode);

//   const token = localStorage.getItem("token");
//   const [reservations, setReservations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedStatus, setSelectedStatus] = useState("all");
//   const [updatingId, setUpdatingId] = useState(null); // Track which reservation is being updated
//   const [deletingId, setDeletingId] = useState(null); // Track which reservation is being deleted

//   // Fetch all reservations
//   const fetchReservations = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:8000/api/reservation/all", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setReservations(res.data.allReservation || []);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//       showToast("Failed to fetch reservations", "error");
//     }
//   };

//   useEffect(() => {
//     fetchReservations();
//   }, []);

//   // Show toast notification
//   const showToast = (message, type = "info") => {
//     const event = new CustomEvent('showToast', {
//       detail: { message, type }
//     });
//     window.dispatchEvent(event);
//   };

//   // Delete Reservation
//   const deleteReservation = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this reservation? This action cannot be undone.")) {
//       return;
//     }

//     try {
//       setDeletingId(id);
//       const res = await axios.delete(`http://localhost:8000/api/reservation/delete/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       showToast(res.data.message, "success");
//       fetchReservations();
//     } catch (error) {
//       console.error(error);
//       showToast(error.response?.data?.message || "Failed to delete reservation", "error");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   // Update reservation status
//   const updateStatus = async (id, status) => {
//     try {
//       setUpdatingId(id);
//       const res = await axios.put(
//         `http://localhost:8000/api/reservation/update/${id}`,
//         { status },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       showToast(res.data.message, "success");
//       fetchReservations(); // Refresh list after status change
//     } catch (err) {
//       console.error(err);
//       showToast(err.response?.data?.message || "Status update failed", "error");
//     } finally {
//       setUpdatingId(null);
//     }
//   };

//   // Quick status update buttons for all statuses
//   const getStatusButtons = (resv) => {
//     const statusOptions = [
//       { value: "approved", label: "Approve", color: "from-green-500 to-green-600", icon: "✅", disabled: resv.status === "approved" },
//       { value: "cancelled", label: "Cancel", color: "from-red-500 to-red-600", icon: "❌", disabled: resv.status === "cancelled" }
//     ];


//     return statusOptions.map((option) => (
//       <button
//         key={option.value}
//         onClick={() => updateStatus(resv._id, option.value)}
//         disabled={option.disabled || updatingId === resv._id}
//         className={`flex items-center justify-center gap-2 bg-gradient-to-r ${option.color} hover:scale-105 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-sm ${option.disabled ? "opacity-50 cursor-not-allowed" : "hover:brightness-110"
//           } ${updatingId === resv._id ? "animate-pulse" : ""}`}
//       >
//         <span>{option.icon}</span>
//         {updatingId === resv._id ? "Updating..." : option.label}
//       </button>
//     ));
//   };

//   // Filter reservations based on selected status
//   const filteredReservations = reservations.filter(resv => {
//     if (selectedStatus === "all") return true;
//     return resv.status === selectedStatus;
//   });

//   console.log(filteredReservations);


//   // Status count for badges
//   const statusCounts = {
//     all: reservations.length,
//     pending: reservations.filter(r => r.status === "pending").length,
//     approved: reservations.filter(r => r.status === "approved").length,
//     cancelled: reservations.filter(r => r.status === "cancelled").length,
//   };

//   const getStatusBadge = (status) => {
//     const colors = {
//       approved: "bg-green-100 text-green-800 border border-green-200",
//       cancelled: "bg-red-100 text-red-800 border border-red-200",
//       pending: "bg-yellow-100 text-yellow-800 border border-yellow-200"
//     };
//     return colors[status] || "bg-gray-100 text-gray-800 border border-gray-200";
//   };

//   // Bulk actions
//   const bulkApproveAllPending = async () => {
//     const pendingReservations = reservations.filter(r => r.status === "pending");
//     if (pendingReservations.length === 0) {
//       showToast("No pending reservations to approve", "info");
//       return;
//     }

//     if (!window.confirm(`Are you sure you want to approve all ${pendingReservations.length} pending reservations?`)) {
//       return;
//     }

//     try {
//       setLoading(true);
//       for (const resv of pendingReservations) {
//         await axios.put(
//           `http://localhost:8000/api/reservation/update/${resv._id}`,
//           { status: "approved" },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       }
//       showToast(`Successfully approved ${pendingReservations.length} reservations`, "success");
//       fetchReservations();
//     } catch (err) {
//       console.error(err);
//       showToast("Failed to bulk approve reservations", "error");
//     }
//   };

//   // Bulk delete all cancelled reservations
//   const bulkDeleteCancelled = async () => {
//     const cancelledReservations = reservations.filter(r => r.status === "cancelled");
//     if (cancelledReservations.length === 0) {
//       showToast("No cancelled reservations to delete", "info");
//       return;
//     }

//     if (!window.confirm(`Are you sure you want to permanently delete all ${cancelledReservations.length} cancelled reservations? This action cannot be undone.`)) {
//       return;
//     }

//     try {
//       setLoading(true);
//       for (const resv of cancelledReservations) {
//         await axios.delete(
//           `http://localhost:8000/api/reservation/delete/${resv._id}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       }
//       showToast(`Successfully deleted ${cancelledReservations.length} cancelled reservations`, "success");
//       fetchReservations();
//     } catch (err) {
//       console.error(err);
//       showToast("Failed to bulk delete reservations", "error");
//     }
//   };

//   if (loading) return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
//         <p className="mt-4 text-lg text-gray-600 font-medium">Loading reservations...</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8 mt-10 md:mt-0">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Reservation Management
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Manage and review all restaurant reservations in one place
//           </p>
//         </div>


//         {/* Bulk Actions */}
//         <div className="mb-6 flex flex-wrap gap-4 justify-end">
//           <button
//             onClick={bulkApproveAllPending}
//             className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold flex items-center gap-2"
//           >
//             <span>✅</span>
//             Approve All Pending ({statusCounts.pending})
//           </button>
//           <button
//             onClick={bulkDeleteCancelled}
//             className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold flex items-center gap-2"
//           >
//             <span>🗑️</span>
//             Delete All Cancelled ({statusCounts.cancelled})
//           </button>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           {[
//             { status: "all", label: "Total", icon: "📊", color: "from-blue-500 to-blue-600" },
//             { status: "pending", label: "Pending", icon: "⏳", color: "from-yellow-500 to-yellow-600" },
//             { status: "approved", label: "Approved", icon: "✅", color: "from-green-500 to-green-600" },
//             { status: "cancelled", label: "Cancelled", icon: "❌", color: "from-red-500 to-red-600" }
//           ].map(({ status, label, icon, color }) => (
//             <div
//               key={status}
//               className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${selectedStatus === status ? "border-indigo-500 ring-2 ring-indigo-200" : "border-transparent"
//                 }`}
//               onClick={() => setSelectedStatus(status)}
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">{label}</p>
//                   <p className="text-3xl font-bold text-gray-900 mt-2">{statusCounts[status]}</p>
//                 </div>
//                 <span className={`text-2xl p-3 rounded-full bg-gradient-to-r ${color} text-white`}>
//                   {icon}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Reservations List */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6">
//           {filteredReservations.length === 0 ? (
//             <div className="text-center py-16">
//               <div className="text-6xl mb-4">📝</div>
//               <h3 className="text-2xl font-semibold text-gray-700 mb-2">No reservations found</h3>
//               <p className="text-gray-500">
//                 {selectedStatus === "all"
//                   ? "No reservations have been made yet."
//                   : `No ${selectedStatus} reservations found.`
//                 }
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {filteredReservations.map((resv) => (
//                 <div
//                   key={resv._id}
//                   className="group bg-gradient-to-r from-white to-gray-50/50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 p-6"
//                 >
//                   <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
//                     {/* Reservation Details */}
//                     <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       <div className="space-y-3">
//                         <div>
//                           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Guest</label>
//                           <p className="font-semibold text-gray-900 text-lg">{resv.user?.name || "Unknown"}</p>
//                           <p className="text-sm text-gray-600">{resv.user?.email || "-"}</p>
//                         </div>
//                         <div>
//                           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</label>
//                           <p className="text-sm text-gray-900">{resv.number || "Not provided"}</p>
//                         </div>
//                       </div>

//                       <div className="space-y-3">
//                         <div>
//                           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Date & Time</label>
//                           <p className="font-medium text-gray-900">
//                             {new Date(resv.date).toLocaleDateString('en-US', {
//                               weekday: 'short',
//                               year: 'numeric',
//                               month: 'short',
//                               day: 'numeric'
//                             })}
//                           </p>
//                           {/* <p className="text-sm text-gray-600">
//                             {resv.time > 12 ? `${resv.time} PM` : `${resv.time} AM`}                           
//                           </p> */}


//                           <p className="text-sm text-gray-600">
//                             {(() => {
//                               const timeString = resv.time; // Example: "14:30", "04:30", "7:05"

//                               if (!timeString) return "Invalid Time";

//                               // Split hour & minutes
//                               const [hourStr, minuteStr] = timeString.split(":");
//                               let hour = parseInt(hourStr, 10);
//                               let minutes = parseInt(minuteStr, 10);

//                               // Determine AM/PM
//                               const period = hour >= 12 ? "PM" : "AM";

//                               // Convert to 12-hour format
//                               hour = hour % 12;
//                               if (hour === 0) hour = 12;

//                               return `${hour}:${minutes.toString().padStart(2, "0")} ${period}`;
//                             })()}
//                           </p>



//                           {/* <p className="text-sm text-gray-600">{resv.time}</p> */}
//                         </div>
//                         <div>
//                           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Party Size</label>
//                           <p className="font-medium text-gray-900">{resv.personCount} persons</p>
//                         </div>
//                       </div>

//                       <div className="space-y-3">
//                         <div>
//                           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</label>
//                           <div className="flex items-center gap-2">
//                             <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(resv.status)}`}>
//                               {resv.status}
//                             </span>
//                             <span className="text-xs text-gray-500">
//                               {new Date(resv.createdAt).toLocaleDateString()}
//                             </span>
//                           </div>
//                         </div>
//                         <div>
//                           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Reservation ID</label>
//                           <p className="text-xs text-gray-600 font-mono truncate">{resv._id}</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col gap-3 w-full lg:w-48">
//                       <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
//                         {getStatusButtons(resv)}
//                       </div>

//                       <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
//                         {/* Delete Button */}
//                         <button
//                           onClick={() => deleteReservation(resv._id)}
//                           disabled={deletingId === resv._id}
//                           className={`flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium text-sm ${deletingId === resv._id ? "animate-pulse opacity-75" : ""
//                             }`}
//                         >
//                           <span>🗑️</span>
//                           {deletingId === resv._id ? "Deleting..." : "Delete"}
//                         </button>

//                         {/* View Special Request Button */}
//                         {resv.specialRequest && (
//                           <button
//                             onClick={() => {
//                               showToast(`Special Request: ${resv.specialRequest}`, "info");
//                             }}
//                             className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium text-sm"
//                           >
//                             <span>📝</span>
//                             View Request
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Special Request (Collapsible) */}
//                   {resv.specialRequest && (
//                     <div className="mt-4 pt-4 border-t border-gray-200">
//                       <p className="text-sm text-gray-600">
//                         <span className="font-semibold text-gray-700">Special Request:</span> {resv.specialRequest}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Footer Stats */}
//         <div className="mt-8 text-center text-sm text-gray-500">
//           Showing {filteredReservations.length} of {reservations.length} total reservations
//           {selectedStatus !== "all" && ` • ${statusCounts[selectedStatus]} ${selectedStatus} reservations`}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminReservation;












import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function AdminReservation() {

  const darkMode = useSelector((state)=> state.darkMode.darkMode);

  const token = localStorage.getItem("token");
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [updatingId, setUpdatingId] = useState(null); // Track which reservation is being updated
  const [deletingId, setDeletingId] = useState(null); // Track which reservation is being deleted

  // Fetch all reservations
  const fetchReservations = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://resturent-app-snowy.vercel.app/api/reservation/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setReservations(res.data.allReservation || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      showToast("Failed to fetch reservations", "error");
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // Show toast notification
  const showToast = (message, type = "info") => {
    const event = new CustomEvent('showToast', {
      detail: { message, type }
    });
    window.dispatchEvent(event);
  };

  // Delete Reservation
  const deleteReservation = async (id) => {
    if (!window.confirm("Are you sure you want to delete this reservation? This action cannot be undone.")) {
      return;
    }

    try {
      setDeletingId(id);
      const res = await axios.delete(`https://resturent-app-snowy.vercel.app/api/reservation/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      showToast(res.data.message, "success");
      fetchReservations();
    } catch (error) {
      console.error(error);
      showToast(error.response?.data?.message || "Failed to delete reservation", "error");
    } finally {
      setDeletingId(null);
    }
  };

  // Update reservation status
  const updateStatus = async (id, status) => {
    try {
      setUpdatingId(id);
      const res = await axios.put(
        `https://resturent-app-snowy.vercel.app/api/reservation/update/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      showToast(res.data.message, "success");
      fetchReservations(); // Refresh list after status change
    } catch (err) {
      console.error(err);
      showToast(err.response?.data?.message || "Status update failed", "error");
    } finally {
      setUpdatingId(null);
    }
  };

  // Quick status update buttons for all statuses
  const getStatusButtons = (resv) => {
    const statusOptions = [
      { value: "approved", label: "Approve", color: "from-green-500 to-green-600", icon: "✅", disabled: resv.status === "approved" },
      { value: "cancelled", label: "Cancel", color: "from-red-500 to-red-600", icon: "❌", disabled: resv.status === "cancelled" }
    ];

// Approve / Cancel Button
    return statusOptions.map((option) => (
      <button
        key={option.value}
        onClick={() => updateStatus(resv._id, option.value)}
        disabled={option.disabled || updatingId === resv._id}
        className={`flex items-center justify-center cursor-pointer gap-2 bg-gradient-to-r ${option.color} hover:scale-105 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-sm ${option.disabled ? "opacity-50 cursor-not-allowed" : "hover:brightness-110"
          } ${updatingId === resv._id ? "animate-pulse" : ""}`}
      >
        <span>{option.icon}</span>
        {updatingId === resv._id ? "Updating..." : option.label}
      </button>
    ));
  };

  // Filter reservations based on selected status
  const filteredReservations = reservations.filter(resv => {
    if (selectedStatus === "all") return true;
    return resv.status === selectedStatus;
  });

  console.log(filteredReservations);


  // Status count for badges
  const statusCounts = {
    all: reservations.length,
    pending: reservations.filter(r => r.status === "pending").length,
    approved: reservations.filter(r => r.status === "approved").length,
    cancelled: reservations.filter(r => r.status === "cancelled").length,
  };

  const getStatusBadge = (status) => {
    const colors = {
      approved: "bg-green-100 text-green-800 border border-green-200",
      cancelled: "bg-red-100 text-red-800 border border-red-200",
      pending: "bg-yellow-100 text-yellow-800 border border-yellow-200"
    };
    return colors[status] || "bg-gray-100 text-gray-800 border border-gray-200";
  };

  // Bulk actions
  const bulkApproveAllPending = async () => {
    const pendingReservations = reservations.filter(r => r.status === "pending");
    if (pendingReservations.length === 0) {
      showToast("No pending reservations to approve", "info");
      return;
    }

    if (!window.confirm(`Are you sure you want to approve all ${pendingReservations.length} pending reservations?`)) {
      return;
    }

    try {
      setLoading(true);
      for (const resv of pendingReservations) {
        await axios.put(
          `http://localhost:8000/api/reservation/update/${resv._id}`,
          { status: "approved" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      showToast(`Successfully approved ${pendingReservations.length} reservations`, "success");
      fetchReservations();
    } catch (err) {
      console.error(err);
      showToast("Failed to bulk approve reservations", "error");
    }
  };

  // Bulk delete all cancelled reservations
  const bulkDeleteCancelled = async () => {
    const cancelledReservations = reservations.filter(r => r.status === "cancelled");
    if (cancelledReservations.length === 0) {
      showToast("No cancelled reservations to delete", "info");
      return;
    }

    if (!window.confirm(`Are you sure you want to permanently delete all ${cancelledReservations.length} cancelled reservations? This action cannot be undone.`)) {
      return;
    }

    try {
      setLoading(true);
      for (const resv of cancelledReservations) {
        await axios.delete(
          `http://localhost:8000/api/reservation/delete/${resv._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      showToast(`Successfully deleted ${cancelledReservations.length} cancelled reservations`, "success");
      fetchReservations();
    } catch (err) {
      console.error(err);
      showToast("Failed to bulk delete reservations", "error");
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-lg text-gray-600 font-medium">Loading reservations...</p>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br  py-8 px-4 sm:px-6 lg:px-8 mt-10 md:mt-0 
    ${darkMode ? "bg-gray-900 text-white" : "from-blue-50 to-indigo-100 "}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4   bg-clip-text text-transparent 
            ${darkMode ? "text-white" : "text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600"}`}>
            Reservation Management
          </h1>
          <p className={`text-lg max-w-2xl mx-auto 
            ${darkMode ? "text-white" : "text-gray-600"}`}>
            Manage and review all restaurant reservations in one place
          </p>
        </div>


        {/* Bulk Actions */}
        <div className="mb-6 flex flex-wrap gap-4 justify-end">
          <button
            onClick={bulkApproveAllPending}
            className="bg-gradient-to-r from-green-500 to-green-600 cursor-pointer hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold flex items-center gap-2"
          >
            <span>✅</span>
            Approve All Pending ({statusCounts.pending})
          </button>
          <button
            onClick={bulkDeleteCancelled}
            className="bg-gradient-to-r from-gray-500 to-gray-600 cursor-pointer hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold flex items-center gap-2"
          >
            <span>🗑️</span>
            Delete All Cancelled ({statusCounts.cancelled})
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { status: "all", label: "Total", icon: "📊", color: "from-blue-500 to-blue-600" },
            { status: "pending", label: "Pending", icon: "⏳", color: "from-yellow-500 to-yellow-600" },
            { status: "approved", label: "Approved", icon: "✅", color: "from-green-500 to-green-600" },
            { status: "cancelled", label: "Cancelled", icon: "❌", color: "from-red-500 to-red-600" }
          ].map(({ status, label, icon, color }) => (
            <div
              key={status}
              className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${selectedStatus === status ? "border-indigo-500 ring-2 ring-indigo-200" : "border-transparent"
                }`}
              onClick={() => setSelectedStatus(status)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>{label}</p>
                  <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>{statusCounts[status]}</p>
                </div>
                <span className={`text-2xl p-3 rounded-full bg-gradient-to-r ${color} text-white`}>
                  {icon}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reservations List */}
        <div className={` ${darkMode ? "bg-gray-700 text-white" : "bg-white/80"} backdrop-blur-sm rounded-3xl shadow-xl p-6`}>
          {filteredReservations.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No reservations found</h3>
              <p className="text-gray-500">
                {selectedStatus === "all"
                  ? "No reservations have been made yet."
                  : `No ${selectedStatus} reservations found.`
                }
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredReservations.map((resv) => (
                <div
                  key={resv._id}
                  className={`group  rounded-2xl  transition-all duration-500  p-6 
                    ${darkMode ? "bg-gray-800 text-white shadow-sm hover:shadow-xl shadow-gray-200" : 
                      "bg-gradient-to-r from-white to-gray-50/50 border border-gray-100 hover:border-indigo-200 shadow-md hover:shadow-2xl"}`}
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    {/* Reservation Details */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <div>
                          <label className={`text-xs font-semibold ${darkMode ? "text-yellow-300" : "text-gray-500"} uppercase tracking-wide`}>Guest</label>
                          <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}  text-lg`}>{resv.user?.name || "Unknown"}</p>
                          <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} `}>{resv.user?.email || "-"}</p>
                        </div>
                        <div>
                          <label className={`text-xs font-semibold ${darkMode ? "text-yellow-300" : "text-gray-500"} uppercase tracking-wide`}>Contact</label>
                          <p className={`${darkMode ? "text-white" : "text-gray-900"}  text-sm`}>{resv.number || "Not provided"}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className={`text-xs font-semibold ${darkMode ? "text-yellow-300" : "text-gray-500"} uppercase tracking-wide`}>Date & Time</label>
                          <p className={`font-medium ${darkMode ? "text-white" : "text-gray-900"} `}>
                            {new Date(resv.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </p>
                          {/* <p className="text-sm text-gray-600">
                            {resv.time > 12 ? `${resv.time} PM` : `${resv.time} AM`}                           
                          </p> */}


                          <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {(() => {
                              const timeString = resv.time; // Example: "14:30", "04:30", "7:05"

                              if (!timeString) return "Invalid Time";

                              // Split hour & minutes
                              const [hourStr, minuteStr] = timeString.split(":");
                              let hour = parseInt(hourStr, 10);
                              let minutes = parseInt(minuteStr, 10);

                              // Determine AM/PM
                              const period = hour >= 12 ? "PM" : "AM";

                              // Convert to 12-hour format
                              hour = hour % 12;
                              if (hour === 0) hour = 12;

                              return `${hour}:${minutes.toString().padStart(2, "0")} ${period}`;
                            })()}
                          </p>



                          {/* <p className="text-sm text-gray-600">{resv.time}</p> */}
                        </div>
                        <div>
                          <label className={`text-xs font-semibold ${darkMode ? "text-yellow-300" : "text-gray-500"} uppercase tracking-wide`}>Party Size</label>
                          <p className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-900"}`}>{resv.personCount} persons</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className={`text-xs font-semibold ${darkMode ? "text-yellow-300" : "text-gray-500"} uppercase tracking-wide`}>Status</label>
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(resv.status)}`}>
                              {resv.status}
                            </span>
                            <span className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                              {new Date(resv.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className={`text-xs font-semibold ${darkMode ? "text-yellow-300" : "text-gray-500"} uppercase tracking-wide`}>Reservation ID</label>
                          <p className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"}  font-mono truncate`}>{resv._id}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 w-full lg:w-48">
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                        {getStatusButtons(resv)}
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                        {/* Delete Button */}
                        <button
                          onClick={() => deleteReservation(resv._id)}
                          disabled={deletingId === resv._id}
                          className={`flex items-center justify-center cursor-pointer gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium text-sm ${deletingId === resv._id ? "animate-pulse opacity-75" : ""
                            }`}
                        >
                          <span>🗑️</span>
                          {deletingId === resv._id ? "Deleting..." : "Delete"}
                        </button>

                        {/* View Special Request Button */}
                        {resv.specialRequest && (
                          <button
                            onClick={() => {
                              showToast(`Special Request: ${resv.specialRequest}`, "info");
                            }}
                            className="flex items-center justify-center cursor-no-drop gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium text-sm"
                          >
                            <span>📝</span>
                            View Request
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Special Request (Collapsible) */}
                  {resv.specialRequest && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-700">Special Request:</span> {resv.specialRequest}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className={`mt-8 text-center text-sm ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
          Showing {filteredReservations.length} of {reservations.length} total reservations
          {selectedStatus !== "all" && ` • ${statusCounts[selectedStatus]} ${selectedStatus} reservations`}
        </div>
      </div>
    </div>
  );
}

export default AdminReservation;




