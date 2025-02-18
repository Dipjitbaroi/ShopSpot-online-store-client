"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
// import "./banner.css"; // If you have additional CSS

const banners = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uC-sZKj3Pd53cLeHLxDv6LVF-tM2P7ObyVHE~eePoufrpFXMtCfx7aiaL-9LTl~dqnkI3UDG0JuZcfZHOojrYmN-r7wAvOBD2A3LyLNN4Xb4cLEhk6bEdo~Zwx~AAmKH8wErGRZ63rnJkScqlzh5oGt9aBGY10SA3WEYEAHxCYgTBriPiHLT0jC6iWhM7ObgKF8CGl~~MmQyZB4LKXujUpWYUgjSrI923N0oI-pTiF9IqHxG273E-85IxS6lTrij9GWyfOnk-UOLiUtYNH641HWoUiV7Aj6-2g7to04pMqNN9s6FqTZ7OTpAnkEn5fzefauir5ec52cBOFKnFFZQEQ__",
    title: "Summer Sale",
    description: "Up to 50% off on selected items",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: 2,
    image: "/banner2.jpg",
    title: "New Arrivals",
    description: "Discover the latest trends",
    buttonText: "Discover",
    buttonLink: "/new-arrivals",
  },
  // ...more banners
];

export default function Banner() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper max-w-6xl  mx-auto">
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          {/* 
            Fixed-size, absolutely positioned container 
            at (top=182px, left=135px, width=1187px, height=344px).
          */}
          <div className=" top-[182px] left-[135px] w-[496px]  h-[344px]">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40" />

            {/* Banner Content, aligned to the left */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 text-left">
              <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
              <p className="mb-4 text-sm max-w-md">{banner.description}</p>
              <a
                href={banner.buttonLink}
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
                {banner.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
