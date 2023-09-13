import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstates.entity";

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45, unique: true })
    name: string;

    @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
    realEstate: Array<RealEstate>;
}
