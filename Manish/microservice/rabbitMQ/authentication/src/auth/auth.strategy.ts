
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { UserPayload } from "src/dto/payload.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'mynameismanish11111',
        });
    }

    async validate(payload: UserPayload) {
        console.log('payload1========>', payload);
        return {
            username: payload.username,
            userId: payload.userId,
        };
    }
}
