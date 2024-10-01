import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from 'src/models';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { jwtConstants } from 'src/constants';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ]),
    CacheModule.register({
      isGlobal: true,
      store: 'redisStore',
      host: 'localhost',
      port: 6378,
      ttl: 24 * 60 * 60 * 1000, // Time to live in milliseconds - 24 hours * 60 mins * 60 secs * 1000 ms
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtService,
    UserService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
