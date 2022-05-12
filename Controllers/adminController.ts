import { Request } from "express";
import { Response } from "express";
import userData from "../Models/userData";
import config from "../config";
export default {
  login: (admins: any[]) => {
    return (req: Request, res: Response) => {
      if (
        req.body?.username !== config.ADMIN_USER ||
        req.body?.password !== config.ADMIN_PASS
      ) {
        return res.status(403).send("ای شیطون");
      }
      admins.push(req.ip);
      res.redirect("/admin/panel");
    };
  },
  delete: async (req: Request, res: Response) => {
    await userData.deleteOne({ _id: req.params.id } as any);
    res.redirect("/admin/panel");
  },
  add: async (req: Request, res: Response) => {
    await userData.updateOne({ _id: req.params.id } as any, { allow: true });
    res.redirect("/admin/panel");
  },
};
