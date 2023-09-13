import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/App.error";

const tokenExists = (req: Request, res: Response, next: NextFunction): void => {
    const authorization: string | undefined = req.get("authorization");
    if (!authorization) throw new AppError("Missing bearer token", 401);

    const token: string = authorization.split(" ")[1];
    const decoded = verify(token, process.env.SECRET_KEY!);

    res.locals = { ...res.locals, decoded };

    return next();
};

export default tokenExists;
