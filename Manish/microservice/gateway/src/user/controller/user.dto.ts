import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class UserLoginDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
export class UserUpdateInfo {
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
}
