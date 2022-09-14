import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/feed/actions";
import { selectFeedPosts } from "../../store/feed/selectors";

function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {!posts.length ? (
        "Loading"
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              {moment(post.createdAt).format("DD-MM-YYYY")}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => dispatch(fetchPosts())}>Load More</button>
    </div>
  );
}

export default HomePage;
