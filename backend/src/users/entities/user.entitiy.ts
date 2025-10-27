// src/entities/user.entity.ts
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserBadgeEntity } from './user-badge.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 63 })
  name: string;

  @Column({ length: 63 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ nullable: false })
  level: string;

  @Column()
  point: number;

  @OneToMany(() => UserBadgeEntity, (badge) => badge.user)
  badges: UserBadgeEntity[];
}
