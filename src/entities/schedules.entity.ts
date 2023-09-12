import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";
import { RealEstate } from "./realEstates.entity";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    hour: string;

    @ManyToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToOne(() => RealEstate)
    @JoinColumn()
    realEstate: RealEstate;
}
