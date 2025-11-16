import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from "../../redux/slices/product.Slice";
import { Link } from "react-router-dom";

function Shop() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.menu);

  console.log("Items===>", items);
  

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <section className='py-16 px-4 md:px-20 bg-gray-50 min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12'>Our Menu</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {items.map((product) => (
            <div key={product._id} className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition'>
              
              <Link to={`/single/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-48 object-cover cursor-pointer'
                />
              </Link>

              <div className='p-6'>
                <Link to={`/single/${product._id}`}>
                  <h3 className='text-xl font-bold mb-2 cursor-pointer hover:text-red-500'>{product.name}</h3>
                </Link>
                <p className='text-gray-600 mb-2'>Rs. {product.price}</p>
                <p className={`font-semibold ${product.isAvailable ? "text-green-600" : "text-red-600"}`}>
                  {product.isAvailable ? "Available" : "Not Available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
