import {
  Controller,
  Request,
  Post,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @Post('auth/login')
  async loginUser(@Request() req) {     
    const user = await this.authService.validateUser(
      req.body.mobile_number,
      req.body.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.loginUser(req.body);
  }
}
