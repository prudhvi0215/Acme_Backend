import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private jwtService: JwtService) { }
    async validateUser(mobile_number: string, password: string): Promise<any> {
        const user = await this.usersService.getUser({ mobile_number });
        if (!user) return null;
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }
        if (user && passwordValid) {
            return user;
        }
        return null;
    }
    async loginUser(user: any) {    
        const payload = { mobile_number: user.mobile_number, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }    
}