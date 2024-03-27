import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// "https://l2b2-assignment-6-winter-clothes-server.vercel.app/"
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2b2-assignment-6-winter-clothes-server.vercel.app/",
    credentials: "include",
  }),
  tagTypes: ["user", "winterClothes", "community", "volunteers"],
  endpoints: () => ({}),
});
