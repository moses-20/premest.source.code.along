import { useState } from "react";
import { useEffect } from "react";
import withLayout from "./withLayout";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("/posts.json");
      setPosts(await res.json());
    })();
  }, []);

  const handleClick = (id) => {};
  return (
    <div>
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ display: "flex", margin: "20px 0" }}>
            <img
              src={`/images/${post.image}`}
              alt=""
              height={200}
              width={200}
            />
            <div
              style={{
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.extract}</p>

              <button
                onClick={() => handleClick(post.id)}
                style={{ alignSelf: "end", padding: "5px 10px" }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withLayout(Blog);
