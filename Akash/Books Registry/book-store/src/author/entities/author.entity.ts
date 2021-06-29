import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type AuthorDocument = Author & Document;

@Schema()
export class Author {

    @ApiProperty()
    @Prop()
    firstName: string;

    @ApiProperty()
    @Prop()
    lastName: string;

    
    
}

export const AuthorsSchema = SchemaFactory.createForClass(Author);