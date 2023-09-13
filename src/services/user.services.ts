import { User } from "../entities/users.entity";
import {
    UserCreate,
    UserRead,
    UserReturn,
    UserUpdate,
} from "../interfaces/user.interfaces";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas/users.schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
    const user: User = userRepo.create(payload);
    await userRepo.save(user);
    return userReturnSchema.parse(user);
};

const readAll = async (): Promise<UserRead> => {
    return userReadSchema.parse(await userRepo.find());
};

export const partialUpdate = async (
    user: User,
    payload: UserUpdate
): Promise<UserReturn> => {
    const updatedUser: User = await userRepo.save({ ...user, ...payload });
    return userReturnSchema.parse(updatedUser);
};

const destroy = async (user: User): Promise<void> => {
    await userRepo.softRemove(user);
};

export default { create, readAll, partialUpdate, destroy };
