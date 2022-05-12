import { body } from "express-validator";

export default [
  body("name", "مشکلی در نام ارسالی وجود دارد")
    .isLength({ min: 3, max: 30 }),
  body("text", "مشکلی در متن ارسالی وجود دارد")
    .isLength({ min: 15, max: 500 }),
];
