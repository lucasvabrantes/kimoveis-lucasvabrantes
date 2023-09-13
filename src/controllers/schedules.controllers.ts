import { Request, Response } from "express";
import schedulesServices from "../services/schedules.services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const userId: string = res.locals.decoded.sub;
    await schedulesServices.create(req.body, userId);
    return res.status(201).json({ message: "Schedule created" });
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const scheduleOfOneEstate = await schedulesServices.retrieve(
        Number(req.params.id)
    );
    return res.status(200).json(scheduleOfOneEstate);
};

export default { create, retrieve };
