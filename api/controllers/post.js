// controllers/post.js
import { db } from "../db.js";

// Function to get all posts
export const getPosts = (req, res) => {
  const q = "SELECT * FROM posts";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

// Function to get a single post by id
export const getPost = (req, res) => {
  const q = `SELECT 
    p.id, 
    p.title, 
    p.desc, 
    p.img, 
    p.date, 
    p.uid, 
    p.cat, 
    u.username
    FROM 
        posts p
    JOIN 
        users u
    ON 
        p.uid = u.id
    WHERE 
        p.id = ?;
`;
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Post not found!");
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const user = JSON.parse(req.headers.user);
  const q =
    "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    req?.body?.title,
    req?.body?.desc,
    req?.body?.img,
    req?.body?.cat,
    req?.body?.date,
    user?.id,
  ];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error("Error inserting post:", err);
      return res.status(500).json({ error: "Error inserting post" });
    }
    return res.status(200).json("Post has been created.");
  });
};

// Function to delete a post by id
export const deletePost = (req, res) => {
  const q = "DELETE FROM posts WHERE id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Post has been deleted.");
  });
};

// Function to update a post by id
export const updatePost = (req, res) => {
  console.log(req.body);
  const q =
    "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=?, `date`=? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.img,
    req.body.cat,
    req.body.date,
  ];

  db.query(q, [...values, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Post has been updated.");
  });
};
