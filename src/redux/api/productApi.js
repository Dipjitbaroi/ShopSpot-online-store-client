import baseApi from "../baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/fakeData.json", // Load fake data correctly
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: (id) => `/fakeData.json`, // Load fake data (filtering happens in frontend)
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi;

export default productApi;
