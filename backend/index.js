import express from "express";
import router from "./routes/route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/api/", router);

app.listen(process.env.PORT, () => console.log(`Running on ${process.env.HOST}:${process.env.PORT}`));