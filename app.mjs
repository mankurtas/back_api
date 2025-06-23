import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from "./routes/authRoutes.mjs";
import bookRoutes from "./routes/bookRoutes.mjs";

const app = express();
// Body parser
app.use(express.json());

//cors
cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


//cokie parser
app.use(cookieParser());


app.use("/api/v1/auth", authRoutes);


//books

app.use("/api/v1/books", bookRoutes);


//centralized errors handler
app.use((err, req, res, next) => {
  const errMessage = err.message || "Internal server Error";
  const statusCode = err.statusCode || 500;
  const errStatus = err.status || "error";

  res.status(statusCode).json({
    status: errStatus,
    message: errMessage,
  });
});

export default app;