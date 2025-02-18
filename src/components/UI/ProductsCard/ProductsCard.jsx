import React from "react";
import { Heart, Eye } from "lucide-react";
import Link from "next/link";

const ProductsCard = ({ product }) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discount) / 100
  ).toFixed(2);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80 relative">
      {product.discount > 0 && (
        <div className="absolute top-5 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{product.discount}%
        </div>
      )}

      <div className="absolute top-5 right-3  ">
        <Heart className="w- h-5 p-[1px] bg-white rounded-full text-gray-600 cursor-pointer hover:text-red-500" />
        <Link href={`/product/${product.id}`}>
          <Eye className="w-5 h-5 p-[1px] mt-1  bg-white rounded-full  text-gray-600 cursor-pointer hover:text-blue-500" />
        </Link>
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Product Details */}
      <div className="mt-3 text-center">
        <h2 className="text-sm font-semibold">{product.name}</h2>
        <p className="text-gray-500 text-xs">{product.category}</p>
        <div className="flex justify-center items-center gap-2">
          <span className="text-red-500 font-semibold">${discountedPrice}</span>
          <span className="text-gray-400 line-through text-sm">
            ${product.price}
          </span>
        </div>

        <button className="w-full mt-2 bg-black text-white hover:bg-gray-800">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
