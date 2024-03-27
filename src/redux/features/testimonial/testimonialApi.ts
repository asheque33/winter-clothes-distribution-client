import { baseApi } from "@/redux/api/baseApi";

export const donorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
    }),
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/dashboard/create-testimonial",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetTestimonialsQuery, useAddTestimonialMutation } = donorsApi;
