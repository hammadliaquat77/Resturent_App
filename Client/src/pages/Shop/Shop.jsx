
//  Without Filter
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMenu } from "../../redux/slices/product.Slice";
// import { Link } from "react-router-dom";

// function Shop() {
//   const dispatch = useDispatch();
//   const { items } = useSelector((state) => state.menu);

//   console.log("Items===>", items);
  

//   useEffect(() => {
//     dispatch(fetchMenu());
//   }, [dispatch]);

//   return (
//     <section className='py-16 px-4 md:px-20 bg-gray-50 min-h-screen'>
//       <div className='max-w-7xl mx-auto'>
//         <h2 className='text-3xl font-bold text-center mb-12'>Our Menu</h2>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//           {items.map((product) => (
//             <div key={product._id} className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition'>
              
//               <Link to={`/single/${product._id}`}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className='w-full h-48 object-cover cursor-pointer'
//                 />
//               </Link>

//               <div className='p-6'>
//                 <Link to={`/single/${product._id}`}>
//                   <h3 className='text-xl font-bold mb-2 cursor-pointer hover:text-red-500'>{product.name}</h3>
//                 </Link>
//                 <p className='text-gray-600 mb-2'>Rs. {product.price}</p>
//                 <p className={`font-semibold ${product.isAvailable ? "text-green-600" : "text-red-600"}`}>
//                   {product.isAvailable ? "Available" : "Not Available"}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Shop;







// With Filter
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMenu } from "../../redux/slices/product.Slice";
// import { Link } from "react-router-dom";

// function Shop() {
//   const dispatch = useDispatch();
//   const { items } = useSelector((state) => state.menu); // all items
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [filteredItems, setFilteredItems] = useState([]);

//   // 1️⃣ Fetch all products
//   useEffect(() => {
//     dispatch(fetchMenu());
//   }, [dispatch]);

//   // 2️⃣ Extract unique categories from items
//   useEffect(() => {
//     const uniqueCategories = ["All", ...new Set(items.map((i) => i.category))];
//     setCategories(uniqueCategories);
//   }, [items]);

//   // 3️⃣ Filter items whenever selectedCategory changes
//   useEffect(() => {
//     if (selectedCategory === "All") {
//       setFilteredItems(items);
//     } else {
//       setFilteredItems(items.filter((i) => i.category === selectedCategory));
//     }
//   }, [selectedCategory, items]);

//   return (
//     <section className="py-16 px-4 md:px-20 bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6">Our Menu</h2>

//         {/* Categories bar */}
//         <div className="flex overflow-x-auto gap-4 mb-12 py-2 px-2">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`flex-shrink-0 px-5 py-2 rounded-full font-semibold transition
//                 ${selectedCategory === cat
//                   ? "bg-red-500 text-white shadow-lg scale-105"
//                   : "bg-gray-200 text-gray-700 hover:bg-red-100 hover:text-red-500"}`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredItems.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
//             >
//               <Link to={`/single/${product._id}`}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover cursor-pointer"
//                 />
//               </Link>
//               <div className="p-6">
//                 <Link to={`/single/${product._id}`}>
//                   <h3 className="text-xl font-bold mb-2 cursor-pointer hover:text-red-500">
//                     {product.name}
//                   </h3>
//                 </Link>
//                 <p className="text-gray-600 mb-2">Rs. {product.price}</p>
//                 <p
//                   className={`font-semibold ${
//                     product.isAvailable ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {product.isAvailable ? "Available" : "Not Available"}
//                 </p>
//               </div>
//             </div>
//           ))}

//           {filteredItems.length === 0 && (
//             <p className="text-center col-span-full text-gray-500 mt-8">
//               No products found in this category.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Shop;







// update ui
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../redux/slices/product.Slice";
import { Link } from "react-router-dom";
import { FaSearch, FaFilter } from "react-icons/fa"; // Assuming you have react-icons installed for icons

function Shop() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.menu); // all items
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Added search functionality
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar toggle

  

  // 1️⃣ Fetch all products
  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  // 2️⃣ Extract unique categories from items
  useEffect(() => {
    const uniqueCategories = ["All", ...new Set(items.map((i) => i.category))];
    setCategories(uniqueCategories);
  }, [items]);

  // 3️⃣ Filter items whenever selectedCategory or searchTerm changes
  useEffect(() => {
    let filtered = items;
    if (selectedCategory !== "All") {
      filtered = filtered.filter((i) => i.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter((i) =>
        i.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredItems(filtered);
  }, [selectedCategory, items, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 absolute mt-16 md:mt-16">
      {/* Header Section */}
      <header className="bg-white shadow-lg py-6 px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="md:text-4xl font-extrabold text-gray-900">
            Our Menu
          </h1>
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300  rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 "
            />
          </div>
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            <FaFilter />
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-20 py-8 flex">
        {/* Sidebar for Categories */}
        <aside
          className={`w-full md:w-1/4 bg-white  shadow-lg rounded-lg p-6 mb-8 md:mb-0 md:mr-8 transition-transform duration-300 ${
            isSidebarOpen ? "block" : "hidden md:block"
          }`}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900 ">
            Categories
          </h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsSidebarOpen(false); // Close sidebar on mobile after selection
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-red-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700  hover:bg-red-100  hover:text-red-600"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4">
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((product) => (
              <div
                key={product._id}
                className="bg-white  shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Link to={`/single/${product._id}`} className="block">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity"
                    />
                    
                  </div>
                </Link>
                <div className="p-5">
                  <Link to={`/single/${product._id}`}>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900  hover:text-red-500 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-2xl font-bold text-red-500 mb-2">
                    Rs. {product.price}
                  </p>
                  <p
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      product.isAvailable
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.isAvailable ? "Available" : "Out of Stock"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <FaSearch className="mx-auto text-6xl text-gray-400 mb-4" />
              <p className="text-xl text-gray-500">
                No products found matching your criteria.
              </p>
              <p className="text-gray-400 mt-2">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Shop;
