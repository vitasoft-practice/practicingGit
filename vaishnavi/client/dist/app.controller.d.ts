import { ClientKafka } from '@nestjs/microservices/client';
export declare class AppController {
    private readonly client;
    constructor(client: ClientKafka);
    onApplicationBootstrap(): Promise<void>;
    create(): import("rxjs").Observable<any>;
    create2(): import("rxjs").Observable<any>;
}
