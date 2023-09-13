import { Router } from "express";
import tokenExists from "../middlewares/tokenExists.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { scheduleCreateSchema } from "../schemas/schedules.schemas";
import { verifySchedule } from "../middlewares/verifySchedule.middleware";
import schedulesControllers from "../controllers/schedules.controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";

export const schedulesRouter: Router = Router();
schedulesRouter.post(
    "",
    tokenExists,
    validateBody(scheduleCreateSchema),
    verifySchedule,
    schedulesControllers.create
);
schedulesRouter.get(
    "/realEstate/:id",
    tokenExists,
    isAdmin,
    schedulesControllers.retrieve
);
