import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["User", "Cart", "Follow", "Shop", "Order", "Products", "Category"],
  endpoints: () => ({}),
});

export default baseApi;
