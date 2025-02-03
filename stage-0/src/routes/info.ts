import { Request, Response, Router } from "express";
const infoRouter = Router();

infoRouter.get("/", (_req: Request, res: Response) => {
  const info = {
    email: "mkdirprince@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/mkdirprince/QuickInfoAPi",
  };

  res.json(info);
});

export default infoRouter;
