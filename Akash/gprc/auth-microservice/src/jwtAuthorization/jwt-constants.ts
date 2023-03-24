/* eslint-disable prettier/prettier */
import { VerifyJWTAuthTokenResponse, Project } from 'src/proto-generated/auth';

export const JwtPayload: VerifyJWTAuthTokenResponse = {
  project: Project.PNSS,
  uniqueId: 'qweerty123',
  displayName: 'user1',
  role: ['Admin'],
  permissions: ['Read', 'Write'],
  appSpecific: {
    sampleId: '12345',
  },
};
export const jwtConstants = {
  secret: 'ngRGIr1uCMrAo2H3anIxj5QUEzwemvas',
};
