import { ApiProperty } from "@nestjs/swagger"

export class CreateAuthorDto {
    @ApiProperty({type: String})
    firstName : string;

    @ApiProperty({type: String})
    lastName : string;


    password : string;

}
