import { NextFunction, Request, Response } from "express";
import { Category } from "../entities/index";
import AppError from "../errors/App.error";
import { categoryRepo } from "../repositories";

export const categoryExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { name } = req.body;

    if (!name) return next();

    const foundCategory: Category | null = await categoryRepo.findOneBy({
        name,
    });

    if (foundCategory) throw new AppError("Category already exists", 409);

    return next();
};
