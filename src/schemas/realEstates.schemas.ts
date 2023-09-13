import { z } from "zod";
import { addressSchema, createAdressSchema } from "./adresses.schemas";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    value: z.string().or(z.number().positive().default(0)),
    size: z.number().positive(),
    address: addressSchema,
    categoryId: z.number().int().positive(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const realEstateCreateSchema = z.object({
    value: z.string().or(z.number().positive().default(0)),
    size: z.number().int().positive(),
    address: createAdressSchema,
    categoryId: z.number().int().positive(),
});

export const realEstateReadSchema = realEstateSchema.array();
