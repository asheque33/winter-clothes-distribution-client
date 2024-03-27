import { baseApi } from "@/redux/api/baseApi";

export const communityComment = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommunityComment: builder.query({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
      providesTags: ["community"],
    }),
    postCommunityComment: builder.mutation({
      query: (data) => ({
        url: "/comment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["community"],
    }),
  }),
});
export const { useGetCommunityCommentQuery, usePostCommunityCommentMutation } =
  communityComment;
