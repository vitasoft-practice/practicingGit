import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SearchC {
  @Prop()
  id?: number;
  @Prop()
  zipcode: string;
  @Prop()
  status: string;
  @Prop()
  timestamp: string;
}

export const SearchSchema = SchemaFactory.createForClass(SearchC);
