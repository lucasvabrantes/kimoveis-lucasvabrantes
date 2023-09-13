import { z } from "zod";
import {
    userCreateSchema,
    userReadSchema,
    userReturnSchema,
} from "../schemas/users.schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities/users.entity";

export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserRead = z.infer<typeof userReadSchema>;
export type UserReturn = z.infer<typeof userReturnSchema>;
export type UserUpdate = DeepPartial<User>;

export type UserRepo = Repository<User>;
