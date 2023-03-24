/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "projectroles";

export enum Project {
  PNSS = 0,
  PWPS = 1,
  UNRECOGNIZED = -1,
}

export interface ProjectInput {
  project: Project;
}

export interface Role {
  name: string;
  isExpired: boolean;
}

export interface ProjectRoles {
  project: Project;
  roles: Role[];
}

export interface ExpireRoleRequest {
  project: Project;
  roleName: string;
}

export interface IsRoleExpiredRequest {
  project: Project;
  roleName: string;
}

export interface IsRoleExpiredResponse {
  isExpired: boolean;
}

export const PROJECTROLES_PACKAGE_NAME = "projectroles";

export interface ProjectRolesServiceClient {
  createProjectRoles(request: ProjectRoles): Observable<ProjectRoles>;

  getProjectRoles(request: ProjectInput): Observable<ProjectRoles>;

  updateProjectRoles(request: ProjectRoles): Observable<ProjectRoles>;

  deleteProjectRoles(request: ProjectInput): Observable<ProjectRoles>;

  expireRole(request: ExpireRoleRequest): Observable<ProjectRoles>;

  isRoleExpired(request: IsRoleExpiredRequest): Observable<IsRoleExpiredResponse>;
}

export interface ProjectRolesServiceController {
  createProjectRoles(request: ProjectRoles): Promise<ProjectRoles> | Observable<ProjectRoles> | ProjectRoles;

  getProjectRoles(request: ProjectInput): Promise<ProjectRoles> | Observable<ProjectRoles> | ProjectRoles;

  updateProjectRoles(request: ProjectRoles): Promise<ProjectRoles> | Observable<ProjectRoles> | ProjectRoles;

  deleteProjectRoles(request: ProjectInput): Promise<ProjectRoles> | Observable<ProjectRoles> | ProjectRoles;

  expireRole(request: ExpireRoleRequest): Promise<ProjectRoles> | Observable<ProjectRoles> | ProjectRoles;

  isRoleExpired(
    request: IsRoleExpiredRequest,
  ): Promise<IsRoleExpiredResponse> | Observable<IsRoleExpiredResponse> | IsRoleExpiredResponse;
}

export function ProjectRolesServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createProjectRoles",
      "getProjectRoles",
      "updateProjectRoles",
      "deleteProjectRoles",
      "expireRole",
      "isRoleExpired",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ProjectRolesService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ProjectRolesService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PROJECT_ROLES_SERVICE_NAME = "ProjectRolesService";
