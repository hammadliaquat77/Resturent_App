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
import { FaSearch, FaFilter, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Added pagination icons

import ProductCard from "../../components/ProductCard";

function Shop() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.menu); // all items
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Added search functionality
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar toggle
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const itemsPerPage = 8; // Show 8 items per page

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
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [selectedCategory, items, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate page numbers to display (show up to 5 pages around current)
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let end = Math.min(totalPages, start + maxPagesToShow - 1);

    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className={`min-h-screen w-full absolute mt-16 md:mt-16 transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'
    }`}>
      {/* Header Section with Enhanced UI */}
      <header className={`shadow-xl py-8 px-4 md:px-20 transition-all duration-300 rounded-b-2xl ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className={`md:text-5xl font-extrabold tracking-wide ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Discover Our Menu
          </h1>
          {/* Search Bar with Enhanced Styling */}
          <div className="relative w-full max-w-md">
            <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Search delicious items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 border-2 rounded-full focus:outline-none focus:ring-4 focus:ring-red-500 transition-all duration-300 shadow-lg ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
          {/* Mobile Sidebar Toggle with Animation */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`md:hidden p-3 text-white rounded-full hover:bg-red-600 transition-all duration-300 bg-red-500 shadow-lg hover:shadow-xl transform hover:scale-105`}
          >
            <FaFilter />
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-20 py-10 flex">
        {/* Sidebar for Categories with Enhanced Styling */}
        <aside
          className={`w-full md:w-1/4 shadow-2xl rounded-2xl p-8 mb-8 md:mb-0 md:mr-10 transition-all duration-300 ${
            isSidebarOpen ? "block" : "hidden md:block"
          } ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Explore Categories
          </h3>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsSidebarOpen(false); // Close sidebar on mobile after selection
                  }}
                  className={`w-full text-left cursor-pointer px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 ${
                    selectedCategory === cat
                      ? "bg-red-500 text-white shadow-xl"
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
          {/* Products Grid with Enhanced Spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedItems.map((product) => (
              <div key={product._id} className="transform hover:scale-105 transition-transform duration-300">
                <ProductCard product={product} darkMode={darkMode} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : darkMode
                      ? 'text-white hover:bg-red-600 bg-gray-700'
                      : 'text-gray-700 hover:bg-red-100 bg-gray-100'
                }`}
              >
                <FaChevronLeft />
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === page
                      ? "bg-red-500 text-white shadow-lg"
                      : darkMode
                        ? "text-gray-300 hover:bg-red-600 bg-gray-700"
                        : "text-gray-700 hover:bg-red-100 bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : darkMode
                      ? 'text-white hover:bg-red-600 bg-gray-700'
                      : 'text-gray-700 hover:bg-red-100 bg-gray-100'
                }`}
              >
                <FaChevronRight />
              </button>
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className={`text-center py-20 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <FaSearch className="mx-auto text-7xl text-gray-400 mb-6 animate-pulse" />
              <p className="text-2xl font-semibold">
                No products found matching your criteria.
              </p>
              <p className={`mt-4 text-lg ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
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
