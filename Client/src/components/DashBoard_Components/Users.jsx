// // WithOut DarkMode
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers } from "../../redux/slices/user.Slice";

// function Users() {
//   const darkMode = useSelector((state)=> state.darkMode.darkMode);
//   const disPatch = useDispatch();
//   const { users } = useSelector((state) => state.users);

//   // Filtered Customer Role Users
//   const Customer = users.filter((user) => user.role === "customer");

//   useEffect(() => {
//     disPatch(fetchUsers());
//   }, []);

//   // Status Color Badge
//   const getStatusColor = (status) => {
//     return status === "Active"
//       ? "bg-green-100 text-green-700"
//       : "bg-red-100 text-red-700";
//   };

//   return (
//     <div className="p-4 md:p-6 mt-10 md:mt-0">
//       {/* Header */}
//       <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
//         Users <span className="text-gray-500 text-lg md:text-xl">({Customer.length})</span>
//       </h1>

//       {/* Desktop Table View */}
//       <div className="hidden md:block overflow-hidden rounded-xl shadow bg-white border">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-50 border-b">
//               <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
//                 ID
//               </th>
//               <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
//                 Name
//               </th>
//               <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
//                 Email
//               </th>
//               <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {Customer.map((user, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50 transition">
//                 <td className="p-4 font-medium">{index + 1}</td>
//                 <td className="p-4">{user.name}</td>
//                 <td className="p-4">{user.email}</td>
//                 <td className="p-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
//                       user.status
//                     )}`}
//                   >
//                     {user.role}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//             {Customer.length === 0 && (
//               <tr>
//                 <td className="p-4 text-center text-gray-600" colSpan="4">
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Card View */}
//       <div className="md:hidden space-y-4">
//         {Customer.map((user, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow border p-4 hover:shadow-md transition"
//           >
//             <div className="flex justify-between items-start mb-2">
//               <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
//               <span
//                 className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
//                   user.status
//                 )}`}
//               >
//                 {user.role}
//               </span>
//             </div>
//             <p className="text-gray-600 mb-1">
//               <strong>ID:</strong> {index + 1}
//             </p>
//             <p className="text-gray-600">
//               <strong>Email:</strong> {user.email}
//             </p>
//           </div>
//         ))}
//         {Customer.length === 0 && (
//           <div className="bg-white rounded-lg shadow border p-4 text-center text-gray-600">
//             No users found.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Users;







// With DarkMode

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/slices/user.Slice";

function Users() {
  const darkMode = useSelector((state)=> state.darkMode.darkMode);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const Customer = users.filter((user) => user.role === "customer");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // Status Color Badge
  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300"
      : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-300";
  };

  return (
    <div className={`p-4 md:p-6 mt-10 md:mt-0 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Header */}
      <h1 className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
        Users <span className={`text-lg md:text-xl ${darkMode ? "text-gray-300" : "text-gray-500"}`}>({Customer.length})</span>
      </h1>

      {/* Desktop Table View */}
      <div className={`hidden md:block overflow-hidden rounded-xl shadow border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
        <table className="w-full border-collapse">
          <thead>
            <tr className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} border-b`}>
              <th className="p-4 text-left font-semibold text-sm">ID</th>
              <th className="p-4 text-left font-semibold text-sm">Name</th>
              <th className="p-4 text-left font-semibold text-sm">Email</th>
              <th className="p-4 text-left font-semibold text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {Customer.map((user, index) => (
              <tr key={index} className={`border-b transition hover:${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <td className="p-4 font-medium">{index + 1}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
            {Customer.length === 0 && (
              <tr>
                <td className={`p-4 text-center ${darkMode ? "text-gray-300" : "text-gray-600"}`} colSpan="4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {Customer.map((user, index) => (
          <div
            key={index}
            className={`rounded-lg shadow border p-4 transition hover:shadow-md ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>{user.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
                {user.role}
              </span>
            </div>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-1`}>
              <strong>ID:</strong> {index + 1}
            </p>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ))}
        {Customer.length === 0 && (
          <div className={`rounded-lg shadow border p-4 text-center ${darkMode ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-white border-gray-200 text-gray-600"}`}>
            No users found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
