import React from "react";
import Comments from "../../components/comments/Comments";
import Nav from "../../components/Nav";
import PostCard from "../../components/post/PostCard";

import classes from "./PostPage.module.css";

function PostPage() {
  const com1 = {
    id: "id1",
    user: "user1",
    text: "Text1",
    comments: [
      {
        id: "id1.1",
        user: "user1.1",
        text: "Text1.1",
        comments: [
          {
            id: "id1.1.1",
            user: "user1.1.1",
            text: "Text1.1.1",
            comments: [],
          },
          {
            id: "id1.1.2",
            user: "user1.1.2",
            text: "Text1.1.2",
            comments: [],
          },
        ],
      },
      {
        id: "id1.2",
        user: "user1.2",
        text: "Text1.2",
        comments: [
          {
            id: "id1.2.1",
            user: "user1.2.2",
            text: "Text1.2.3",
            comments: [],
          },
        ],
      },
    ],
  };

  const com2 = {
    id: "id2",
    user: "user2",
    text: "Text2",
    comments: [
      { text: "Text2.1", comments: [{ text: "Text2.1.1", comments: [] }] },
    ],
  };
  const comments = [com1, com2];
  const blob =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
     when an unknown printer took a galley of type and scrambled it to make a type \
     specimen book. It has survived not only five centuries, but also the leap into \
     electronic typesetting, remaining essentially unchanged. It was popularised in \
     Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
     when an unknown printer took a galley of type and scrambled it to make a type \
     specimen book. It has survived not only five centuries, but also the leap into \
     electronic typesetting, remaining essentially unchanged. It was popularised in";
  return (
    <div>
      <Nav />
      <div className={classes.container}>
        <PostCard title="Some title" type="main_post" text={blob} />
        <br />
        <Comments coms={comments} />
      </div>
    </div>
  );
}

export default PostPage;
