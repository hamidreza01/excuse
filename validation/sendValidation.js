"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
exports.default = [
    (0, express_validator_1.body)("name", "مشکلی در نام ارسالی وجود دارد")
        .isLength({ min: 3, max: 30 }),
    (0, express_validator_1.body)("text", "مشکلی در متن ارسالی وجود دارد")
        .isLength({ min: 15, max: 500 }),
];
