import { NextFunction, Request, Response } from "express";
import { addressRepo } from "../repositories";
import AppError from "../errors/App.error";

export const addressExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { street, zipCode, city, state, number } = req.body.address;

    const address = await addressRepo.findOneBy({
        street,
        zipCode,
        city,
        state,
        number,
    });

    if (address) {
        throw new AppError("Address already exists", 409);
    }

    return next();
};
