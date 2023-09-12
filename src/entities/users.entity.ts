import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
} from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @Column({ default: false })
    admin: boolean;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "date" })
    createdAt: Date;

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date;

    @DeleteDateColumn({ type: "date" })
    deletedAt: Date;
}
