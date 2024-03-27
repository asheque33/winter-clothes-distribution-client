import {
  useGetCommunityCommentQuery,
  usePostCommunityCommentMutation,
} from "@/redux/features/community/communityApi";
import { TCommunityComment } from "@/types";
import { Button, Divider, Input, Layout } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useState } from "react";
const { Content } = Layout;
const { TextArea } = Input;
const CommunityGratitudeWall = () => {
  const { data, isFetching } = useGetCommunityCommentQuery(undefined);
  const comments = data?.data;
  console.log(comments);
  const [commentText, setCommentText] = useState("");
  const [addComment] = usePostCommunityCommentMutation();
  const handleCommentSubmit = () => {
    console.log("Comment Submitted");
    addComment({ comment: commentText });
    setCommentText("");
  };
  return (
    <div>
      <h2 className="font-bold text-5xl text-purple-500 mt-8 mb-4 text-center ">
        Community Gratitude Wall
      </h2>
      <Divider className="border-b-2 border-purple-400" />
      <Content style={{ padding: "24px" }}>
        <h1 className="font-bold">Comments</h1>
        <TextArea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Express your gratitude..."
          autoSize={{ minRows: 3, maxRows: 6 }}
          style={{ marginBottom: "16px", width: "50%" }}
          allowClear
        />
        <br />
        <Button
          className="bg-purple-400 ms-[45%]"
          onClick={handleCommentSubmit}
          loading={isFetching}
        >
          Post
        </Button>
        {comments?.map((item: TCommunityComment, index: string) => (
          <Paragraph
            key={index}
            style={{ maxWidth: 440, marginTop: 24, backgroundColor: "#F0F2F5" }}
          >
            <pre style={{ border: "none", borderRadius: "30px" }}>
              <h6 className="font-semibold">
                {item.name ? item.name : "User"}
              </h6>
              <p>{item.comment}</p>
            </pre>
          </Paragraph>
        ))}
      </Content>
    </div>
  );
};

export default CommunityGratitudeWall;

/* 
import {
  useGetCommunityCommentQuery,
  usePostCommunityCommentMutation,
} from "@/redux/features/community/communityApi";
import { TCommunityComment } from "@/types";
// import { useAppDispatch } from "@/redux/hooks";
import { Button, Input, Layout, List } from "antd";
import { useState } from "react";

const { Content } = Layout;
const { TextArea } = Input;
const CommunityGratitudeWall = () => {
  //   const dispatch = useAppDispatch();
  const {
    data: comments,
    isLoading,
    isError,
  } = useGetCommunityCommentQuery(undefined);
  const data = comments?.data;
  if (isLoading) return <p>loading</p>;
  console.log(data);
  const [commentText, setCommentText] = useState("");
  //   const [addComment, { isLoading: isAddingComment }] =
  // usePostCommunityCommentMutation();

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      //   addComment(commentText);
      setCommentText("");
    }
  };

  return (
    <Content style={{ padding: "24px" }}>
      <h1>Community Gratitude Wall</h1>
      <TextArea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Express your gratitude..."
        autoSize={{ minRows: 3, maxRows: 6 }}
        style={{ marginBottom: "16px" }}
      />
      <Button
        type="primary"
        onClick={handleCommentSubmit}
        loading={isAddingComment}
      >
        Post
      </Button>
      {isError && <div>Error fetching comments...</div>}
      {isLoading ? (
        <div>Loading comments...</div>
      ) : (
        <List
          dataSource={data}
          renderItem={(comment) => (
            <List.Item>
              <div>{comment.commentText}</div>
            </List.Item>
          )}
        />
      )}
    </Content>
  );
};

export default CommunityGratitudeWall;

*/
