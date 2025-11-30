import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
    return (
        <>
      {/* <Link to={/single/${product._id}} className="block"> */}


  <div className="p-5">

    <Link to={`/single/${product._id}`}>

          <div className="relative">
                     <img
                       src={product.image}
                       alt={product.name}
                       loading="lazy"
                       className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity"
                     />
                  </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-900 hover:text-red-500 transition-colors">
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
    </>
  )
}

export default React.memo(ProductCard)