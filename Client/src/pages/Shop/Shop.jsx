// // update ui
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMenu } from "../../redux/slices/product.Slice";
// import { Link } from "react-router-dom";
// import { FaSearch, FaFilter } from "react-icons/fa"; // Assuming you have react-icons installed for icons

// function Shop() {
//   const dispatch = useDispatch();
//   const { items } = useSelector((state) => state.menu); // all items
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // Added search functionality
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar toggle

  

//   // 1️⃣ Fetch all products
//   useEffect(() => {
//     dispatch(fetchMenu());
//   }, [dispatch]);

//   // 2️⃣ Extract unique categories from items
//   useEffect(() => {
//     const uniqueCategories = ["All", ...new Set(items.map((i) => i.category))];
//     setCategories(uniqueCategories);
//   }, [items]);

//   // 3️⃣ Filter items whenever selectedCategory or searchTerm changes
//   useEffect(() => {
//     let filtered = items;
//     if (selectedCategory !== "All") {
//       filtered = filtered.filter((i) => i.category === selectedCategory);
//     }
//     if (searchTerm) {
//       filtered = filtered.filter((i) =>
//         i.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     setFilteredItems(filtered);
//   }, [selectedCategory, items, searchTerm]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 absolute mt-16 md:mt-16">
//       {/* Header Section */}
//       <header className="bg-white shadow-lg py-6 px-4 md:px-20">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <h1 className="md:text-4xl font-extrabold text-gray-900">
//             Our Menu
//           </h1>
//           {/* Search Bar */}
//           <div className="relative w-full max-w-md">
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border border-gray-300  rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 "
//             />
//           </div>
//           {/* Mobile Sidebar Toggle */}
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="md:hidden p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//           >
//             <FaFilter />
//           </button>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 md:px-20 py-8 flex">
//         {/* Sidebar for Categories */}
//         <aside
//           className={`w-full md:w-1/4 bg-white  shadow-lg rounded-lg p-6 mb-8 md:mb-0 md:mr-8 transition-transform duration-300 ${
//             isSidebarOpen ? "block" : "hidden md:block"
//           }`}
//         >
//           <h3 className="text-xl font-bold mb-4 text-gray-900 ">
//             Categories
//           </h3>
//           <ul className="space-y-2">
//             {categories.map((cat) => (
//               <li key={cat}>
//                 <button
//                   onClick={() => {
//                     setSelectedCategory(cat);
//                     setIsSidebarOpen(false); // Close sidebar on mobile after selection
//                   }}
//                   className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
//                     selectedCategory === cat
//                       ? "bg-red-500 text-white shadow-md"
//                       : "bg-gray-100 text-gray-700  hover:bg-red-100  hover:text-red-600"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </aside>

//         {/* Main Content */}
//         <main className="w-full md:w-3/4">
//           {/* Products Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredItems.map((product) => (
//               <div
//                 key={product._id}
//                 className="bg-white  shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
//               >
//                 <Link to={`/single/${product._id}`} className="block">
//                   <div className="relative">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       loading="lazy"
//                       className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity"
//                     />
                    
//                   </div>
//                 </Link>
//                 <div className="p-5">
//                   <Link to={`/single/${product._id}`}>
//                     <h3 className="text-lg font-semibold mb-2 text-gray-900  hover:text-red-500 transition-colors">
//                       {product.name}
//                     </h3>
//                   </Link>
//                   <p className="text-2xl font-bold text-red-500 mb-2">
//                     Rs. {product.price}
//                   </p>
//                   <p
//                     className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
//                       product.isAvailable
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {product.isAvailable ? "Available" : "Out of Stock"}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredItems.length === 0 && (
//             <div className="text-center py-16">
//               <FaSearch className="mx-auto text-6xl text-gray-400 mb-4" />
//               <p className="text-xl text-gray-500">
//                 No products found matching your criteria.
//               </p>
//               <p className="text-gray-400 mt-2">
//                 Try adjusting your search or category filter.
//               </p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Shop;






















 // changes ui with lazy loading images
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../redux/slices/product.Slice";
import { Link } from "react-router-dom";
import { FaSearch, FaFilter } from "react-icons/fa"; // Assuming you have react-icons installed for icons

import ProductCard from "../../components/ProductCard";


function Shop() {

  const darkMode = useSelector((state)=> state.darkMode.darkMode);
  
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
    <div className={`min-h-screen w-full absolute mt-16 md:mt-16 transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      {/* Header Section */}
      <header className={`shadow-lg py-6 px-4 md:px-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className={`md:text-4xl font-extrabold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Menu
          </h1>
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
              darkMode ? 'text-gray-400' : 'text-gray-400'
            }`} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300 ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'
              }`}
            />
          </div>
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`md:hidden p-2 text-white rounded-full hover:bg-red-600 transition bg-red-500`}
          >
            <FaFilter />
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-20 py-8 flex">
        {/* Sidebar for Categories */}
        <aside
          className={`w-full md:w-1/4 shadow-lg rounded-lg p-6 mb-8 md:mb-0 md:mr-8 transition-all duration-300 ${
            isSidebarOpen ? "block" : "hidden md:block"
          } ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        >
          <h3 className={`text-xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
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
                  className={`w-full text-left cursor-pointer px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-red-500 text-white shadow-md"
                      : darkMode
                        ? "bg-gray-700 text-gray-300 hover:bg-red-600 hover:text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600"
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
              <ProductCard key={product._id} product={product} darkMode={darkMode} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <FaSearch className="mx-auto text-6xl text-gray-400 mb-4" />
              <p className="text-xl">
                No products found matching your criteria.
              </p>
              <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
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
