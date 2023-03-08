import { ClientProxy } from '@nestjs/microservices/client';
export declare class AppController {
    private readonly client;
    constructor(client: ClientProxy);
    onApplicationBootstrap(): any;
    create(): any;
}
