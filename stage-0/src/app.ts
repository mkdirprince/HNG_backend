import express from "express";
const app = express();
import cors from "cors";
import infoRouter from "./routes/info";
import middleware from "./utils/middleware";

app.use(cors());

app.use("/api/info", infoRouter);

app.use(middleware.unknownEndpoint);

export default app;
