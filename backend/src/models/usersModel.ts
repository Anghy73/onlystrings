import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Notes from "./notesModel";

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
  
  @Column()
  email: string
  
  @Column()
  password: string
  
  @OneToMany(() => Notes, (note) => note.user)
  notes: Notes[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedeAT: Date
}

export default User