import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Drug {
  @Prop()
  name: string;
  @Prop()
  html: string;
  @Prop()
  information: string;
  @Prop()
  tradenames: string;
  @Prop()
  indications: string;
  @Prop()
  contraindications: string;
  @Prop()
  dosage: string;
  @Prop()
  route: string;
  @Prop()
  warnings: string;
  @Prop()
  sideeffects: string;
  @Prop()
  precautions: string;
  @Prop()
  storage: string;
}

export const DrugSchema = SchemaFactory.createForClass(Drug);
