import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin-prudhvi:Quiz123@cluster0.nlgylru.mongodb.net/AcmeDB',
    ),
    UserModule,
    AuthModule,
    ProfileModule,
  ],
})
export class AppModule {}
