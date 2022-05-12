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
const sendController_1 = __importDefault(require("../Controllers/sendController"));
const sendValidation_1 = __importDefault(require("../validation/sendValidation"));
const userData_1 = __importDefault(require("../Models/userData"));
const random_1 = __importDefault(require("../Addon/random"));
const app = express_1.default.Router();
app.use((req, res, next) => {
    res.set("Content-Security-Policy", " default-src *; style-src 'self' 'unsafe-inline' *; font-src 'self' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' *");
    next();
});
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let msgs = yield userData_1.default.find({ allow: true });
    res.render("../Views/index.ejs", { msg: msgs[(0, random_1.default)(0, msgs.length - 1)] });
}));
app.get("/send", (req, res) => {
    res.render("../Views/send.ejs");
});
app.use(express_1.default.urlencoded({ extended: true }));
app.post("/send", sendValidation_1.default, sendController_1.default.sendData);
exports.default = app;
