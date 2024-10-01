import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
      @IsString()
	@IsNotEmpty()
    readonly username: string;
    @IsString()
    readonly password: string;
    @IsString()
    readonly bookmarks: string;
}