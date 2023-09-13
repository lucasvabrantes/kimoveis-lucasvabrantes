import { User } from "../entities";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { sessionSchema } from "../schemas/session.schema";
import { SessionCreate, SessionReturn } from "../interfaces/session.interfaces";
import { userRepo } from "../repositories";
import AppError from "../errors/App.error";

const create = async (payload: SessionCreate): Promise<SessionReturn> => {
    const validate = sessionSchema.parse(payload);

    const { email } = validate;

    const user: User | null = await userRepo.findOneBy({ email: email });

    if (!user) {
        throw new AppError("Invalid credentials", 401);
    }

    if (user.deletedAt != null) {
        throw new AppError("Invalid credentials", 401);
    }

    const samePassword: boolean = await compare(
        payload.password,
        user.password
    );

    if (!samePassword) {
        throw new AppError("Invalid credentials", 401);
    }

    const token: string = sign(
        { email: user.email, name: user.name, admin: user.admin },
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    );

    return { token };
};

export default { create };
