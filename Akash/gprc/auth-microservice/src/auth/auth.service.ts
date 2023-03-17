import { Injectable } from '@nestjs/common';
import {
  LoginRequestDto,
  LoginResponseDto,
  SignupRequestDto,
  SignupResponseDto,
} from './auth.pb';

@Injectable()
export class AuthService {
  async SignupService(
    signupRequestDto: SignupRequestDto,
  ): Promise<SignupResponseDto> {
    return {
      success: true,
      message: 'successfully created the user',
    } as SignupResponseDto;
  }

  async LoginService(
    loginRequestDto: LoginRequestDto,
  ): Promise<LoginResponseDto> {
    return {
      token: 'token-generated',
    } as LoginResponseDto;
  }
}
