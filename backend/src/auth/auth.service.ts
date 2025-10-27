import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from 'src/dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ){}

  // 로긴 처리
  async login(loginDto: LoginDto): Promise<{accessToken:string}>{
    const {email, password} = loginDto;
    const user = await this.usersService.findByEmail(email);
    if(!user){
      throw new UnauthorizedException('존재하지 않는 사용자 에러');
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if(!passwordCheck){
      throw new UnauthorizedException('비밀번호가 이상합니다');
    }

    const payload = {sub: user.id, email: user.email};
    const accessToken = this.jwtService.sign(payload);
    return {accessToken};
  }

  //회원가입 비번해시
  async hashPw(password: string) : Promise<string>{
    const s = await bcrypt.genSalt();
    return bcrypt.hash(password, s);
  }
}
