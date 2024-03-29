import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";
import * as mongoose from 'mongoose'
import { Author } from "src/author/entities/author.entity";

export type BookDocument = Book & Document;

@Schema()
export class Book {

    @ApiProperty()
    @Prop()
    Book: string;

    @ApiProperty()
    @Prop()
    Price: number;

    @ApiProperty()
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Author'})
    author : Author

    // @ApiProperty()
    // @Prop({type :[{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}]})
    // author : Author[]

    
    
}

export const BooksSchema = SchemaFactory.createForClass(Book);
