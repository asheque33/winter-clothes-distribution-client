import Container from "@/components/layouts/Shared/Container";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import {
  useGetCommunityCommentQuery,
  usePostCommunityCommentMutation,
} from "@/redux/features/community/communityApi";
import { TCommunityComment } from "@/types";
import { Button, Input, Layout, Typography } from "antd";
import { useContext, useState } from "react";
const { Content } = Layout;
const { TextArea } = Input;
const { Title, Text, Paragraph } = Typography;
const CommunityGratitudeWall = () => {
  const { theme } = useContext(ThemeContext);
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
    <Container>
      <Typography className="text-center">
        <Title style={{ marginBottom: "0" }} level={2}>
          <span className="text-[#FF4C4E]">Community</span> Wall
        </Title>
        <Paragraph style={{ marginTop: "0" }}>
          <Text italic className="text-lg text-slate-400">
            Warming Hearts This Winter – Interested To Contribute With Us?
          </Text>
        </Paragraph>
      </Typography>
      {/* <Divider className="border-b-2 border-[#ff4c4e]" /> */}
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
          style={{
            backgroundColor: theme === "light" ? "#333" : "#ff4c4e",
            color: theme === "light" ? "#fff" : "#fff",
          }}
          color="default"
          variant="solid"
          className=" ms-[45%]"
          onClick={handleCommentSubmit}
          loading={isFetching}
        >
          Post
        </Button>
        {comments?.map((item: TCommunityComment, index: string) => (
          <Paragraph
            key={index}
            style={{
              maxWidth: 440,
              marginTop: 24,
              // backgroundColor: theme === "light" ? "#F0F2F5" : "#ff4c4e",
            }}
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
    </Container>
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
