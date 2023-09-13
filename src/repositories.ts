import { AppDataSource } from "./data-source";
import { Address } from "./entities/adresses.entity";
import { Category } from "./entities/categories.entity";
import { RealEstate } from "./entities/realEstates.entity";
import { Schedule } from "./entities/schedules.entity";
import { User } from "./entities/users.entity";
import { AddressRepo } from "./interfaces/addresses.interfaces";
import { CategoryRepo } from "./interfaces/categories.interface";
import { RealEstateRepo } from "./interfaces/realEstates.interfaces";
import { ScheduleRepo } from "./interfaces/schedules.intefaces";
import { UserRepo } from "./interfaces/user.interfaces";

export const userRepo: UserRepo = AppDataSource.getRepository(User);
export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);
export const realEstateRepo: RealEstateRepo =
    AppDataSource.getRepository(RealEstate);
export const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address);
