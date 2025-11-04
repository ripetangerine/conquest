import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @ApiProperty({ example: 'dev123@gmail.com', description: '이메일' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'dev1234567890', description: '비밀번호' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}