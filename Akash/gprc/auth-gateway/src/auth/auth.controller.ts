import { Body, Controller, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AuthServiceClient,
  AUTH_SERVICE_NAME,
  SignupRequestDto,
  SignupResponseDto,
  LoginRequestDto,
  LoginResponseDto,
  ResetPasswordRequestDto,
  ResetPasswordResponseDto,
  LogoutResponseDto,
} from 'src/proto-generated/auth';
import { RoleGuard } from 'src/guards/role.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  private svc: AuthServiceClient;
  constructor(
    @Inject(AUTH_SERVICE_NAME)
    private readonly client: ClientGrpc,
  ) {}
  public onModuleInit(): void {
    this.svc = this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  @Post('signup')
  private async register(
    @Body() body: SignupRequestDto,
  ): Promise<Observable<SignupResponseDto>> {
    return this.svc.signupService(body);
  }

  @Post('login')
  private async login(
    @Body() body: LoginRequestDto,
  ): Promise<Observable<LoginResponseDto>> {
    return this.svc.loginService(body);
  }

  @UseGuards(RoleGuard)
  @Post('reset-password')
  private async resetPassword(
    @Body() resetPasswordRequestDto: ResetPasswordRequestDto,
  ): Promise<Observable<ResetPasswordResponseDto>> {
    return this.svc.resetPasswordService(resetPasswordRequestDto);
  }

  @UseGuards(RoleGuard)
  @Post('logout')
  private async logout(
    @Req() request: Request,
  ): Promise<Observable<LogoutResponseDto>> {
    return this.svc.logoutService({
      token: request.headers['authorization'].replace('Bearer ', ''),
    });
  }
}
