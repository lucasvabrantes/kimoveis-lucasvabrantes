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

    @Column({ type: "date" })
    date: string;

    @Column({ type: "time" })
    hour: string;

    @ManyToOne(() => User, (u) => u.schedules)
    user: User;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate;
}
