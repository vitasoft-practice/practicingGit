import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
<<<<<<< HEAD
            secretOrKey: 'SECRET'
=======
            secretOrKey: 'Secret'
>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498
        })
    }
    async validate(data :any ){
        return {
            id : data.sub,
            name : data.name
        }
    }

}