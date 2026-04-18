import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js"
import pinRouter from "./routes/pin.route.js"
import commentRouter from "./routes/comment.route.js"
import boardRouter from "./routes/board.route.js"
import connectDB from "./utils/connectDB.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(express.json())
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("CORS not allowed for this origin."), false);
  },
  credentials: true,
}));
app.use(cookieParser())
app.use(fileUpload())

app.get("/healthz", (req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/users", userRouter)
app.use("/pins", pinRouter)
app.use("/comments", commentRouter)
app.use("/boards", boardRouter)
app.use("/api/users", userRouter)
app.use("/api/pins", pinRouter)
app.use("/api/comments", commentRouter)
app.use("/api/boards", boardRouter)

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
    console.log(`server is running on port ${port}!`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
