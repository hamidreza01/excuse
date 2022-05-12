import express from "express";
import sendPageCtrl from "../Controllers/sendController";
import sendPageValid from "../validation/sendValidation";
import userData from "../Models/userData";
import random from "../Addon/random";
const app = express.Router();

app.use((req, res, next) => {
  res.set(
    "Content-Security-Policy",
    " default-src *; style-src 'self' 'unsafe-inline' *; font-src 'self' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' *"
  );
  next();
});

app.get("/", async (req, res) => {
  let msgs = await userData.find({ allow: true });
  res.render("../Views/index.ejs", { msg: msgs[random(0, msgs.length - 1)]});
});

app.get("/send", (req, res) => {
  res.render("../Views/send.ejs");
});

app.use(express.urlencoded({ extended: true }));

app.post("/send", sendPageValid, sendPageCtrl.sendData);

export default app;
