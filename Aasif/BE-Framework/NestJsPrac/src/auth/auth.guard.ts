import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  HttpException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants';
import { DefaultMessage, ResponseStatus } from 'src/constants';
import { AuthService } from './auth.service';
import { extractTokenFromHeader } from 'src/utils/extract-token';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    let verifyToken: {};
    try {
      verifyToken = this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      });

      // const user = await this.authService.findUser({ _id: verifyToken['id'] });
      const user = await this.authService.getUserCredentials(verifyToken['id'])
      if (!user) {
        throw new UnauthorizedException();
      }
      request['user'] = user;
    } catch (error) {
      console.log(error.message)
      let errorMsg = error.message;
      if (errorMsg == 'jwt expired') {
        errorMsg = DefaultMessage.SESSION_EXPIRED
      } else if (errorMsg == 'invalid signature') {
        errorMsg = DefaultMessage.INVALID_TOKEN
      }
      throw new HttpException(
        errorMsg,
        ResponseStatus.BAD_REQUEST,
      );
    }
    return true;
  }
}
