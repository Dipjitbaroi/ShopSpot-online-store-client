"use client";
import Image from "next/image";
import { useMemo } from "react";

function ExampleIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m2 4v-4h-1m-3 4H5a2 2 0 01-2-2V5a2 2 0
         012-2h14a2 2 0 012 2v7M7 20h5"
      />
    </svg>
  );
}

export default function OurStory() {
  // Fake data for the four stats below
  const statsData = useMemo(
    () => [
      {
        id: 1,
        number: "10.5k",
        label: "Sellers active in our site",
      },
      {
        id: 2,
        number: "33k",
        label: "Monthly Product Sale",
      },
      {
        id: 3,
        number: "45.5k",
        label: "Customers active in our site",
      },
      {
        id: 4,
        number: "25k",
        label: "Annual gross sale in our site",
      },
    ],
    []
  );

  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-8 mb-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4  justify-center">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
          </p>
          <p className="text-gray-600 mb-4">
            Having more than 1 Million products to offer, growing at a very fast
            pace. Offering a diverse assortment in categories ranging from
            consumer...
          </p>
        </div>

        {/* Right Column: Sample Image */}
        <div className="flex-1">
          <Image
            src="https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739707134/Image_pm11lq.jpg" // Replace with your own image
            alt="Our Story Image"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>

      {/* Bottom Section: Stats */}
      <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white hover:bg-red-500 rounded-md shadow flex flex-col  items-center
                       text-center group transition-colors ">
            <div className="bg-gray-400 flex items-center  justify-center rounded-full w-14 h-14">
              <div
                className=" w-12 h-12 rounded-full flex items-center  justify-center 
                         bg-gray-800 text-gray-100 group-hover:bg-white group-hover:text-gray-800
                         transition-colors">
                <ExampleIcon />
              </div>
            </div>
            <h3 className="text-2xl  font-bold mb-1 group-hover:text-gray-100">
              {item.number}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-100">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
