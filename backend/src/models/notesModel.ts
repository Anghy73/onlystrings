import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('notes')
class Notes {
  @PrimaryGeneratedColumn()
  id: number
}