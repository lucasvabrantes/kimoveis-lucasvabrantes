import { z } from "zod";
import {
    scheduleCreateSchema,
    scheduleSchema,
} from "../schemas/schedules.schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities/schedules.entity";

export type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
export type ScheduleReturn = z.infer<typeof scheduleSchema>;
export type ScheduleRepo = Repository<Schedule>;
