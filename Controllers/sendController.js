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
const express_validator_1 = require("express-validator");
exports.default = {
    sendData: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let data = new userData_1.default({
            name: req.body.name,
            text: req.body.text,
            ip: req.ip,
        });
        yield data.save();
        res
            .status(200)
            .send("ممنون از شما، به زودی به لیست اضافه میگردد، فقط همکار عزیز شرمنده ناموسا حال نداشتم صفحه تشکر بسازم، میدونم که خودت بهتر از هرکسی میدونی چقد سخته");
    }),
};
