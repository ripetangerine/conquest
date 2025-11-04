// src/users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Inkweon Kim',
    description: '사용자 이름',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 63)
  name: string;

  @ApiProperty({
    example: 'dev123@gmail.com',
    description: '사용자 이메일',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'dev1234567890',
    description: '사용자 비밀번호',
    required: true,
  })
  @IsString()
  @Length(8, 255)
  password: string;

  @ApiProperty({ example: '1', description: '사용자 레벨' })
  @IsNotEmpty()
  level: string;

  @ApiProperty({ example: 100, description: '사용자 포인트' })
  point: number;
}
