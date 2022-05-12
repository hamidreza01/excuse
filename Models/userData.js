"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    ip: { required: true, type: String },
    name: { required: true, type: String },
    text: { required: true, type: String },
    allow: { required: false, type: Boolean, default: false },
});
exports.default = mongoose_1.default.model("userData", schema, "userData");
