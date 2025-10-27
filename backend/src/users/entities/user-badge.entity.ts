import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from "./user.entitiy";

@Entity()
export class UserBadgeEntity{
  @PrimaryGeneratedColumn()
  userId: number;

  @Column() // 모델 구축 후 nullable 설정
  badgeId: number;

  @ManyToOne(()=>UserEntity, (user)=>user.id)
  user: UserEntity;
}