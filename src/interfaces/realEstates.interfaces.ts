import { z } from "zod";
import {
    realEstateCreateSchema,
    realEstateSchema,
} from "../schemas/realEstates.schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities/realEstates.entity";

export type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
export type RealEstateReturn = z.infer<typeof realEstateSchema>;
export type RealEstateRepo = Repository<RealEstate>;
