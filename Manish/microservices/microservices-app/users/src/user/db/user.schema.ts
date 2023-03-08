import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  userId: string;
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
