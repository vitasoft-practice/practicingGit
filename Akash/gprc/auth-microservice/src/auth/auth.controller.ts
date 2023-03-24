import { JwtAuthService } from 'src/jwtAuthorization/jwt-auth.service';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  VerifyJWTAuthTokenRequest,
  LogoutResponseDto,
  ResetPasswordRequestDto,
  ResetPasswordResponseDto,
  AUTH_SERVICE_NAME,
  LoginRequestDto,
  LoginResponseDto,
  SignupRequestDto,
  SignupResponseDto,
  CanRoleAccessServiceRequest,
  VerifyJWTAuthTokenResponse,
} from 'src/proto-generated/auth';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtAuthService: JwtAuthService,
  ) {}

  @GrpcMethod(AUTH_SERVICE_NAME, 'signupService')
  private signup(
    signupRequestDto: SignupRequestDto,
  ): Promise<SignupResponseDto> {
    return this.authService.SignupService(signupRequestDto);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'loginService')
  private login(payload: LoginRequestDto): Promise<LoginResponseDto> {
    return this.jwtAuthService.LoginService(payload);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'logoutService')
  private logout(
    payload: VerifyJWTAuthTokenRequest,
  ): Promise<LogoutResponseDto> {
    return this.authService.LogoutService(payload);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'resetPasswordService')
  private resetPassword(
    payload: ResetPasswordRequestDto,
  ): Promise<ResetPasswordResponseDto> {
    return this.authService.ResetPasswordService(payload);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'verifyJwtAuthToken')
  private verifyJwtAuthToken(
    payload: VerifyJWTAuthTokenRequest,
  ): Promise<VerifyJWTAuthTokenResponse> {
    return this.jwtAuthService.VerifyJwtAuthTokenService(payload);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'canRoleAccessService')
  private canRoleAccess(
    payload: CanRoleAccessServiceRequest,
  ): Promise<SignupResponseDto> {
    return this.authService.CanRoleAccessService(payload);
  }
}
