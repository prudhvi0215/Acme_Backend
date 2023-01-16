import { Body, Controller, Get, Post } from '@nestjs/common';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  // @UseGuards(JwtGuard) //For Authorization

  // @UseGuards(AuthGuard('local'))
  @Post('/createProfile')
  async createProfileData(@Body('profile') profileData: object): Promise<any> {
    return await this.profileService.postProfile(profileData);
  }
}
