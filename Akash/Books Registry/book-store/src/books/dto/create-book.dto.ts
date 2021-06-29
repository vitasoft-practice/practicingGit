import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";
import { Author } from "src/author/entities/author.entity";

export class CreateBookDto {
    @ApiProperty({type: String})
    Book : string;
    @ApiProperty({type: Number, required : false}) //or @ApiPropertyOptional()
    Price : number;
    author : Author;
    

    
}

