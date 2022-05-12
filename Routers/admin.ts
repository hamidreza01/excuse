import express from "express";
import userData from "../Models/userData";
import adminController from "../Controllers/adminController";
import random from "../Addon/random";

const app = express.Router();

let admins: any[] = [];

app.get("/", (req, res) => {
  res.render("../Views/admin.ejs");
});

app.use(express.urlencoded({ extended: true }));

app.post("/", adminController.login(admins));

app.use((req, res, next) => {
  if (!admins.includes(req.ip)) {
    return res.redirect("/admin");
  }
  next();
});

app.post("/delete/:id", adminController.delete);
app.post("/add/:id", adminController.add);

app.use((req, res, next) => {
  res.set(
    "Content-Security-Policy",
    " default-src *; style-src 'self' 'unsafe-inline' *; font-src 'self' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' *"
  );
  next();
});
app.get("/panel", async (req, res) => {
  let users = await userData.find({ allow: false });
  res.render("../Views/panel.ejs", { users: users });
});
export default app;
