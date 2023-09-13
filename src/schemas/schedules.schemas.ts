import { z } from "zod";

export const scheduleSchema = z.object({
    id: z.number().positive().int(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive().int(),
    userId: z.number().positive(),
});

export const scheduleCreateSchema = scheduleSchema.omit({
    id: true,
    userId: true,
});
