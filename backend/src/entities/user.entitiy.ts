import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  OneToMany 
} from 'typeorm';

import { userBadge } from './user-badge.entity';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  userImage: string;

  @Column({
    length: 10,
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    nullable: false,
  })
  password: string; 

  @Column({
    nullable: false,
  })
  level: string; // 넘버형 

  @Column()
  point: number;

  @CreateDateColumn()
  createAt: Date;

  @OneToMany(() => userBadge, (badge) => badge.badgeId)
  badges: userBadge[]
}