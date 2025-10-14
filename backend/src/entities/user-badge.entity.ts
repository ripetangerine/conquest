import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from "./user.entitiy";

@Entity()
export class userBadge{
  @PrimaryGeneratedColumn()
  userId: number;

  @Column() // 모델 구축 후 nullable 설정
  badgeId: number;

  @ManyToOne(()=>User, (user)=>user.id)
  user: User;
}