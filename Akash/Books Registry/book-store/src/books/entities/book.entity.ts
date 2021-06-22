import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop()
    Book: string;

    @Prop()
    Price: number;
}

export const BooksSchema = SchemaFactory.createForClass(Book);
