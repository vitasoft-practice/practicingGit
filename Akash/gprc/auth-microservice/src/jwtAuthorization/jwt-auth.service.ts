/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  LoginRequestDto,
  LoginResponseDto,
  VerifyJWTAuthTokenRequest,
  VerifyJWTAuthTokenResponse,
} from 'src/proto-generated/auth';
import { JwtPayload } from './jwt-constants';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  async LoginService(
    loginRequestDto: LoginRequestDto,
  ): Promise<LoginResponseDto> {
    const accessToken = await this.jwtService.sign(JwtPayload);
    return {
      token: accessToken,
    } as LoginResponseDto;
  }

  async VerifyJwtAuthTokenService(
    payload: VerifyJWTAuthTokenRequest,
  ): Promise<VerifyJWTAuthTokenResponse> {
    try{return this.jwtService.decode(payload.token, {
      json: true,
    }) as VerifyJWTAuthTokenResponse;}
    catch(e){
      throw new RpcException("Invalid Token")
    }
  }
}
