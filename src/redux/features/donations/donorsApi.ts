import { baseApi } from "@/redux/api/baseApi";

export const donorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonors: builder.query({
      query: () => ({
        url: "/leaderboard",
        method: "GET",
      }),
    }),
    // addDonor: builder.mutation({
    //   query: (data) => ({
    //     url: "/donors",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});
export const { useGetDonorsQuery } = donorsApi;
