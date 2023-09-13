import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import { User } from "../entities/users.entity";
import AppError from "../errors/App.error";

export const uniqueEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const email: string = req.body.email;
    if (!email) return next();

    const foundEntity: User | null = await userRepo.findOneBy({ email });
    if (foundEntity) throw new AppError("Email already exists", 409);

    return next();
};
