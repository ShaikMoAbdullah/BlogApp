import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const secretKey =
  process.env.SESSION_SECRET || crypto.randomBytes(64).toString("hex");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.post("/api/upload", function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
