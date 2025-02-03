import React from "react";
import Image from "next/image";

const ProductCard = ({product}) => {
  return (
    <div className=" bg-gray-100">
      <div className=" shadow-lg rounded-2xl overflow-hidden bg-white">
        <Image
          src={product.image}
          alt="Laptop Image"
          width={1024}
          height={682}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{product.productName}</h2>
          <p className="text-sm text-gray-600">Brand: {product.brand}</p>
        </div>
        <div className="p-4">
          <p className="text-lg font-semibold text-gray-800">Price: ${product.price}</p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;