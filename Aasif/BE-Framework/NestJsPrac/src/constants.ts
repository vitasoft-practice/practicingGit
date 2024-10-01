export enum ResponseStatus {
  BAD_REQUEST = 400,
  VALIDATION_ERROR = 412,
  NOT_FOUND = 404,
  NOT_ALLOWED = 405,
  INTERNAL_ERROR = 500,
  BAD_GATEWAY = 502,
  SUCCESS = 200,
  CREATED = 201,
  CONFLICT = 409,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
}

/* MESSAGES */
export enum DefaultMessage {
  INVALID_USER_PASS = 'Invalid Email or Password',
  INVALID_ACCESS = 'Invalid access',
  ALREADY_EXISTS = 'Already exists.',
  NOT_EXISTS = 'Not exists.',
  INVALID_TOKEN = 'Invalid token',
  SESSION_EXPIRED = 'Session expired',
  EMAIL_ALREADY_EXISTS = 'Email already exists',
}

export const jwtConstants = {
  secret: 'hjvaftia9pa876yahj768a75eda8jkia76',
};

export const dbDetails = {
  uri: 'mongodb://localhost:27017/vitasoft_prac',
};

export const PORT = 5000;

export const handleResponse = (data = null, message: string, success = true) => ({
  data,
  message,
  success,
});

export type PaginatedDataT = {
  data: any[],
  total_records: number,
  total_pages: number
}
