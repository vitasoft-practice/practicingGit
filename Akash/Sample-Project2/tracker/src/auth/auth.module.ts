import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [ 
    UsersModule,
    PassportModule,
    JwtModule.register({
<<<<<<< HEAD
      secret: 'SECRET',
=======
      secret: 'Secret',
>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
