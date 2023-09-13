import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleRepo } from "../repositories";
import AppError from "../errors/App.error";

export const verifySchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userId: number = Number(res.locals.decoded.sub);

    const scheduleHourExists: Schedule | null = await scheduleRepo
        .createQueryBuilder("schedule")
        .where("schedule.date = :date", { date: req.body.date })
        .andWhere("schedule.hour = :hour", { hour: req.body.hour })
        .andWhere("schedule.realEstate = :realEstateId", {
            realEstateId: req.body.realEstateId,
        })
        .getOne();

    if (scheduleHourExists)
        throw new AppError(
            "Schedule to this real estate at this date and time already exists",
            409
        );

    const schedulesOfUser: Schedule | null = await scheduleRepo
        .createQueryBuilder("schedule")
        .where("schedule.date = :date", { date: req.body.date })
        .andWhere("schedule.hour = :hour", { hour: req.body.hour })
        .andWhere("schedule.user = :id", { id: userId })
        .getOne();

    if (schedulesOfUser)
        throw new AppError(
            "User schedule to this real estate at this date and time already exists",
            409
        );

    const allowedTime: number = Number(req.body.hour.split(":")[0]);
    if (allowedTime < 8 || allowedTime > 18)
        throw new AppError(
            "Invalid hour, available times are 8AM to 18PM",
            400
        );

    const date: number = new Date(req.body.date).getDay();
    if (date < 1 || date > 5)
        throw new AppError("Invalid date, work days are monday to friday", 400);

    return next();
};
