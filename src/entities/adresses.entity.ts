import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstates.entity";
import { number } from "zod";

@Entity("addresses")
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 45 })
    street: string;

    @Column({ type: "varchar", length: 8 })
    zipCode: string;

    @Column({ type: "int" })
    number: number;

    @Column({ type: "varchar", length: 20 })
    city: string;

    @Column({ type: "varchar", length: 2 })
    state: string;

    @OneToOne(() => RealEstate, (realEstate) => realEstate.address)
    realEstate: RealEstate;
}
