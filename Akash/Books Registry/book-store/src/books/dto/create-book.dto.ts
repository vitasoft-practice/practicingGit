import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty({type: String})
    Book : string;
    @ApiProperty({type: Number, required : false}) //or @ApiPropertyOptional()
    Price : number;
}

