import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./usersModel";

@Entity('notes')
class Notes {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string
  
  @Column('text')
  content: string

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({ name: "user_id" })
  user: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedeAT: Date
}

export default Notes