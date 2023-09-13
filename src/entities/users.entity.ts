import { getRounds, hashSync } from "bcryptjs";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    BeforeUpdate,
    OneToMany,
} from "typeorm";
import { Schedule } from "./schedules.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    name: string;

    @Column({ unique: true, length: 45 })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column({ default: false })
    admin: boolean;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @DeleteDateColumn({ type: "date" })
    deletedAt: string | null;

    @OneToMany(() => Schedule, (sc) => sc.user)
    schedules: Array<Schedule>;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hasRounds: number = getRounds(this.password);
        if (!hasRounds) {
            this.password = hashSync(this.password, 10);
        }
    }
}
