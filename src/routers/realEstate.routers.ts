import { Router } from "express";
import tokenExists from "../middlewares/tokenExists.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { realEstateCreateSchema } from "../schemas/realEstates.schemas";
import { addressExists } from "../middlewares/addressExists.middleware";
import realEstateControllers from "../controllers/realEstate.controllers";

export const realEstateRouter: Router = Router();
realEstateRouter.post(
    "",
    tokenExists,
    isAdmin,
    validateBody(realEstateCreateSchema),
    addressExists,
    realEstateControllers.create
);
realEstateRouter.get("", realEstateControllers.read);
