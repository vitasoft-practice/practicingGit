export interface PatientVerify {
  first_name: string;
  last_name: string;
  dob: string;
}
export enum GenderE {
  MALE = 'male',
  FEMALE = 'female',
}
interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}
export interface PatientInfo {
  patientId: string;
  first_name: string;
  last_name: string;
  dob: string;
  gender: GenderE;
  address: Address;
}
export interface PatientService {
  SavePatientInfo(request: PatientInfo): Promise<PatientInfo>;
  VerifyDetials(request: PatientVerify): Promise<PatientInfo>;
}
