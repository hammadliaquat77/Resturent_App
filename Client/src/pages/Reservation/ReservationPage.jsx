import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

function ReservationForm() {

  const token = localStorage.getItem("token");

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
        "http://localhost:8000/api/reservation/create",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // alert(res.data.message);
      toast.success(res.data.message);
      setFormData({ date: "", time: "", personCount: 1, number: "", specialRequest: "" });
    } catch (err) {
      // alert(err.response?.data?.message || "Reservation failed");
      toast.error(err.response?.data?.message || "Reservation failed");
    }
  };

  return (

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4 pt-40">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Table Booking</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl p-6 space-y-5"
      >
        {/* Date */}
        <div className="flex flex-col">
          <label htmlFor="date" className="mb-2 font-semibold text-gray-700">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Time */}
        <div className="flex flex-col">
          <label htmlFor="time" className="mb-2 font-semibold text-gray-700">
            Select Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Number */}
        <div className="flex flex-col">
          <label htmlFor="time" className="mb-2 font-semibold text-gray-700">
            Contact Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={ (e)=>{
              const value = e.target.value;
              // Allow only digits
              if (/^\d*$/.test(value)) {
                handleChange(e); // Your existing handler
              }
            }
            }
            required
            minLength={11}
            maxLength={11}
            placeholder="+92 123 456 7899"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Person Count */}
        <div className="flex flex-col">
          <label htmlFor="personCount" className="mb-2 font-semibold text-gray-700">
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
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>


        {/* Special Request */}
        <div className="flex flex-col">
          <label htmlFor="specialRequest" className="mb-2 font-semibold text-gray-700">
            Special Requests
          </label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            placeholder="Any special requests (optional)"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
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


  );
}

export default ReservationForm;
