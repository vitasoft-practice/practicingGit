import { Body, Controller, Inject, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  AUTH_SERVICE_NAME,
  AuthServiceClient,
  LoginRequestDto,
  LoginResponseDto,
  SignupRequestDto,
  SignupResponseDto,
} from './auth.pb';
import { ClientGrpc } from '@nestjs/microservices';

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
}
