import { ClientProxy } from '@nestjs/microservices/client';
import { Userdto } from './user.dto';
export declare class AppController {
    private readonly client;
    constructor(client: ClientProxy);
    onApplicationBootstrap(): Promise<void>;
    create(): import("rxjs").Observable<any>;
    AddUser(userDto: Userdto): import("rxjs").Observable<any>;
    updateUserAddress(userDto: Userdto): import("rxjs").Observable<any>;
}
