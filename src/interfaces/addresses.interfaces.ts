import { z } from "zod";
import { addressSchema, createAdressSchema } from "../schemas/adresses.schemas";
import { Repository } from "typeorm";
import { Address } from "../entities/adresses.entity";

export type AddressCreate = z.infer<typeof createAdressSchema>;
export type AddressReturn = z.infer<typeof addressSchema>;
export type AddressRepo = Repository<Address>;
