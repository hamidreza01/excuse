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
const userData_1 = __importDefault(require("../Models/userData"));
const config_1 = __importDefault(require("../config"));
exports.default = {
    login: (admins) => {
        return (req, res) => {
            var _a, _b;
            if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.username) !== config_1.default.ADMIN_USER ||
                ((_b = req.body) === null || _b === void 0 ? void 0 : _b.password) !== config_1.default.ADMIN_PASS) {
                return res.status(403).send("ای شیطون");
            }
            admins.push(req.ip);
            res.redirect("/admin/panel");
        };
    },
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield userData_1.default.deleteOne({ _id: req.params.id });
        res.redirect("/admin/panel");
    }),
    add: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield userData_1.default.updateOne({ _id: req.params.id }, { allow: true });
        res.redirect("/admin/panel");
    }),
};
