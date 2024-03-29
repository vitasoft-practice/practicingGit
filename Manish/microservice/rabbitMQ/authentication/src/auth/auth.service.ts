import { UserLoginDto } from './../dto/payload.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    async generateJWT(user: UserLoginDto): Promise<any> {
        const payload = {
            sub: user.userId,
            username: user.username,
            userId: user.userId,
        };
        const jwtOptions = {
            secret: 'mynameismanish11111',
            privateKey: 'mynameismanish11111',
        };

        return this.jwtService.sign(payload, jwtOptions);
    }

    async getPayloadData(token: string): Promise<any> {

        return this.jwtService.decode(token);
    }
    validateToken(jwt: string) {
        console.log('jwttttttttt---->', jwt);
        return this.jwtService.verify(jwt);
    }

}