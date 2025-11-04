import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // -> api/auth/login 경로로 요청을 받음
  @Post('login')
  async login(@Body() authDto: AuthDto){
    return this.authService.login(authDto);
  }
}
