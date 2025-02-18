"use client";
import AllPoducts from "@/components/home/@allproducts/page";
import Banner from "@/components/home/@banner/page";
import ContactForm from "@/components/home/@contactform/page";
import OurStory from "@/components/home/@OurStory/page";
import ServiceFeatures from "@/components/home/@ServiceFeatures/page";
import Caetegories from "@/components/home/categories/page";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import React from "react";

const Page = () => {
  return (
    <div>
      <Banner />

      <div>
        <AllPoducts />
      </div>
      <Caetegories />

      <div>
        <AllPoducts />
      </div>
      <div>
        <OurStory />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <ServiceFeatures />
      </div>
    </div>
  );
};

export default Page;
