import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsAlphanumeric, isAlphanumeric, MaxLength, maxLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(25)
    name: string;
}
