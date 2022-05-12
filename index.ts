import express from "express";
import helmet from "helmet";
const xss = require("xss-clean");
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";
import config from "./config";
import userPage from "./Routers/users";
import adminPage from "./Routers/admin";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(config.DATA_BASE + "data")
  .then(() => {
    console.log(`connected to ${config.DATA_BASE}`);
  })
  .catch(() => {
    console.log(`cant connected to ${config.DATA_BASE}`);
  });

app.use(mongoSanitize(), helmet(), xss(), hpp());

app.use("/admin", adminPage);
app.use("/", userPage);

app.use("/", express.static("Public"));

app.listen(config.PORT, () => {
  console.log(`app run in ${config.PORT}`);
});
