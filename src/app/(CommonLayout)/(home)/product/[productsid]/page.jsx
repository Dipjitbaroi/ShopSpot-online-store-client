"use client";
import ProductDetails from "@/components/pages/@ProductsDetails/page";
import { useGetProductByIdQuery } from "@/redux/api/productApi";
import { useParams } from "next/navigation";
import React from "react";

const ProductsDetails = () => {
  // const params = useParams();
  // console.log("params:", params);

  // const { productsid } = params;
  // console.log("productsid:", productsid);

  // const {
  //   data: productData,
  //   isLoading,
  //   error,
  // } = useGetProductByIdQuery(productsid, { skip: !productsid });

  // console.log("productData", productData);

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error fetching product details</p>;
  // if (!productData) return <p>No product found</p>;

  return (
    <div className="max-w-7xl mx-auto ">
      <ProductDetails />

      <div className="mt-20">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-8 bg-red-500"></div>
          <h1 className="text-2xl font-bold text-red-600">Relatad Products</h1>
        </div>
        <div>
          <h1 className="uppercase animate-pulse text-xl font-bold">
            Seller apatoto gorib tk poisa nai product kinle show korbe
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
