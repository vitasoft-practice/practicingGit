import { UnauthorizedException } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import {
  AUTH_SERVICE_NAME,
  AuthServiceClient,
  CanRoleAccessServiceRequest,
} from 'src/proto-generated/auth';

export class RoleGuard implements CanActivate {
  private authServiceClient: AuthServiceClient;
  constructor(@Inject(AUTH_SERVICE_NAME) private readonly client: ClientGrpc) {
    this.authServiceClient =
      this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      if (!request.headers.authorization) return false;

      const bearerToken = request.headers.authorization.replace('Bearer ', '');
      if (!bearerToken) return false;
      const payload = await lastValueFrom(
        this.authServiceClient.verifyJwtAuthToken({
          token: bearerToken,
        }),
      );
      if (!payload) {
        console.log('here=====>');
        return false;
      }
      console.log(payload);

      const canAccessRequest: CanRoleAccessServiceRequest = {
        path: request.getUrl,
        payload: payload,
      };
      const canAccess = await lastValueFrom(
        this.authServiceClient.canRoleAccessService(canAccessRequest),
      );
      console.log(canAccess);

      if (!canAccess.success) return false;
      request.payload = payload;
      return !!payload;
    } catch (error) {
      return false
    }
  }
}
