import { Request } from "express";
import { Response } from "express";
import userData from "../Models/userData";
import { validationResult } from "express-validator";
export default {
  sendData: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let data = new userData({
      name: req.body.name,
      text: req.body.text,
      ip: req.ip,
    });
    await data.save();
    res
      .status(200)
      .send(
        "ممنون از شما، به زودی به لیست اضافه میگردد، فقط همکار عزیز شرمنده ناموسا حال نداشتم صفحه تشکر بسازم، میدونم که خودت بهتر از هرکسی میدونی چقد سخته"
      );
  },
};
