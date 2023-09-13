import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { sessionSchema } from "../schemas/session.schema";
import sessionControllers from "../controllers/session.controllers";

export const sessionRouter: Router = Router();
sessionRouter.post("", validateBody(sessionSchema), sessionControllers.create);
