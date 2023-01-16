import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './profile.model';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel('profile')
    private readonly profileModel: Model<ProfileDocument>,
  ) {}

  async postProfile(Profile: object): Promise<Profile> {
    return this.profileModel.create(Profile);
  }
}
