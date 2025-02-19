import baseApi from "../baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/fakeData.json",
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: (id) => `/fakeData.json/${id}`,
    }),
    providesTags: ["Products"],
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi;

export default productApi;
