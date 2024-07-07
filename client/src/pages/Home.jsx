import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import NoData from "../components/NoData";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://blogapp-r2c7.onrender.com/api/posts${cat}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`../upload/${post.img}`} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p style={{ height: "14rem", overflow: "hidden" }}>
                  {getText(post.desc)}
                </p>

                <Link className="button" to={`/post/${post.id}`}>
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="border">
            <NoData />
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
