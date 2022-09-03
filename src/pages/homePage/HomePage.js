import { React, useState } from "react";
import Nav from "../../components/Nav";
import PostCard from "../../components/post/PostCard";
import DrawerGroup from "../../components/drawerGroup/DrawerGroup";

import classes from "./HomePage.module.css";

const Homepage = (props) => {
  //SAMPLE OBJ MODEL
  const obj = {
    img: "https://media.makeameme.org/created/shitty-memes-shitty-z83h9t.jpg",
    title: "Post Title",
    date: "02-05-2000",
    like: true,
    community: "metal",
  };

  const obj1 = {
    text: "The substring() method returns the part of the string between the start and end indexes, or to the end of the string.The substring() method returns the part of the string between the start and end indexes, or to the end of the string.The substring() method returns the part of the string between the start and end indexes, or to the end of the string.The substring() method returns the part of the string between the start and end indexes, or to the end of the string.The substring() method returns the part of the string between the start and end indexes, or to the end of the string.The substring() method returns the part of the string between the start and end indexes, or to the end of the string.The substring() method returns the part of the string between the start and end indexes, or to the end of the string.The substring() method returns the part of the string between the start and end indexes, or to the end of the string.The substring() method returns the part of the string between the start and end indexes, or to the end of the string.The substring() method returns the part of the string between the start and end indexes, or to the end of the string.",
    title: "Post Title2",
    date: "02-05-2000",
    like: true,
    community: "text",
  };

  const [posts, setPosts] = useState([obj1, obj, obj1, obj, obj1]);

  return (
    <div className={classes.home_container}>
      <div className={classes.nav_container}>
        <Nav />
      </div>
      <div className={classes.posts_container}>
        {posts.map((post) => (
          <PostCard
            type="small_post"
            key={post.id}
            id={post.id}
            text={post?.text}
            img={post?.img}
            title={post.title}
            date={post.date}
            like={post.like}
            community={post.community}
          />
        ))}
      </div>
      <div className={classes.side_container}>
        {/* list should be retrieved from db */}
        <DrawerGroup
          cat="Recommended"
          list={["memes", "hardware", "software", "education", "salaries"]}
        />
        <DrawerGroup
          cat="SubbedTo"
          list={["SubbedTo1", "SubbedTo2", "SubbedTo3"]}
        />
        <DrawerGroup
          cat="Popular "
          list={["SubbedTo1", "SubbedTo2", "SubbedTo3"]}
        />
      </div>
    </div>
  );
};

export default Homepage;
