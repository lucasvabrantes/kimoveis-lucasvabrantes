import "express-async-errors";
import "reflect-metadata";
import express, { Application, json } from "express";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { userRouter } from "./routers/user.routers";
import { categoryRouter } from "./routers/category.routers";
import { sessionRouter } from "./routers/session.routers";
import { realEstateRouter } from "./routers/realEstate.routers";
import { schedulesRouter } from "./routers/schedules.routers";

const app: Application = express();
app.use(json());
app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", schedulesRouter);
app.use(handleErrors);

export default app;
