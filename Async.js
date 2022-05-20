import { useEffect, useState } from "react";

const Async = () => {
  // initially there are no list items, but there are items in th second render
  const [posts, setPosts] = useState([]);

  //   Send the http to the dummy API to fetch a dummy post
  useEffect(() => {
    //   dont wanna test if fetch function succeeds, want to check if component works: replace fetch with dummy function
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        //   posts set as state here
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {/* render posts as a list */}
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
