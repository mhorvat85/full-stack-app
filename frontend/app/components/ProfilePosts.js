import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";
import Post from "./Post";

function ProfilePosts() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/posts`, { signal });
        setPosts(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("There was a problem.");
      }
    }
    fetchPosts();
    return () => {
      controller.abort();
    };
  }, [username]);

  if (isLoading) return <LoadingDotsIcon />;

  return (
    posts && (
      <div className="list-group">
        {posts.map((post) => {
          return <Post noAuthor={true} post={post} key={post._id} />;
        })}
      </div>
    )
  );
}

export default ProfilePosts;
