import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// dotenv
dotenv.config();

//express
const app = express();

//middlewares
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

//import routes
import urlRoute from "./routes/urlRoute.js";

//using routes
app.use("/api/links", urlRoute);

export default app;
