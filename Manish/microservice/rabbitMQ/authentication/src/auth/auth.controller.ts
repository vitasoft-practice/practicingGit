import { UserLoginDto } from './../dto/payload.dto';
import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService) { }



    @MessagePattern({ role: 'auth', cmd: 'sign' })
    async login(user: UserLoginDto) {
        console.log('check====>', user);
        try {
            const res = this.authService.generateJWT(user);

            return res;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    @MessagePattern({ role: 'auth', cmd: 'check' })
    async loggedIn(jwt: string) {
        console.log('check====>jwt', jwt);
        try {
            const res = this.authService.validateToken(jwt);

            return res;
        } catch (e) {
            console.log('errrorrooooo===>', e);
            return false;
        }
    }
}