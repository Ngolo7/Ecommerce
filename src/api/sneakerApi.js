import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sneakerApi = createApi({
  reducerPath: "sneakerApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", "your-rapidapi-key-here");
      headers.set(
        "x-rapidapi-host",
        "the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSneakerById: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetSneakerByIdQuery } = sneakerApi;
