import { Router } from "express";
import tokenExists from "../middlewares/tokenExists.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { categoryExists } from "../middlewares/categoryExists.middleware";
import categoryControllers from "../controllers/category.controllers";

export const categoryRouter: Router = Router();
categoryRouter.post(
    "",
    tokenExists,
    isAdmin,
    categoryExists,
    categoryControllers.create
);
categoryRouter.get("", categoryControllers.read);
categoryRouter.get("/:id/realEstate", categoryControllers.retrieve);
