import { Router } from "express";
import userControllers from "../controllers/user.controllers";
import { uniqueEmail } from "../middlewares/uniqueEmail.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema, userUpdateSchema } from "../schemas/users.schemas";
import tokenExists from "../middlewares/tokenExists.middleware";
import verifyUserPermission from "../middlewares/verifyUserPermission.middleware";
import { idExists } from "../middlewares/idExists.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";

export const userRouter: Router = Router();

userRouter.post(
    "",
    validateBody(userCreateSchema),
    uniqueEmail,
    userControllers.create
);
userRouter.get("", tokenExists, isAdmin, userControllers.readAll);

userRouter.use("/:id", idExists);

userRouter.patch(
    "/:id",
    validateBody(userUpdateSchema),
    tokenExists,
    verifyUserPermission,
    userControllers.partialUpdate
);
userRouter.delete("/:id", tokenExists, isAdmin, userControllers.destroy);
