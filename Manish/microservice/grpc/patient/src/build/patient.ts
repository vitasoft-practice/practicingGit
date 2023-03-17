import { Observable } from 'rxjs';
export interface PatientVerify {
  firstName: string;
  lastName: string;
  dob: string;
}
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
export interface GetRequest {
  patientId: string;
}
export interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: number;
}
export interface PatientInfo {
  patientId: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: Gender;
  address: Address;
}
export interface Info {
  patientId: string;
  firstName: string;
  lastName: string;
  dob: string;
  name: string;
  age: string;
  gender: Gender;
  address: Address;
}

export interface UpdateAddress {
  patientId: string;
  address: Address;
}

export interface PatientVerification {
  patientId: string;
  info: PatientVerify;
}
export interface PatientService {
  savePatientInfo(request: PatientInfo): Observable<PatientInfo>;
  verifyDetial(request: PatientVerify): Promise<PatientVerify>;
  savePatient(request: Info): Promise<Info>;
  getPatient(request: GetRequest): Promise<Info>;
  verifyPatient(request: PatientVerification): Observable<Info>;
  updateAdress(request: UpdateAddress): Promise<Info>;
}
