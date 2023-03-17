import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AUTH_SERVICE_NAME,
  LoginRequestDto,
  LoginResponseDto,
  SignupRequestDto,
  SignupResponseDto,
} from './auth.pb';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod(AUTH_SERVICE_NAME, 'SignupService')
  private signup(
    signupRequestDto: SignupRequestDto,
  ): Promise<SignupResponseDto> {
    return this.authService.SignupService(signupRequestDto);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'LoginService')
  private login(payload: LoginRequestDto): Promise<LoginResponseDto> {
    return this.authService.LoginService(payload);
  }
}
