import { Injectable } from '@nestjs/common';
import {
  SignupRequestDto,
  SignupResponseDto,
  LoginRequestDto,
  LoginResponseDto,
  VerifyJWTAuthTokenRequest,
  LogoutResponseDto,
  ResetPasswordRequestDto,
  ResetPasswordResponseDto,
  VerifyJWTAuthTokenResponse,
  CanRoleAccessServiceRequest,
  Project,
} from 'src/proto-generated/auth';

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
  async LogoutService(
    loginRequestDto: VerifyJWTAuthTokenRequest,
  ): Promise<LogoutResponseDto> {
    return {
      logout: true,
    } as LogoutResponseDto;
  }

  async ResetPasswordService(
    request: ResetPasswordRequestDto,
  ): Promise<ResetPasswordResponseDto> {
    return {
      success: true,
      message: 'password reset successful',
    } as ResetPasswordResponseDto;
  }

  async CanRoleAccessService(
    payload: CanRoleAccessServiceRequest,
  ): Promise<SignupResponseDto> {
    return {
      success: true,
      message: 'User can access the path',
    } as SignupResponseDto;
  }
}
