// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import { toast } from "react-toastify";

// import {useSelector} from "react-redux";

// function ReservationForm() {

//   const darkMode = useSelector((state)=> state.darkMode.darkMode);

//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     personCount: 1,
//     number: "",
//     specialRequest: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/reservation/create",
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       // alert(res.data.message);
//       toast.success(res.data.message);
//       setFormData({ date: "", time: "", personCount: 1, number: "", specialRequest: "" });
//       navigate("/myreservation")
//     } catch (err) {
//       // alert(err.response?.data?.message || "Reservation failed");
//       toast.error(err.response?.data?.message || "Reservation failed");
//     }
//   };

//   return (

//     <section className={`${darkMode ? "bg-gray-800" : "bg-white"} w-full`}>

//     <div className={`absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4 pt-40 
//     ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Table Booking</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white rounded-xl shadow-xl p-6 space-y-5"
//         >
//         {/* Date */}
//         <div className="flex flex-col">
//           <label htmlFor="date" className="mb-2 font-semibold text-gray-700">
//             Select Date
//           </label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//           />
//         </div>

//         {/* Time */}
//         <div className="flex flex-col">
//           <label htmlFor="time" className="mb-2 font-semibold text-gray-700">
//             Select Time
//           </label>
//           <input
//             type="time"
//             id="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//         </div>

//         {/* Number */}
//         <div className="flex flex-col">
//           <label htmlFor="time" className="mb-2 font-semibold text-gray-700">
//             Contact Number
//           </label>
//           <input
//             type="text"
//             id="number"
//             name="number"
//             value={formData.number}
//             onChange={ (e)=>{
//               const value = e.target.value;
//               // Allow only digits
//               if (/^\d*$/.test(value)) {
//                 handleChange(e); // Your existing handler
//               }
//             }
//           }
//           required
//           minLength={11}
//           maxLength={11}
//           placeholder="+92 123 456 7899"
//           className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//           />
//         </div>

//         {/* Person Count */}
//         <div className="flex flex-col">
//           <label htmlFor="personCount" className="mb-2 font-semibold text-gray-700">
//             Number of Persons
//           </label>
//           <input
//             type="number"
//             id="personCount"
//             name="personCount"
//             value={formData.personCount}
//             onChange={(e) => {
//               const value = Math.max(2, Number(e.target.value)); // Minimum 2
//               setFormData({ ...formData, personCount: value });
//             }}
//             min={2}
//             required
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//         </div>


//         {/* Special Request */}
//         <div className="flex flex-col">
//           <label htmlFor="specialRequest" className="mb-2 font-semibold text-gray-700">
//             Special Requests
//           </label>
//           <textarea
//             id="specialRequest"
//             name="specialRequest"
//             value={formData.specialRequest}
//             onChange={handleChange}
//             placeholder="Any special requests (optional)"
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
//             />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
//           >
//           Reserve Table
//         </button>
//       </form>
//     </div>

//   </section>

//   );
// }

// export default ReservationForm;




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function ReservationForm() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    personCount: 1,
    number: "",
    specialRequest: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://resturent-app-snowy.vercel.app/api/reservation/create",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(res.data.message);
      setFormData({ date: "", time: "", personCount: 1, number: "", specialRequest: "" });
      navigate("/myreservation");
    } catch (err) {
      toast.error(err.response?.data?.message || "Reservation failed");
    }
  };

  return (
    <section className={`w-full h-[127vh] transition-colors duration-300 ${
      darkMode ? "bg-gray-900" : "bg-gray-100"
    } `}>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4 pt-56 md:pt-72 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}>
        <h1 className={`text-3xl font-bold text-center mb-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}>
          Table Booking
        </h1>

        <form
          onSubmit={handleSubmit}
          className={`rounded-xl shadow-xl p-6 space-y-5 transition-colors duration-300 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          {/* Date */}
          <div className="flex flex-col">
            <label htmlFor="date" className={`mb-2 font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-300 ${
                darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300 bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Time */}
          <div className="flex flex-col">
            <label htmlFor="time" className={`mb-2 font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Select Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-300 ${
                darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300 bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Number */}
          <div className="flex flex-col">
            <label htmlFor="number" className={`mb-2 font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Contact Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only digits
                if (/^\d*$/.test(value)) {
                  handleChange(e); // Your existing handler
                }
              }}
              required
              minLength={11}
              maxLength={11}
              placeholder="+92 123 456 7899"
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-300 ${
                darkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300 bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Person Count */}
          <div className="flex flex-col">
            <label htmlFor="personCount" className={`mb-2 font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Number of Persons
            </label>
            <input
              type="number"
              id="personCount"
              name="personCount"
              value={formData.personCount}
              onChange={(e) => {
                const value = Math.max(2, Number(e.target.value)); // Minimum 2
                setFormData({ ...formData, personCount: value });
              }}
              min={2}
              required
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-300 ${
                darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300 bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Special Request */}
          <div className="flex flex-col">
            <label htmlFor="specialRequest" className={`mb-2 font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Special Requests
            </label>
            <textarea
              id="specialRequest"
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
              placeholder="Any special requests (optional)"
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 resize-none transition-colors duration-300 ${
                darkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300 bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Reserve Table
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationForm;
