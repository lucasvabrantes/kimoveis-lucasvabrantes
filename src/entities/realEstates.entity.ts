import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Category } from "./categories.entity";
import { Address } from "./adresses.entity";
import { Schedule } from "./schedules.entity";

@Entity("realEstates")
export class RealEstate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: false, type: "boolean" })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string;

    @Column({ type: "integer" })
    size: number;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @ManyToOne(() => Category, (c) => c.realEstate)
    category: Category;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @OneToMany(() => Schedule, (sc) => sc.realEstate)
    schedules: Array<Schedule>;
}
