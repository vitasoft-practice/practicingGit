import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

    @ApiProperty()
    @Prop({type : mongoose.Schema.Types.ObjectId, ref : 'Book'})
    User: string;
    
}

export const UsersSchema = SchemaFactory.createForClass(User);