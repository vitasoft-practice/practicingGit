/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class student {
  @Prop()
  username: string;

  @Prop()
  class: string;

  @Prop()
  dept: string;
}
export const AppSchema = SchemaFactory.createForClass(student);
