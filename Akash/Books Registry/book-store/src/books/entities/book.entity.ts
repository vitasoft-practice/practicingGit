import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type BookDocument = Book & Document;

@Schema()
export class Book {

    

    @ApiProperty()
    @Prop()
    Book: string;

    @ApiProperty()
    @Prop()
    Price: number;

    

    
}

export const BooksSchema = SchemaFactory.createForClass(Book);
