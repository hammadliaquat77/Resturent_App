import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../../redux/slices/product.Slice";

import { toast } from "react-toastify";

function Menu() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.items);

  // console.log(menuItems);


  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    isAvailable: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [editMenu, setEditMenu] = useState(null);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  // ✅ Add or Update Menu
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newItem.name || !newItem.price || !newItem.category || !newItem.description || newItem.isAvailable === "" || (!imageFile && !editMenu)) {
      // alert("Please fill in all the required fields.");
      toast.error("Please fill in all the required fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", newItem.name);
      formData.append("price", newItem.price);
      formData.append("category", newItem.category);
      formData.append("description", newItem.description);
      formData.append("isAvailable", newItem.isAvailable);
      if (imageFile) formData.append("image", imageFile);

      if (editMenu) {
        // Update menu
        await axios.put(
          `http://localhost:8000/api/menu/update/${editMenu._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",

            },
          }
        );
        // alert("Menu updated successfully!");
        toast.success("Menu updated successfully!");
      } else {
        // Add menu
        await axios.post(
          "http://localhost:8000/api/menu/add",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // alert("Menu added successfully!");
        toast.success("Menu added successfully!");
      }

      // Reset form
      setNewItem({
        name: "",
        price: "",
        category: "",
        description: "",
        isAvailable: "",
      });
      setImageFile(null);
      setEditMenu(null);

      // Refresh menu table
      dispatch(fetchMenu());
    } catch (error) {
      // alert(error.response?.data?.message || "Error processing request");
        toast.error(error.response?.data?.message || "Error processing request");
    }
  };

  // ✅ Edit menu item
    const handleEdit = (item) => {
    setEditMenu(item);
    setNewItem({
      name: item.name,
      price: item.price,
      category: item.category,
      description: item.description,
      isAvailable: item.isAvailable,
    });
    setImageFile(null);
  };

  // ✅ Delete menu item
  const handleDelete = async (itemId) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/menu/delete/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // alert("Menu deleted successfully!");
      toast.success("Menu deleted successfully!");
      dispatch(fetchMenu());
    } catch (error) {
      // alert(error.response?.data?.message || "Error deleting item");
      toast.error(error.response?.data?.message || "Error deleting item");
    }
  };

  // Category & Status badges
  const getCategoryColor = (cat) => {
    switch (cat) {
      case "Fastfood":
        return "bg-blue-100 text-blue-700";
      case "Drink":
        return "bg-red-100 text-red-700";
      case "Dessert":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  const getStatusColor = (s) =>
    s === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Menu Items <span className="text-gray-500">({menuItems.length})</span>
      </h1>

      {/* Add / Edit Menu Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 p-6 bg-white rounded-xl shadow border max-w-2xl"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {editMenu ? "Edit Menu Item" : "Add New Menu Item"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Item Name"
            className="border rounded px-3 py-2"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />

          <input
            type="number"
            placeholder="Price"
            className="border rounded px-3 py-2"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />

          <select
            className="border rounded px-3 py-2"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          >
            <option value="" disabled>Select Category</option>
            <option value="Fastfood">Fastfood</option>
            <option value="Drink">Drink</option>
            <option value="Dessert">Dessert</option>
            <option value="Sweet">Sweet</option>
            <option value="Pizza">Pizza</option>
            <option value="Bbq">BBQ</option>
            <option value="Shake">Shake</option>
          </select>


          <select
            className="border rounded px-3 py-2"
            value={newItem.isAvailable}
            onChange={(e) =>
              setNewItem({ ...newItem, isAvailable: e.target.value === "true" })
            }
          >
            <option value="" disabled >Selected Status</option>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>

          <input
            type="file"
            className="border rounded px-3 py-2 col-span-2"
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          <textarea
            placeholder="Description"
            className="border rounded px-3 py-2 col-span-2"
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {editMenu ? "Update Menu Item" : "Add Menu Item"}
        </button>
      </form>

      {/* Menu Table */}
      <div className="overflow-hidden rounded-xl shadow bg-white border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={item.image}
                    alt="food"
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>

                <td className="p-4 font-semibold text-gray-800">{item.name}</td>
                <td className="p-4 font-medium">Rs.{item.price}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${getCategoryColor(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.isAvailable ? "Available" : "Not Available"}

                  </span>
                </td>
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {menuItems.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan="6">
                  No menu items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Menu;
