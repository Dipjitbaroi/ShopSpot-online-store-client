"use client";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import React from "react";
import ProductsCard from "@/components/UI/ProductsCard/ProductsCard";

const AllProducts = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">Error loading products</p>
    );

  return (
    <div className="p-4 mt-16 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-8 bg-red-500"></div>
        <h1 className="text-2xl font-bold text-red-600">Flash Sales</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center">
        {products?.slice(0, 8).map((product, index) => (
          <div key={index} className="flex justify-center">
            <ProductsCard product={product} />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-6">
        <button className="bg-red-500 text-white rounded-md px-6 py-2 hover:bg-red-600">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
