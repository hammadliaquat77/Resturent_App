import React, { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";

function Staffs() {
  const token = localStorage.getItem("token");
  const [staff, setStaff] = useState([]);

  //  console.log(staff)

  const [newStaff, setNewStaff] = useState({
    name: "",
    role: "",
    contact: "",
    shift: "",
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchStaff();
  }, []);


  // Fetch staff
  const fetchStaff = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/staff/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStaff(res.data.allStaff);
      toast.success(res.data.message)
    } catch (err) {
      console.log("Staff Fetch Error:", err.message);
    }
  };

  // Add staff
  const addStaff = async () => {
    if (!newStaff.name || !newStaff.role || !newStaff.contact || !newStaff.shift) {
      // alert("Please fill all fields");
      toast.error("Please fill all fields");
      return;
    }

    // Phone number length validation
    // if (newStaff.contact.length !== 11) {
    //   alert("Phone number must be 11 digits");
    //   return;
    // }

    // Phone number length validation
    if (!/^\d{11}$/.test(newStaff.contact)) {
      // alert("Phone number must be 11 digits");
      toast.error("Phone number must be 11 digits");
      return;
    }


    try {
      const res = await axios.post("http://localhost:8000/api/staff/add",
        newStaff,
        { headers: { Authorization: `Bearer ${token}` } }
      )

      // console.log(res.data.newStaff);      

      setStaff([...staff, res.data.newStaff]);
      setNewStaff({ name: "", role: "", contact: "", shift: "" });

      // alert("Staff added successfully!");
      toast.success("Staff added successfully!");

    } catch (error) {
      // alert(error.response?.data?.message || "Failed to add staff");
      toast.error(error.response?.data?.message || "Failed to add staff");
    }

    setShowModal(false);
  };


  // Delete staff
  const deleteStaff = async (id) => {
    if (window.confirm("Delete this staff member?")) {
      try {
        const res = await axios.delete(`http://localhost:8000/api/staff/delete/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        )

        // alert(res.data.message);
        toast.success(res.data.message);
        fetchStaff();

      } catch (error) {
        // alert(error.response?.data?.message || "Failed to delete staff");
        toast.error(error.response?.data?.message || "Failed to delete staff");
      }
    }

  };

  // Role badge color
  const roleColor = (role) => {
    switch (role) {
      case "Manager": return "bg-blue-100 text-blue-700";
      case "Waiter": return "bg-green-100 text-green-700";
      case "Chef": return "bg-red-100 text-red-700";
      case "Delivery": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  // Shift badge color
  const shiftColor = (shift) => {
    switch (shift) {
      case "Morning": return "bg-yellow-100 text-yellow-700";
      case "Evening": return "bg-orange-100 text-orange-700";
      case "Night": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 mt-10 md:mt-0">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Restaurant Staff</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700"
        >
          + Add Staff
        </button>
      </div>

      {/* Staff Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {staff.map((s) => (
          <div
            key={s.id}
            className="p-5 bg-white rounded-xl shadow border hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold">{s.name}</h2>
              <span className={`px-3 py-1 text-xs rounded-full font-medium ${roleColor(s.role)}`}>
                {s.role}
              </span>
            </div>

            <p className="mt-1 text-gray-600">
              📞 <span className="font-medium">{s.contact}</span>
            </p>

            <p className="mt-2">
              🕒 Shift: <span className={`px-2 py-1 text-xs rounded-full font-medium ${shiftColor(s.shift)}`}>{s.shift}</span>
            </p>

            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm">
                Edit
              </button>
              <button
                onClick={() => deleteStaff(s._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Staff Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Add New Staff</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="border w-full px-3 py-2 rounded mb-3"
              value={newStaff.name}
              onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border w-full px-3 py-2 rounded mb-3"
              value={newStaff.contact}
              // onChange={(e) => setNewStaff({ ...newStaff, contact: e.target.value })}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, ""); // remove non-digit
                setNewStaff({ ...newStaff, contact: onlyNumbers });
              }}
              maxLength={11}

            />

            <select
              className="border w-full px-3 py-2 rounded mb-3"
              value={newStaff.role}
              onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
            >
              <option value="" disabled >Select Role</option>
              <option value="manager">Manager</option>
              <option value="waiter">Waiter</option>
              <option value="chef">Chef</option>
              <option value="delivery">Delivery Boy</option>
            </select>

            <select
              className="border w-full px-3 py-2 rounded mb-3"
              value={newStaff.shift}
              onChange={(e) => setNewStaff({ ...newStaff, shift: e.target.value })}
            >
              <option value="" disabled >Select Shift</option>
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>

            <button
              onClick={addStaff}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Add Staff
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-2 bg-gray-300 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Staffs;
