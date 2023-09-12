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

@Entity("real_estates")
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
    createdAt: Date;

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date;

    @ManyToOne(() => Category)
    category: Category;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[];
}
