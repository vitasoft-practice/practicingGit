"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@nestjs/microservices/client");
const user_dto_1 = require("./user.dto");
let AppController = class AppController {
    constructor(client) {
        this.client = client;
    }
    async onApplicationBootstrap() {
        await this.client.connect();
    }
    create() {
        return this.client.send({ role: 'test', cmd: 'create' }, '<<===  this is the value im passing ===>> ');
    }
    AddUser(userDto) {
        console.log('create data:', userDto);
        return this.client.send('addUser', userDto);
    }
    updateUserAddress(userDto) {
        console.log('edit data:', userDto);
        return this.client.send('updateUser', userDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.Userdto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "AddUser", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.Userdto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateUserAddress", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('BUNNY_SERVICE')),
    __metadata("design:paramtypes", [client_1.ClientProxy])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map