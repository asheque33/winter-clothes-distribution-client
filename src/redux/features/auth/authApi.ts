import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/api/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation } = authApi;
