import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from "./user.entitiy";

@Entity()
export class userBadge{
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  badgeId: number;

  @ManyToOne(()=>User, (user)=>user.id)
  user: User;
}