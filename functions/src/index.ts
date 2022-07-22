import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import routes from "./routes/information";
import CovidFinder from "./routes/covidFinder";
import userRouter from "./routes/userRouter";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);
app.use("/", CovidFinder);
app.use("/users", userRouter);

export const api = functions.https.onRequest(app);
