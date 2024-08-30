import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sneakerAllApi = createApi({
  reducerPath: "sneakerApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "b64f77d14bmsh34a39fd762b8eecp1374bejsna81b730a1253"
      );
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
    searchSneakers: builder.query({
      query: (query) => `/search?query=${encodeURIComponent(query)}`,
    }),
  }),
});

export const { useGetSneakerByIdQuery, useSearchSneakersQuery } = sneakerAllApi;
