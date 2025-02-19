"use client";
import React from "react";
import Image from "next/image";

import { Button } from "@/components/UI/button";
import { productData } from "@/lib/data";

export default function ProductDetails() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {productData.map((product) => (
        <div key={product.id} className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex flex-col space-y-4">
              {product.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="rounded cursor-pointer border hover:border-black"
                />
              ))}
            </div>

            <div className="flex-1">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={500}
                height={500}
                className="rounded w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <div className="flex items-center space-x-3">
              <p className="text-xl font-semibold">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-green-600">
                In Stock ({product.inStock})
              </p>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-center space-x-2">
              <p className="font-semibold">Reviews:</p>
              <p>{product.reviews} Reviews</p>
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Colors */}
              <div>
                <p className="font-semibold mb-2">Colors:</p>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="cursor-pointer rounded bg-gray-100 px-3 py-1 hover:bg-gray-200">
                      {color}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Size:</p>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      className="cursor-pointer rounded bg-gray-100 px-3 py-1 hover:bg-gray-200">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <p className="font-semibold">Quantity:</p>
              <input
                type="number"
                min="1"
                max={product.inStock}
                defaultValue="1"
                className="w-16 rounded border px-2 py-1"
              />
            </div>

            <Button
              className="mt-4 bg-red-600 font-bold w-full md:w-auto"
              variant="default">
              Buy Now
            </Button>

            <div className="border-t pt-4">
              <p className="font-semibold">Free Delivery</p>
              <p className="text-sm text-gray-500">
                Get free delivery on orders over $50. Estimated 3-5 days.
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="font-semibold">Return Policy</p>
              <p className="text-sm text-gray-500">
                30-day return policy. Terms & conditions apply.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
