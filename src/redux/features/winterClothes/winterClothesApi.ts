import { baseApi } from "../../api/baseApi";

const winterClothesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWinterClothes: builder.query({
      query: () => ({
        url: "/winter-clothes",
        method: "GET",
      }),
      providesTags: ["winterClothes"],
    }),
    getSingleWinterCloth: builder.query({
      query: (_id) => {
        console.log("inside cloth api", _id);
        return {
          url: `/winter-clothes/${_id}`,
          method: "GET",
        };
      },
      providesTags: ["winterClothes"],
    }),
    createWinterCloth: builder.mutation({
      query: (data) => {
        console.log("inside create-cloth api", data);
        return {
          url: "/dashboard/create-winter-clothes",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["winterClothes"],
    }),
    updateWinterCloth: builder.mutation({
      query: ({ _id, data }) => {
        console.log("inside create-cloth api", _id);
        return {
          url: `/winter-clothes/${_id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["winterClothes"],
    }),
    deleteWinterCloth: builder.mutation({
      query: (_id) => {
        console.log("inside create-cloth api", _id);
        return {
          url: `/winter-clothes/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["winterClothes"],
    }),
  }),
});
export const {
  useGetWinterClothesQuery,
  useGetSingleWinterClothQuery,
  useCreateWinterClothMutation,
  useUpdateWinterClothMutation,
  useDeleteWinterClothMutation,
} = winterClothesApi;
