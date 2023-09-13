import { z } from "zod";
import {
    categoryCreateSchema,
    categoryReadSchema,
    categorySchema,
} from "../schemas/categories.schemas";
import { Repository } from "typeorm";
import { Category } from "../entities/categories.entity";

export type CategoryCreate = z.infer<typeof categoryCreateSchema>;
export type CategoryRead = z.infer<typeof categoryReadSchema>;
export type CategoryRepo = Repository<Category>;
