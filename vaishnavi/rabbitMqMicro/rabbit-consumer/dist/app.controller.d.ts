import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    create(testDto: any): string;
    addingUser(userDto: any): {
        name: string;
        address: string;
    }[];
    updateUser(userDto: any): {
        name: string;
        address: string;
    }[];
}
