// src/entities/user.entity.ts
import { Entity, Column, OneToMany, } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { userBadge } from './user-badge.entity';

@Entity({ name: 'user' })
export class UserEntity{
  @ApiProperty({
    example: 'Inkweon Kim',
    description: '사용자 이름',
    required: true,
  })
  @Column({ length: 63 })
  name: string;

  @ApiProperty({
    example: 'dev123@gmail.com',
    description: '사용자 이메일',
    required: true,
  })
  @IsEmail()
  @Column({ length: 63 })
  email: string;

  @ApiProperty({
    example: 'dev1234567890',
    description: '사용자 비밀번호',
    required: true,
  })
  @Column({ length: 255 })
  password: string;

  @Column({
    nullable: false,
  })
  level: string; // 넘버형 

  @Column()
  point: number;


  // 연결
  @OneToMany(() => userBadge, (badge) => badge.badgeId)
  badges: userBadge[]
}