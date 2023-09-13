import { Request, Response } from "express";
import { User } from "../entities/users.entity";
import userServices from "../services/user.services";
import { UserRead, UserReturn } from "../interfaces/user.interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await userServices.create(req.body);
    return res.status(201).json(user);
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
    const users: UserRead = await userServices.readAll();
    return res.status(200).json(users);
};

const partialUpdate = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { foundEntity } = res.locals;
    const user: UserReturn = await userServices.partialUpdate(
        foundEntity,
        req.body
    );

    return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await userServices.destroy(res.locals.foundEntity);
    return res.status(204).send();
};

export default { create, readAll, partialUpdate, destroy };
