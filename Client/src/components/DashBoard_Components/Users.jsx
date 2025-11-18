import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { fetchUsers } from "../../redux/slices/user.Slice";

function Users() {

  const disPatch = useDispatch();  
  const { users } = useSelector((state) => state.users);

  // Filtered Customer Role Users
  const Customer = users.filter(user => user.role === "customer");
  console.log(Customer);
  
  useEffect(() => {
    disPatch(fetchUsers());    
  }, [])

  // Status Color Badge
  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };


  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Users <span className="text-gray-500 text-xl">({users.length})</span>
      </h1>


      {/* Users Table */}
      <div className="overflow-hidden rounded-xl shadow bg-white border">
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
              {/* <th className="p-4 text-left font-semibold text-gray-700 uppercase text-sm">
                Actions
              </th> */}
            </tr>
          </thead>

          <tbody>
            {Customer.map((user, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{index}</td>
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

                {/* <td className="p-4">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-600" colSpan="5">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
