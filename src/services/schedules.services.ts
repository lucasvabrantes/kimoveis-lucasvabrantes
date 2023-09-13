import { RealEstate, Schedule, User } from "../entities";
import AppError from "../errors/App.error";
import { ScheduleCreate } from "../interfaces/schedules.intefaces";
import { realEstateRepo, scheduleRepo, userRepo } from "../repositories";

const create = async (
    payload: ScheduleCreate,
    userId: string
): Promise<Schedule> => {
    const user: any = await userRepo.findOneBy({ id: Number(userId) });
    const realEstateExists = await realEstateRepo.findOneBy({
        id: Number(payload.realEstateId),
    });

    if (!realEstateExists) throw new AppError("RealEstate not found", 404);

    const newSchedule = scheduleRepo.create({
        ...payload,
        user,
        realEstate: realEstateExists,
    });

    await scheduleRepo.save(newSchedule);

    return newSchedule;
};

const retrieve = async (realEstateId: number) => {
    const realEstateFound: RealEstate | null = await realEstateRepo.findOne({
        where: {
            id: realEstateId,
        },
        relations: {
            address: true,
            category: true,
            schedules: {
                user: true,
            },
        },
    });

    if (!realEstateFound) throw new AppError("RealEstate not found", 404);

    return realEstateFound;
};

export default { create, retrieve };
