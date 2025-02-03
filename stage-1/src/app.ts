import express from "express";
const app = express();
import cors from "cors";
import numberRouter from "./routes/number";
import middleware from "./utils/middleware";

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/classify-number", numberRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
