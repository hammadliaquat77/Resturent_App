import React, { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";

function Inventory() {
  const token = localStorage.getItem("token");
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({
    itemName: "",
    quantity: "",
    unit: "",
    threshold: ""
  });

  const [showModal, setShowModal] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null); // track edit mode

  useEffect(() => {
    fetchInventory();
  }, []);

  // Fetch inventory
  const fetchInventory = async () => {
    try {
      const response = await axios.get("https://resturent-api-cg1s.onrender.com/api/inventry/all", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInventory(response.data.allInventry);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  // Add or Edit inventory
  const addOrEditInventory = async () => {
    const { itemName, quantity, unit, threshold } = newItem;
    if (!itemName || !quantity || !unit || !threshold) {
      // alert("Please fill all fields");
      toast.error("Please fill all fields");
      return;
    }

    if (isNaN(quantity) || isNaN(threshold)) {
      // alert("Quantity and Threshold must be numbers");
      toast.error("Quantity and Threshold must be numbers");
      return;
    }

    try {
      const res = await axios.post(
        "https://resturent-api-cg1s.onrender.com/api/inventry/add",
        newItem,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (editingItemId) {
        // Update existing item in state
        setInventory(
          inventory.map(item =>
            item._id === editingItemId ? res.data.newItem || item : item
          )
        );
      } else {
        // Add new item
        setInventory([...inventory, res.data.newItem]);
      }

      // alert(res.data.message);
      toast.success(res.data.message);
      setNewItem({ itemName: "", quantity: "", unit: "", threshold: "" });
      setShowModal(false);
      setEditingItemId(null); // reset edit mode

      fetchInventory();

    } catch (error) {
      // alert(error.response?.data?.message || "Failed to add/update item");
      toast.error(error.response?.data?.message || "Failed to add/update item");
    }
  };

  // Edit inventory
  const editInventory = (item) => {
    setNewItem({
      itemName: item.itemName,
      quantity: item.quantity,
      unit: item.unit,
      threshold: item.threshold
    });
    setEditingItemId(item._id);
    setShowModal(true);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen mt-10 md:mt-0">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Inventory Management</h1>
        <button
          onClick={() => {
            setShowModal(true);
            setEditingItemId(null);
            setNewItem({ itemName: "", quantity: "", unit: "", threshold: "" });
          }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
        >
          + Add Item
        </button>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">All Inventory Items</h2>

        {inventory.length === 0 ? (
          <p className="text-gray-500">No inventory items added yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-3 text-gray-600">Item Name</th>
                  <th className="border px-4 py-3 text-gray-600">Quantity</th>
                  <th className="border px-4 py-3 text-gray-600">Unit</th>
                  <th className="border px-4 py-3 text-gray-600">Threshold</th>
                  <th className="border px-4 py-3 text-gray-600">Status</th>
                  <th className="border px-4 py-3 text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition-all border-b border-gray-200"
                  >
                    <td className="px-4 py-2 font-medium">{item.itemName}</td>
                    <td className="px-4 py-2">{item.quantity}</td>
                    <td className="px-4 py-2">{item.unit}</td>
                    <td className="px-4 py-2">{item.threshold}</td>
                    <td className="px-4 py-2">
                      {item.quantity < item.threshold ? (
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold text-sm">
                          Low Inventory
                        </span>
                      ) : (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold text-sm">
                          OK
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => editInventory(item)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white w-96 rounded-xl shadow-2xl p-6 relative">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {editingItemId ? "Edit Item" : "Add New Item"}
            </h2>

            <input
              type="text"
              placeholder="Item Name"
              className="border w-full px-4 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newItem.itemName}
              onChange={(e) => setNewItem({ ...newItem, itemName: e.target.value })}
            />
            <input
              type="number"
              placeholder="Quantity"
              className="border w-full px-4 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
            />
            <input
              type="text"
              placeholder="Unit (pcs/kg/litre)"
              className="border w-full px-4 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newItem.unit}
              onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
            />
            <input
              type="number"
              placeholder="Threshold"
              className="border w-full px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newItem.threshold}
              onChange={(e) => setNewItem({ ...newItem, threshold: e.target.value })}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingItemId(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={addOrEditInventory}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {editingItemId ? "Update Item" : "Add Item"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;






