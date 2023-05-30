import { connect } from "mongoose";
import express from "express";
import cors from "cors";
import journeyRouter from "./routes/journeys.js";
import stationRouter from "./routes/stations.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const port = process.env.PORT;

connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use("/stations", stationRouter);
app.use("/journeys", journeyRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
