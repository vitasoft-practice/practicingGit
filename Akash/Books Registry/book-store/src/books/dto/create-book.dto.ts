import { ApiProperty } from "@nestjs/swagger";
import { Author } from "src/author/entities/author.entity";

export class CreateBookDto {
    @ApiProperty({type: String})
    Book : string;
    @ApiProperty({type: Number, required : false}) //or @ApiPropertyOptional()
    Price : number;
    @ApiProperty()
    author : Author;
    

    
}

