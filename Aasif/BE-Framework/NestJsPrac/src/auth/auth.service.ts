import {
  HttpException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DefaultMessage, ResponseStatus, jwtConstants } from 'src/constants';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs'
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }

  async setUserCredentials(userId: string, credentials: any): Promise<void> {
    await this.cacheManager.set(userId, credentials);
  }

  async getUserCredentials(userId: string): Promise<any> {
    return await this.cacheManager.get(userId);
  }

  async deleteUserCredentials(userId: string): Promise<void> {
    await this.cacheManager.del(userId);
  }

  async signIn(
    email: string,
    pass: string,
  ): Promise<string> {
    const user = await this.usersService.findOne({ email: email });
    if (!user) {
      throw new HttpException(
        DefaultMessage.INVALID_USER_PASS,
        ResponseStatus.BAD_REQUEST,
      );
    } else {

      const idPasswordMatched = await bcrypt.compare(
        pass,
        user.password,
      );
      if (!idPasswordMatched)
        throw new HttpException(
          DefaultMessage.INVALID_USER_PASS,
          ResponseStatus.BAD_REQUEST,
        );

      const payload = {
        id: user._id?.toString(),
        email: user.email,
      };
      let privateKey = jwtConstants.secret;

      let options = {
        secret: privateKey,
        expiresIn: '300m',
      };

      const token = this.jwtService.sign(payload, options)
      const userData = user.toObject();
      delete userData.password;
      await this.setUserCredentials(user._id?.toString(), userData)
      const data = await this.getUserCredentials(user._id?.toString())
      console.log(data, "data")
      return token;
    }
  }

  async findUser(payload: {}) {
    const user = await this.usersService.findOne(payload);
    return user;
  }

  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: jwtConstants.secret,
    });
  }
}
