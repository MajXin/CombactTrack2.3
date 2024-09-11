import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
import ConnectDb from "./config/database.js"
import candidaterouter from "./routes/candidate.routes.js";
dotenv.config();
const app = express();
ConnectDb();
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use("/api/v1/candidate", candidaterouter);
export default app;