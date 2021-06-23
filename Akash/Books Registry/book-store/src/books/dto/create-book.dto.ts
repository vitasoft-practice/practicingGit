import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()
    Book : string;
    @ApiProperty({ required : false}) //or @ApiPropertyOptional()
    Price : number;
}

