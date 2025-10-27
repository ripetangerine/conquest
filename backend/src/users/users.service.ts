import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './entities/user.entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/dto/user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ){}
  
  // 사용자 생성1
  async create(
    createUserDto: CreateUserDto
  ) : Promise<UserEntity>{
    const newUser = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUser);
  }

  async findOne(id: number): Promise<UserEntity>{
    try{
      return await this.usersRepository.findOneOrFail({where: {id}});
    }catch{
      throw new NotFoundException(`not found user id : ${id}`);
    }
  }

  async findByEmail(email: string) : Promise<UserEntity> {
    try{
      return await this.usersRepository.findOneOrFail({where: {email}});
    }catch(error){
      throw new Error(`이메일로 계정을 찾을 수없습니다 : ${error}`);
    }
  }

  async update(id: number, updateData:Partial<CreateUserDto>) : Promise<UserEntity>{
    await this.usersRepository.update(id, updateData);
    return this.findOne(id);
  }
}
