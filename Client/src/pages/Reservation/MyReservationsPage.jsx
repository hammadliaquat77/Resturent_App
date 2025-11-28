import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

function MyReservations() {
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
      console.log(res.data.myReservation || []);
      
      setReservations(res.data.myReservation || []);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      // alert("Failed to fetch reservations");
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
      alert(res.data.message);
      fetchReservations(); // Refresh list
    } catch (err) {
      // alert(err.response?.data?.message || "Cancellation failed");
      toast.error(err.response?.data?.message || "Cancellation failed");
    }
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;

  if (reservations.length === 0)
    return <p className="text-center py-20 text-gray-500">No reservations found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 pt-24">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">My Reservations</h2>

      <div className="space-y-4">
        {reservations.map((resv) => (
          <div
            key={resv._id}
            className="bg-white shadow-md rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(resv.date).toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">Time:</span> {resv.time}
              </p>
              <p>
                <span className="font-semibold">Persons:</span> {resv.personCount}
              </p>
              <p>
                <span className="font-semibold">Contact:</span> {resv.number}
              </p>
              <p>
                <span className="font-semibold">Special Requests:</span>{" "}
                {resv.specialRequest || "None"}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`px-2 py-1 rounded ${
                    resv.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : resv.status === "cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {resv.status}
                </span>
              </p>
            </div>

            {resv.status !== "approved" && resv.status !== "cancelled" && (
              <button
                onClick={() => cancelReservation(resv._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Cancel
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyReservations;
