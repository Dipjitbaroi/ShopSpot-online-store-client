"use client";
import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "@/redux/api/productApi";
import React from "react";

const ProductsPage = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  // console.log(products);
  return (
    <div>
      <h1> product pages {products.length} </h1>
    </div>
  );
};

export default ProductsPage;
