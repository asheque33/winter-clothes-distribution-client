import { baseApi } from "@/redux/api/baseApi";

export const donorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteers: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
      providesTags: ["volunteers"],
    }),
    addVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["volunteers"],
    }),
  }),
});
export const { useGetVolunteersQuery, useAddVolunteerMutation } = donorsApi;
