"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userData_1 = __importDefault(require("../Models/userData"));
const adminController_1 = __importDefault(require("../Controllers/adminController"));
const app = express_1.default.Router();
let admins = [];
app.get("/", (req, res) => {
    res.render("../Views/admin.ejs");
});
app.use(express_1.default.urlencoded({ extended: true }));
app.post("/", adminController_1.default.login(admins));
app.use((req, res, next) => {
    if (!admins.includes(req.ip)) {
        return res.redirect("/admin");
    }
    next();
});
app.post("/delete/:id", adminController_1.default.delete);
app.post("/add/:id", adminController_1.default.add);
app.use((req, res, next) => {
    res.set("Content-Security-Policy", " default-src *; style-src 'self' 'unsafe-inline' *; font-src 'self' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' *");
    next();
});
app.get("/panel", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield userData_1.default.find({ allow: false });
    res.render("../Views/panel.ejs", { users: users });
}));
exports.default = app;
