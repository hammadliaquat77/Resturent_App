// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch} from "react-redux";
// import { fetchUsers } from "../../redux/slices/user.Slice";

// function Users() {

//   const disPatch = useDispatch();  
//   const { users } = useSelector((state) => state.users);

//   // Filtered Customer Role Users
//   const Customer = users.filter(user => user.role === "customer");
//   // console.log(Customer);
  
//   useEffect(() => {
//     disPatch(fetchUsers());    
//   }, [])

//   // Status Color Badge
//   const getStatusColor = (status) => {
//     return status === "Active"
//       ? "bg-green-100 text-green-700"
//       : "bg-red-100 text-red-700";
//   };


//   return (
//     <div className="p-6">
//       {/* Header */}
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">
//         Users <span className="text-gray-500 text-xl">({users.length})</span>
//       </h1>


//       {/* Users Table */}
//       <div className="overflow-hidden rounded-xl shadow bg-white border">
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
//               {/* <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
//                 Actions
//               </th> */}
//             </tr>
//           </thead>

//           <tbody>
//             {Customer.map((user, index) => (
//               <tr
//                 key={index}
//                 className="border-b hover:bg-gray-50 transition"
//               >
//                 <td className="p-4 font-medium">{index}</td>
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

//                 {/* <td className="p-4">
//                   <button
//                     onClick={() => handleDelete(user.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
//                   >
//                     Delete
//                   </button>
//                 </td> */}
//               </tr>
//             ))}

//             {users.length === 0 && (
//               <tr>
//                 <td className="p-4 text-center text-gray-600" colSpan="5">
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Users;














import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/slices/user.Slice";

function Users() {
  const disPatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  // Filtered Customer Role Users
  const Customer = users.filter((user) => user.role === "customer");

  useEffect(() => {
    disPatch(fetchUsers());
  }, []);

  // Status Color Badge
  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  return (
    <div className="p-4 md:p-6 mt-10 md:mt-0">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Users <span className="text-gray-500 text-lg md:text-xl">({Customer.length})</span>
      </h1>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-hidden rounded-xl shadow bg-white border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
                ID
              </th>
              <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
                Name
              </th>
              <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
                Email
              </th>
              <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {Customer.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 font-medium">{index + 1}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
            {Customer.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-600" colSpan="4">
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
            className="bg-white rounded-lg shadow border p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                  user.status
                )}`}
              >
                {user.role}
              </span>
            </div>
            <p className="text-gray-600 mb-1">
              <strong>ID:</strong> {index + 1}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ))}
        {Customer.length === 0 && (
          <div className="bg-white rounded-lg shadow border p-4 text-center text-gray-600">
            No users found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
