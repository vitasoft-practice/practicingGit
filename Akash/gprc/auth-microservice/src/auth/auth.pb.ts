/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "./google/protobuf/empty.pb";
import { BoolValue } from "./google/protobuf/wrappers.pb";

export const protobufPackage = "auth";

export enum Project {
  PNSS = 0,
  PWPS = 1,
  UNRECOGNIZED = -1,
}

export enum Role {
  ADMIN = 0,
  USER = 1,
  UNRECOGNIZED = -1,
}

export enum Permissions {
  READ = 0,
  WRITE = 1,
  DELETE = 2,
  UNRECOGNIZED = -1,
}

export interface SignupRequestDto {
  username: string;
  password: string;
  email: string;
  phoneNumber?: string | undefined;
}

export interface SignupResponseDto {
  success: boolean;
  message?: string | undefined;
}

export interface PNSSLoginRequestDto {
  project: Project;
  barcode: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export interface PWPSLoginRequestDto {
  project: Project;
  username: string;
  password: string;
}

export interface LoginRequestDto {
  pnssLoginRequest?: PNSSLoginRequestDto | undefined;
  pwpsLoginRequest?: PWPSLoginRequestDto | undefined;
}

export interface LoginResponseDto {
  /** in PWPS add hashed ID and use instead of username */
  token: string;
}

export interface PNSSAuthServiceResponseDto {
  sampleId: number;
  customerId: number;
  patientId: number;
  role: Role[];
  permissions: Permissions[];
}

export interface ResetPasswordRequestDto {
  username: string;
  oldPassword: string;
  newPassword: string;
}

export interface ResetPasswordResponseDto {
  success: boolean;
  message?: string | undefined;
}

export interface LogoutResponseDto {
  logout: boolean;
}

export interface ForgotPasswordRequestDto {
  username: string;
  resetViaSms: boolean;
  resetViaEmail: boolean;
  email?: string | undefined;
  phoneNumber?: string | undefined;
}

export interface ForgotPasswordResponseDto {
  success: boolean;
  message?: string | undefined;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  signupService(request: SignupRequestDto): Observable<SignupResponseDto>;

  loginService(request: LoginRequestDto): Observable<LoginResponseDto>;

  pnssAuthService(request: PNSSLoginRequestDto): Observable<PNSSAuthServiceResponseDto>;

  pwpsAuthService(request: PWPSLoginRequestDto): Observable<BoolValue>;

  resetPasswordService(request: ResetPasswordRequestDto): Observable<ResetPasswordResponseDto>;

  logoutService(request: Empty): Observable<LogoutResponseDto>;

  forgotPasswordService(request: ForgotPasswordRequestDto): Observable<ForgotPasswordResponseDto>;
}

export interface AuthServiceController {
  signupService(
    request: SignupRequestDto,
  ): Promise<SignupResponseDto> | Observable<SignupResponseDto> | SignupResponseDto;

  loginService(request: LoginRequestDto): Promise<LoginResponseDto> | Observable<LoginResponseDto> | LoginResponseDto;

  pnssAuthService(
    request: PNSSLoginRequestDto,
  ): Promise<PNSSAuthServiceResponseDto> | Observable<PNSSAuthServiceResponseDto> | PNSSAuthServiceResponseDto;

  pwpsAuthService(request: PWPSLoginRequestDto): Promise<BoolValue> | Observable<BoolValue> | BoolValue;

  resetPasswordService(
    request: ResetPasswordRequestDto,
  ): Promise<ResetPasswordResponseDto> | Observable<ResetPasswordResponseDto> | ResetPasswordResponseDto;

  logoutService(request: Empty): Promise<LogoutResponseDto> | Observable<LogoutResponseDto> | LogoutResponseDto;

  forgotPasswordService(
    request: ForgotPasswordRequestDto,
  ): Promise<ForgotPasswordResponseDto> | Observable<ForgotPasswordResponseDto> | ForgotPasswordResponseDto;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "signupService",
      "loginService",
      "pnssAuthService",
      "pwpsAuthService",
      "resetPasswordService",
      "logoutService",
      "forgotPasswordService",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
