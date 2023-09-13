import { z } from "zod";

export const addressSchema = z.object({
    id: z.number().positive(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().int().positive(),
    city: z.string().max(20),
    state: z.string().max(2),
});

export const createAdressSchema = addressSchema.omit({ id: true });
