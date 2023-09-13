import { Request, Response } from "express";
import {
    CategoryCreate,
    CategoryRead,
} from "../interfaces/categories.interface";
import categoryServices from "../services/category.services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const category: CategoryCreate = await categoryServices.create(req.body);
    return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const categories: CategoryRead = await categoryServices.read();
    return res.status(200).json(categories);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const categoryFound: any = await categoryServices.retrieve(req.params.id);
    return res.status(200).json(categoryFound);
};
export default { create, read, retrieve };
