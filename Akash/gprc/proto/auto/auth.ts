/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export enum Project {
  PNSS = 0,
  PWPS = 1,
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

export interface VerifyJWTAuthTokenRequest {
  token: string;
}

export interface VerifyJWTAuthTokenResponse {
  project: Project;
  uniqueId: string;
  displayName: string;
  role: string[];
  permissions: string[];
  appSpecific: { [key: string]: string };
}

export interface VerifyJWTAuthTokenResponse_AppSpecificEntry {
  key: string;
  value: string;
}

export interface RefreshJWTAuthTokenResponse {
  token: string;
}

export interface PNSSAuthServiceResponseDto {
  sampleId: number;
  customerId: number;
  patientId: number;
  role: string[];
  permissions: string[];
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

export interface CanRoleAccessServiceRequest {
  path: string;
  payload: VerifyJWTAuthTokenResponse | undefined;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  signupService(request: SignupRequestDto): Observable<SignupResponseDto>;

  loginService(request: LoginRequestDto): Observable<LoginResponseDto>;

  verifyJwtAuthToken(request: VerifyJWTAuthTokenRequest): Observable<VerifyJWTAuthTokenResponse>;

  refreshJwtAuthToken(request: VerifyJWTAuthTokenRequest): Observable<RefreshJWTAuthTokenResponse>;

  resetPasswordService(request: ResetPasswordRequestDto): Observable<ResetPasswordResponseDto>;

  logoutService(request: VerifyJWTAuthTokenRequest): Observable<LogoutResponseDto>;

  forgotPasswordService(request: ForgotPasswordRequestDto): Observable<ForgotPasswordResponseDto>;

  canRoleAccessService(request: CanRoleAccessServiceRequest): Observable<SignupResponseDto>;
}

export interface AuthServiceController {
  signupService(
    request: SignupRequestDto,
  ): Promise<SignupResponseDto> | Observable<SignupResponseDto> | SignupResponseDto;

  loginService(request: LoginRequestDto): Promise<LoginResponseDto> | Observable<LoginResponseDto> | LoginResponseDto;

  verifyJwtAuthToken(
    request: VerifyJWTAuthTokenRequest,
  ): Promise<VerifyJWTAuthTokenResponse> | Observable<VerifyJWTAuthTokenResponse> | VerifyJWTAuthTokenResponse;

  refreshJwtAuthToken(
    request: VerifyJWTAuthTokenRequest,
  ): Promise<RefreshJWTAuthTokenResponse> | Observable<RefreshJWTAuthTokenResponse> | RefreshJWTAuthTokenResponse;

  resetPasswordService(
    request: ResetPasswordRequestDto,
  ): Promise<ResetPasswordResponseDto> | Observable<ResetPasswordResponseDto> | ResetPasswordResponseDto;

  logoutService(
    request: VerifyJWTAuthTokenRequest,
  ): Promise<LogoutResponseDto> | Observable<LogoutResponseDto> | LogoutResponseDto;

  forgotPasswordService(
    request: ForgotPasswordRequestDto,
  ): Promise<ForgotPasswordResponseDto> | Observable<ForgotPasswordResponseDto> | ForgotPasswordResponseDto;

  canRoleAccessService(
    request: CanRoleAccessServiceRequest,
  ): Promise<SignupResponseDto> | Observable<SignupResponseDto> | SignupResponseDto;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "signupService",
      "loginService",
      "verifyJwtAuthToken",
      "refreshJwtAuthToken",
      "resetPasswordService",
      "logoutService",
      "forgotPasswordService",
      "canRoleAccessService",
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
