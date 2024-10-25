import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://winterclothesdistserver.vercel.app/",
    credentials: "include",
  }),
  tagTypes: ["user", "winterClothes", "category", "community", "volunteers"],
  endpoints: () => ({}),
});
