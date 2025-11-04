import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { UserEntity } from './entities/user.entitiy';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ){}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity>{
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id:number): Promise<UserEntity>{
    return this.usersService.findOne(id);
  }


  // 사용자 수정기능 뺌
  // 추후 사용자 프로필 이미지 수정기능 추가

}
